//@ts-check
// var Timer = require('../node_modules/easytimer/src/easytimer.js').Timer;
// @ts-ignore
// @ts-ignore
var Timer = require("easytimer");
var SocketController = require("./socketController");
var log = require("./loggingController").log;
var logStatus = require("./loggingController").logStatus;
var ScriptController = require("./scriptController");
const BranchController = require("./branchController");
const HttpManager = require("../Managers/httpManager");
// @ts-ignore
var timerArr = [];
var games = [];
var gamesJson = {};
var gameUpdater;
exports.gamesJson = gamesJson
InitializeInstances();

class Game {
  constructor(name, timeLimit, script) {
    this.name = name;
    this.timer = new Timer();
    this.timeLimit = timeLimit;
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    this.completedEvents = [];
    this.script = script;
    this.states = script.states;
    this.countdown = true;
    this.ended = false;
    this.prepareStructure();
    this.displayedHint = ""
    // this.createGameTimer();
    this.timerSecondsUpdatedListner = this.timerSecondsUpdatedListner.bind(
      this
    );
    this.timerTargetAchievedListner = this.timerTargetAchievedListner.bind(
      this
    );
  }

  prepareStructure() {
    this.script.timeUpdate = this.time;
    // this.states = this.script.states;
    this.script.displayedHint = this.displayedHint;
    this.script.ended = this.ended;
  }

  createGameTimer() {
    // this.timer = new Timer();
    this.timer = new Timer();
    // if (this.timeLimit == null) {
    //   this.timeLimit['hours'] = Number(this.script.time.hours);
    //   this.timeLimit['minutes'] = Number(this.script.time.minutes);
    //   this.timeLimit['seconds'] = Number(this.script.time.seconds);
    // }
    this.timer.start({
      // @ts-ignore
      countdown: this.countdown,
      precision: "seconds",
      startValues: {
        hours: this.timeLimit.hours,
        minutes: this.timeLimit.minutes,
        seconds: this.timeLimit.seconds
      }
    });
    log(this.timeLimit);
    this.prepareTimerEventListners();
  }

  endGame() {
    this.pauseTime();
    this.ended = true;
    this.prepareTimerRemoval();
  }

  //TODO: read the game script here, and send socket events for triggers

  addState(state) {
    this.states.push(state);
  }

  resetStates() {
    this.states.forEach(state => {
      state.active = false;
    });
  }

  getStates() {
    return this.states;
  }

  setName(name) {
    this.name = name;
  }

  setTime(time) {
    this.time = time;
  }

  getTime() {
    return this.time;
  }

  getTimeStaticValues() {
    let r = {
      hours: this.time.hours,
      minutes: this.time.minutes,
      seconds: this.time.seconds
    };
    return r;
  }

  setEventComplete(eventName) {
    var t = this.getTimeStaticValues();
    var evt = {
      name: eventName,
      completed_time: t,
      status: "complete"
    };
    var newEvt = true;
    for (var i = 0; i < this.completedEvents.length; i++) {
      if (this.completedEvents[i].eventName == eventName) {
        newEvt = false;
        return;
      }
      if (i == this.completedEvents.length - 1 && newEvt == true) {
        this.completedEvents.push(evt);
      }
    }
  }

  setScript(script) {
    this.script = script;
  }

  getScript() {
    return this.script;
  }

  startTime() {
    // @ts-ignore
    this.createGameTimer();
  }

  resumeTime() {
    // @ts-ignore
    this.timer.start();
  }

  pauseTime() {
    this.timer.pause();
  }

  stopTime() {
    this.timer.stop();
  }

  resetTime() {
    // @ts-ignore
    this.timer.reset();
  }

  checkStateTriggers(state) {
    for (var t of this.script.triggers) {
      if (t.state == state) {
        log("DO TRIGGER ON THIS STATE!!");
      }
    }
  }

  checkTimeTriggers(time) {
    for (var t of this.script.triggers) {
      if (t.time == time) {
        log("DO TRIGGER ON THIS TIME!!");
      }
    }
  }

  updateState(stateName, active) {
    for (var s of this.script.states) {
      if (s.name == stateName) {
        s.active = active;
      }
    }
  }

  updateTime(customTime) {
    this.prepareTimerRemoval().then(() => {
      this.timer = new Timer();
      this.timer.start({
        // @ts-ignore
        countdown: this.countdown,
        precision: "seconds",
        startValues: {
          hours: customTime.hours,
          minutes: customTime.minutes,
          seconds: customTime.seconds
        }
      });
      this.prepareTimerEventListners();
    });
  }

