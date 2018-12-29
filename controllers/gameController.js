class Game {
    constructor(name, time, script) {
        var name = name;
        var time = time;
        var script = script;
        var states = new Array();
    }

    addState(state) {
        states.push(state);
    }

    getStates() {
        return states;
    }

    setName(name) {
        name = name;
    }

    setTime(time) {
        time = time;
    }

    getTime() {
        return time;
    }

    setScript(script) {
        this.script = script;
    }

    getScript() {
        return this.script;
    }

}

var games = [];

//=============================================//
//====== HTTP functions ========================//
//===========================================//

exports.newGame = function (req, res) {
    name = req.body.name;
    time = req.body.time;
    var game = new Game(name, time);
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