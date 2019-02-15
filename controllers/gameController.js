//@ts-check
// var Timer = require('../node_modules/easytimer/src/easytimer.js').Timer;
// @ts-ignore
// @ts-ignore
var Timer = require("easytimer");
var SocketController = require("./socketController");
var log = require("./loggingController").log;
var ScriptController = require("./scriptController");
const BranchController = require("./branchController");
// @ts-ignore
var timerArr = [];

class Game {
  constructor(name, timeLimit, script) {
    this.name = name;
    this.timeLimit = timeLimit;
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.script = script;
    this.states = [];
    this.countdown = true;
    this.ended = false;
    this.prepareStructure();
    // this.createGameTimer();
  }

  prepareStructure() {
    this.script.timeUpdate = this.time;
    this.script.states = this.states;
    this.script.ended = this.ended;
  }

  createGameTimer() {
    // this.timer = new Timer();
    this.timer = new Timer();
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
    log(this.timeLimit)
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

  getTimeStaticValues(){
    let r = {
      hours: this.time.hours,
      minutes: this.time.minutes,
      seconds: this.time.seconds,
    }
    return r;
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

  checkStateTriggers(state){
    for(var t of this.script.triggers){
      if(t.state == state){
        log("DO TRIGGER ON THIS STATE!!")
      }
    }
  }

  checkTimeTriggers(time){
    for(var t of this.script.triggers){
      if(t.time == time){
        log("DO TRIGGER ON THIS TIME!!")
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
    var t = this;
    // @ts-ignore
    this.timer.addEventListener("secondsUpdated", function (e) {
      if (t.ended) {
        return;
      }
      t.prepareStructure();
      // @ts-ignore
      t.time.hours = t.timer.getTimeValues().hours;
      // @ts-ignore
      t.time.minutes = t.timer.getTimeValues().minutes;
      // @ts-ignore
      t.time.seconds= t.timer.getTimeValues().seconds;
      SocketController.socketSendEvent({
        instance_update: t
      });
      t.checkTimeTriggers(t.time);
    });
    // @ts-ignore
    this.timer.addEventListener("targetAchieved", function (e) {
      t.endGame();
      SocketController.socketSendEvent({
        instance_update: t
      });
    });
  }

  prepareTimerRemoval() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      // @ts-ignore
      var t = this;
      // @ts-ignore
      this.timer.removeEventListener("secondsUpdated", e => {
        let res = "event listner removed: seconds updated";
        log(res, e);
      });
      // @ts-ignore
      this.timer.removeEventListener("targetAchieved", e => {
        let res = "event listner removed: seconds updated";
        log(res, e);
      });
      resolve();
    });
  }
}

// @ts-ignore
var games = [];
var gamesJson = {};

//=============================================//
//====== HTTP functions ========================//
//===========================================//

exports.newGame = function (req, res) {
  var exScript = req.body.name;
  var timeLimit = req.body.timeLimit;
  ScriptController.localGetFreshScript(exScript.name).then(script =>{
    // remove duplicate game instance
    removeDuplicateInstance(script).then(() => {
      //if no time, then go by script time
      var game = new Game(script.name, timeLimit, script);
      game.startTime();
      gamesJson[`${script.name}`] = game;
      // games.push(game);
      res.send(game);
    });


  })
  // TODO: test
};

exports.readGame = function (req, res) {
  var name = req.params.name;

  //TODO: test
  for (var key in gamesJson) {
    if (gamesJson.hasOwnProperty(name)) {
      res.send(gamesJson[`${name}`]);
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
    status : "paused",
    name : name
  }
  if (gamesJson.hasOwnProperty(name)) {
    gamesJson[`${name}`].pauseTime();
    res.send(result);
  }
};

exports.resumeGame = function (req, res) {
  var name = req.params.name;
  var result = {
    status : "resumed",
    name : name
  }
  if (gamesJson.hasOwnProperty(name)) {
    gamesJson[`${name}`].resumeTime();
    res.send(result);
  }
};

// ===================================================================== //
// =======================Force Event Action =========================== //
// ===================================================================== //


exports.forceEvent = function (req, res) {
  var name = req.body.name
  var eventName = req.body.forceEvent
  var time = req.body.completedTime
  console.log(name, eventName)
  getScriptInstance(name).then((instanceName) => {
    gamesJson[`${instanceName}`].script.events.forEach(function(evt){
      if(evt.name == eventName){
        const t = gamesJson[`${instanceName}`].getTimeStaticValues();
        let address = gamesJson[`${instanceName}`].script.branch_address;
        let masterId = gamesJson[`${instanceName}`].script.masterId;
        evt.status = "complete";
        evt.completed_time = t;
        BranchController.sendEvent(instanceName, eventName, address, masterId);
        res.send(gamesJson[`${instanceName}`]);
      }
    })
  })
}

exports.forceAction = function (req, res) {
  var name = req.body.name
  var actionName = req.body.forceAction
  getScriptInstance(name).then((instanceName) => {
    var masterId = gamesJson[`${instanceName}`].script.masterId;
    log("============ gameController.forceAction, sending action==================", gamesJson[`${instanceName}`].script)
    gamesJson[`${instanceName}`].script.actions.forEach(function(act){
      if(act.name == actionName){
        act.status = "complete";
        let address = gamesJson[`${instanceName}`].script.branch_address;
        BranchController.sendAction(instanceName, actionName, address, masterId);
      }
    })
  })
}

function setEventCompleted(req, res){
  var scriptName = req.body.branch_name;
  var eventName = req.body.name;
  getScriptInstance(scriptName).then((instanceName) => {
    gamesJson[`${instanceName}`].script.events.forEach(function(evt){
      if(evt.name == eventName){
        const t = gamesJson[`${instanceName}`].getTimeStaticValues();
        evt.status = "complete";
        evt.completed_time = t;
        res.send({event : "completed"});
      }
    })
  })
}
exports.setEventCompleted = setEventCompleted;


function getScriptInstance(name) {
  return new Promise((resolve, reject) => {
    for (var key in gamesJson) {
    if (gamesJson.hasOwnProperty(`${key}`)) {
      if (gamesJson[`${key}`].name == name) {
        resolve(key);
        return;
      }
    }
  }

  })
}

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

function localUpdateState(name, state) {
  for (var key in gamesJson) {
    if (gamesJson.hasOwnProperty(`${key}`)) {
      if (gamesJson[`${key}`].name == name) {
        gamesJson[`${key}`].states.push(state);
      }
    }
  }
}

exports.localNewGame = function (script, timeLimit, canStart) {
  loNewGame(script, timeLimit, canStart);
};

function loNewGame(script, timeLimit, canStart) {
  return new Promise((resolve, reject) => {
    removeDuplicateInstance(script).then(() => {
      //if no time, then go by script time
      var game = new Game(script.name, timeLimit, script);
      game.startTime();
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
        // console.log(key + " -> " + json[key]);
        arr.push(json[key]);
      }
    }
    resolve(arr);
  });
}