  prepareTimerEventListners() {
    // this.gameUpdater = setInterval(this.timerSecondsUpdatedListner, 1000);
    // this.timer.addEventListener(
    //   // @ts-ignore
    //   "secondsUpdated",
    //   this.timerSecondsUpdatedListner
    // );
    this.timerSecondsUpdatedListner();
    this.timer.addEventListener(
      // @ts-ignore
      "targetAchieved",
      this.timerTargetAchievedListner
    );
  }

  timerSecondsUpdatedListner() {
    let t = this;
    if (!this.ended) {
      // return;
      // this.gameUpdater = setTimeout(this.timerSecondsUpdatedListner, 1000);
      setTimeout(this.timerSecondsUpdatedListner, 1000);

    }
    this.prepareStructure();
    // @ts-ignore
    t.time.hours = t.timer.getTimeValues().hours;
    // @ts-ignore
    t.time.minutes = t.timer.getTimeValues().minutes;
    // @ts-ignore
    t.time.seconds = t.timer.getTimeValues().seconds;
    SocketController.socketSendEvent({
      instance_update: this
    });
    this.checkTimeTriggers(this.time);

  }

  timerTargetAchievedListner() {
    var complete_state = {
      name: "timer_complete",
      active: true
    };
    var t = this;
    t.endGame();
    setScriptStates(t.name, [complete_state]);
    SocketController.socketSendEvent({
      instance_update: t
    });
  }

  prepareTimerRemoval() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      // @ts-ignore
      // this.timer.removeEventListener(
      //   // @ts-ignore
      //   "secondsUpdated",
      //   this.timerSecondsUpdatedListner
      // );

      // clearInterval(this.gameUpdater);
      // clearTimeout(this.gameUpdater);
      this.timer.removeEventListener(
        // @ts-ignore
        "targetAchieved",
        this.timerTargetAchievedListner
      );
      resolve();
    });
  }
}

//=============================================//
//====== HTTP functions ========================//
//===========================================//

exports.newGame = function (req, res) {
  var exScript = req.body.name;
  var timeLimit = req.body.timeLimit;
  localNewGame(exScript.name, timeLimit, game => {
    res.send(game);
  });
};

