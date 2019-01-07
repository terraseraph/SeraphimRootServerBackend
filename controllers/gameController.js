//@ts-check
// var Timer = require('../node_modules/easytimer/src/easytimer.js').Timer;
var Timer = require('easytimer');
var SocketController = require('./socketController');
var timerArr = []

class Game {
    constructor(name, timeLimit, script) {
        this.name = name;
        this.timeLimit = timeLimit;
        this.time = {hrs:0, min:0, sec:0};
        this.script = script;
        this.states = [];
        this.countdown = true;
        this.createGameTimer();
    }
    
    createGameTimer(){
        // this.timer = new Timer();
        this.timer = new Timer();
        this.timer.start({
            countdown: this.countdown,
            precision: 'seconds',
            startValues: {
                hours: this.timeLimit.hrs,
                minutes: this.timeLimit.min,
                seconds: this.timeLimit.sec
            }
        });
        timerArr.push(this.timer)
        var t = this
        this.timer.addEventListener('secondsUpdated', function (e) {
            t.time.hrs = t.timer.getTimeValues().hours;
            t.time.min = t.timer.getTimeValues().minutes;
            t.time.sec = t.timer.getTimeValues().seconds;
            SocketController.socketSendEvent({"instance_update":t})
        })
        this.timer.addEventListener('targetAchieved', function (e) {
            SocketController.socketSendEvent({"gameOver":this})
        });
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

    setScript(script) {
        this.script = script;
    }

    getScript() {
        return this.script;
    }

    startTime(){
        this.timer.start()
    }

    pauseTime(){
        this.timer.pause()
    }

    stopTime(){
        this.timer.stop()
    }

    resetTime(){
        this.timer.reset()
    }

}

var games = [];

//=============================================//
//====== HTTP functions ========================//
//===========================================//

exports.newGame = function (req, res) {
    var name = req.body.name;
    var timeLimit = req.body.timeLimit;
    //if no time, then go by script time
    var game = new Game(name, timeLimit);
    games.push(game);
    res.send(game);
};

exports.readGame = function (req, res) {
    var name = req.params.name;
    games.forEach(function (game) {
        if (game.name == name) {
            res.send(game);
        }
    });
};

exports.readAll = function (req, res) {
    res.send(games);
};

exports.updateGameState = function (req, res) {
    var name = req.body.name;
    var state = req.body.state;
    localUpdateState(name, state)
};

exports.updateGameTime = function (req, res) {
    var name = req.body.name;
    var time = req.body.time;
    localUpdateTime(name, time)

};

exports.deleteGame = function (req, res) {
    var name = req.params.name;
    var gRemoved
    for (var i = 0; i < games.length; i++) {
        if (games[i].name = name) {
            gRemoved = games[i]
            games.splice(i, 1);
            res.send(`{"removed": ${gRemoved}}`)
        }
    }
};

//=============================================//
//====== Local functions ========================//
//===========================================//

/** For external modules */
exports.loUpdateGameState = function (name, state) {
    localUpdateState(name, state)
}

/** For external modules */
exports.loUpdateGameTime = function (name, time) {
    localUpdateTime(name, time)
}

function localUpdateState(name, state) {
    games.forEach(function (game) {
        if (game.name == name) {
            game.states.push(state);
        }
    });
}

function localUpdateTime(name, time) {
    games.forEach(function (game) {
        if (game.name == name) {
            game.time = time;
        }
    });
}