function localNewGame(
  scriptName,
  timeLimit = {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  callback = null
) {
  ScriptController.localGetFreshScript(scriptName).then(script => {
    // remove duplicate game instance
    removeDuplicateInstance(script).then(() => {
      //if no time, then go by script time
      var game = new Game(script.name, timeLimit, script);
      game.resetStates();
      game.startTime();
      gamesJson[`${script.name}`] = game;
      BranchController.branchResetStates(script).then(result => {
        log(result);
      });
      callback(game);
    });
  });
}

exports.readGame = function (req, res) {
  var name = req.params.name;

  //TODO: test
  for (var key in gamesJson) {
    if (gamesJson.hasOwnProperty(name)) {
      const scr = gamesJson[`${name}`];
      let result = {
        completedEvents: scr.completedEvents,
        countdown: scr.countdown,
        displayedHint: scr.displayedHint,
        eneded: scr.ended,
        name: scr.name,
        script: scr.script,
        states: scr.states,
        time: scr.time,
        timeLimit: scr.timeLimit
      }
      res.send(result);
      return;
    }
  }
};

// @ts-ignore
// @ts-ignore
exports.readAll = function (req, res) {
  // res.send(games);
  JsonToArr(gamesJson).then(arr => {
    res.send(arr);
  });
};

// @ts-ignore
// @ts-ignore
exports.updateGameState = function (req, res) {
  var name = req.body.name;
  var state = req.body.state;
  localUpdateState(name, state);
};

// @ts-ignore
exports.updateGameTime = function (req, res) {
  var name = req.body.name;
  var time = req.body.time;
  localUpdateTime(name, time);
  res.send(time);
};

exports.deleteGame = function (req, res) {
  var scriptName = req.params.name;
  // @ts-ignore
  var gRemoved;

  //Handle the end of the game
  // @ts-ignore
  localEndGame(scriptName).then(endResult => {
    var result = {
      result: gamesJson[scriptName]
    };
    res.send(result);
  });
};

exports.pauseGame = function (req, res) {
  var name = req.params.name;
  var result = {
    status: "paused",
    name: name
  };
  if (gamesJson.hasOwnProperty(name)) {
    gamesJson[`${name}`].pauseTime();
    res.send(result);
  }
};

exports.resumeGame = function (req, res) {
  var name = req.params.name;
  var result = {
    status: "resumed",
    name: name
  };
  if (gamesJson.hasOwnProperty(name)) {
    gamesJson[`${name}`].resumeTime();
    res.send(result);
  }
};

// ===================================================================== //
// =======================Force Event Action =========================== //
// ===================================================================== //

// Outgoing force event to branch
exports.forceEvent = function (req, res) {
  var name = req.body.name;
  var eventName = req.body.forceEvent;
  log("forcing event", name, eventName);
  getScriptInstance(name).then(instanceName => {
    gamesJson[`${instanceName}`].script.events.forEach(function (evt) {
      if (evt.name == eventName) {
        let address = gamesJson[`${instanceName}`].script.branch_address;
        let masterId = gamesJson[`${instanceName}`].script.masterId;
        BranchController.sendEvent(instanceName, eventName, address, masterId);
        res.send(gamesJson[`${instanceName}`]);
      }
    });
  });
};

exports.forceAction = function (req, res) {
  var name = req.body.name;
  var actionName = req.body.forceAction;
  res.send({ success: true });
  getScriptInstance(name).then(instanceName => {
    var masterId = gamesJson[`${instanceName}`].script.masterId;
    logStatus(
      "============ gameController.forceAction, sending action==================",
      gamesJson[`${instanceName}`].script
    );
    gamesJson[`${instanceName}`].script.actions.forEach(function (act) {
      if (act.name == actionName) {
        act.status = "complete";
        let address = gamesJson[`${instanceName}`].script.branch_address;
        BranchController.sendAction(
          instanceName,
          actionName,
          address,
          masterId
        );
      }
    });
  });
};

/**
 *From branch server, event has been completed
 *
 * @param {*} req
 * @param {*} res
 */
exports.setEventCompleted = function (req, res) {
  var scriptName = req.body.event.branch_name;
  var eventName = req.body.event.name;
  var updatedStates = req.body.states;
  log("=========Completed Event===========");
  logStatus(req.body);
  instanceEventCompletion(eventName, scriptName, updatedStates);
  // setStartAndEndCommands(scriptName, eventName);
  res.send({
    event: "completed"
  });
};

function setStartAndEndCommands(scriptName, event_state_name) {
  switch (event_state_name) {
    case "start_instance":
      ScriptController.localGetFreshScript(scriptName).then(script => {
        var timeLimit = {
          hours: parseInt(script.time, 10),
          minutes: parseInt(script.time.minutes, 10),
          seconds: parseInt(script.time.seconds, 10)
        };
        localNewGame(scriptName, timeLimit, () => {
          // instanceEventCompletion(event_state_name, script.name); //TODO: make this better
          log("Created new game from device event");
        });
      });
      break;
    case "end_instance":
      localEndGame(scriptName);
      break;
    default:
      break;
  }
}

function instanceEventCompletion(eventName, scriptName, updatedStates = null) {
  getScriptInstance(scriptName).then(instanceName => {
    gamesJson[`${instanceName}`].script.events.forEach(function (evt) {
      if (evt.name == eventName) {
        const t = gamesJson[`${instanceName}`].getTimeStaticValues();
        evt.status = "complete";
        evt.completed_time = t;
        setScriptStates(instanceName, evt.states);
      }
    });
  });
}

function getScriptInstance(scriptName) {
  return new Promise((resolve, reject) => {
    for (var key in gamesJson) {
      if (gamesJson.hasOwnProperty(`${key}`)) {
        if (gamesJson[`${key}`].name == scriptName) {
          resolve(key);
          return;
        }
      }
    }
  });
}
exports.getScriptInstance = getScriptInstance

//=============================================//
//====== Local functions ========================//
//===========================================//

/** For external modules */
exports.loUpdateGameState = function (name, state) {
  localUpdateState(name, state);
};

/** For external modules */
exports.loUpdateGameTime = function (name, time) {
  localUpdateTime(name, time);
};

/**
 * Use in startup to create instances
 *
 */
function InitializeInstances() {
  ScriptController.readScriptsInDirectory().then(scripts => {
    for (let i = 0; i < scripts.length; i++) {
      const s = scripts[i];
      var game = new Game(s.name, s.time, s);
      game.resetStates();
      gamesJson[`${s.name}`] = game;
      BranchController.branchResetStates(s).then(result => {
        log(result);
      });
    }
  });
}

function localUpdateState(instance_name, state) {
  for (var instance in gamesJson) {
    if (gamesJson.hasOwnProperty(`${instance}`)) {
      // if (gamesJson[`${instance}`].name == instance_name) {
      //   findTriggersByState(instance, state.name).then(
      //     triggers => {
      //       SocketController.socketEmit(`instance name : ${instance_name} ||  ${instance}|| ${state.name}`)
      //       for (let i = 0; i < triggers.length; i++) {
      //         const trigger = triggers[i];
      //         sendTrigger(instance, trigger);
      //       }
      //     }
      //   );
      // }
    }
  }
}

// TODO: unused these 2????
exports.localNewGame = function (script, timeLimit, canStart) {
  loNewGame(script, timeLimit, canStart);
};

function loNewGame(script, timeLimit, canStart) {
  return new Promise((resolve, reject) => {
    removeDuplicateInstance(script).then(() => {
      //if no time, then go by script time
      var game = new Game(script.name, timeLimit, script);
      game.startTime();
      game.displayedHint = "";
      gamesJson[`${script.name}`] = game;
      // games.push(game);
      resolve(game);
    });
  });
}

function localUpdateTime(name, time) {
  for (var key in gamesJson) {
    if (gamesJson.hasOwnProperty(`${key}`)) {
      if (gamesJson[`${key}`].name == name) {
        gamesJson[`${key}`].updateTime(time);
        // key[`${time}`] = time
      }
    }
  }
}

function removeDuplicateInstance(script) {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    if (gamesJson.hasOwnProperty(`${script.name}`)) {
      gamesJson[`${script.name}`].endGame();
      resolve();
    } else {
      resolve();
    }
  });
}

function localEndGame(scriptName) {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    if (gamesJson.hasOwnProperty(`${scriptName}`)) {
      localUpdateState(scriptName, { name: "end_instance", active: true });
      gamesJson[`${scriptName}`].endGame();
      resolve(`{"ended": ${scriptName}}`);
    } else {
      resolve(`{"ended": false}`);
    }
  });
}

// @ts-ignore
function localDeleteGame(scriptName) {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    if (gamesJson.hasOwnProperty(`${scriptName}`)) {
      gamesJson[`${scriptName}`] = null;
      resolve(`{"removed": ${scriptName}}`);
    } else {
      resolve(`{"removed": false}`);
    }
  });
}

function findTriggersByState(instanceName, stateName, alreadyActive) {
  SocketController.socketEmit(`Finding trigger for : ${instanceName} | ${stateName}`)
  let triggersArr = new Array();
  return new Promise((resolve, reject) => {
    let selectedScript = gamesJson[`${instanceName}`].script;
    SocketController.socketEmit(`ScriptFinding it for : ${gamesJson[`${instanceName}`].name}`)
    for (let i = 0; i < selectedScript.triggers.length; i++) {
      const trigger = selectedScript.triggers[i];
      if (trigger.trigger == stateName) {
        if (alreadyActive) {
          if (trigger.can_toggle == true) {
            triggersArr.push(trigger);
          }
        }
        else {
          triggersArr.push(trigger);
        }
      }
      if (i == selectedScript.triggers.length - 1) {
        resolve(triggersArr);
      }
    }
  });
}

/**
 *Set the states to reflect the event
 *
 * @param {*} instanceName
 * @param {*} eventStates
 */
function setScriptStates(instanceName, eventStates) {
  var isAlreadyActive = false;
  var gStates = gamesJson[`${instanceName}`].states;
  for (var i = 0; i < eventStates.length; i++) {
    for (var j = 0; j < gStates.length; j++) {
      if (gStates[j].name == eventStates[i].name) {
        if (gStates[j].active) {
          isAlreadyActive = true; // should copy value not ref, but js is weird.
        }
        gStates[j].active = eventStates[i].active;
        if (eventStates[i].active == true) {
          setStartAndEndCommands(instanceName, eventStates[i].name);
          findTriggersByState(instanceName, eventStates[i].name, isAlreadyActive).then(
            triggers => {
              for (let i = 0; i < triggers.length; i++) {
                const trigger = triggers[i];
                sendTrigger(instanceName, trigger);
              }
            }
          );
        }
      }
    }
  }
}

function sendTrigger(instanceName, trigger) {
  var msg = {
    message_type: "trigger",
    scriptName: instanceName,
    trigger: trigger,
    screenName: trigger.screenName
  };
  SocketController.socketEmit(msg);
  if (trigger.hint != "") {
    getScriptInstance(instanceName).then(instance => {
      gamesJson[`${instance}`].displayedHint = trigger.hint
    })
  }
  if (trigger.httpRequestType != "NONE" && trigger.httpRequestType != "") {
    var reqOptions = {
      body: {
        type: trigger.httpRequestType,
        url: trigger.httpRequestUrl,
        body: trigger.httpRequestBody
      }
    };
    HttpManager.sendHttpRequest(reqOptions, response => {
      log(response);
    });
  }
}

/**
 *Create array from gamesJson
 *
 */
function JsonToArr(json) {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    var arr = [];
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        arr.push(json[key]);
      }
    }
    resolve(arr);
  });
}
