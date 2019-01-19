//@ts-check
const path = require('path');
const fs = require('fs');
var log = require('./loggingController').log;
var gameController = require('./gameController');
var SocketController = require("./socketController")
const directoryPath = path.join(__dirname, '../EventActionScripts');
var scripts = []

/** On init */
readScriptsInDirectory();

exports.createScript = function (req, res) {
    res.send("creating script")
}

exports.readScript = function (req, res) {
    getScript(req.params.name).then((sc) => {
        res.send(sc)
    })

}

exports.readScripts = function (req, res) {
    res.send(scripts)
}

exports.updateScript = function (req, res) {
    res.send("updating script")
}

exports.deleteScript = function (req, res) {
    res.send("deleting script")
}

exports.updateScriptDir = function (req, res) {
    res.send(readScriptsInDirectory());
}

/** 
 * Force event
 */
exports.forceEvent = function (req, res) {
    var name = req.body.name
    var eventName = req.body.forceEvent
    console.log(name, eventName)
    getScript(name).then((s) => {
        getEvent(s.events, eventName).then((evt) => {
            evt.status = "complete";
            var msg = {
                event: evt,
                script_name: name
            }
            log(msg)
            res.send(msg)
            SocketController.socketSendEvent(msg)
        })
    })
}

exports.forceAction = function (req, res) {
    var name = req.body.name
    var actionName = req.body.forceAction
    getScript(name).then((s) => {
        getAction(s.actions, actionName).then((act) => {
            act.status = "complete";
            var msg = {
                action: act,
                script_name: name
            }
            log(msg)
            res.send(msg)
            SocketController.socketSendAction(msg)

        })
    })
}

/** Get all json event action scripts from directory */
function readScriptsInDirectory() {
    scripts = []
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                var script = fs.readFileSync(directoryPath + `/${file}`, 'utf8')
                var pScript = JSON.parse(script)
                // gameController.localNewGame(pScript, pScript.time, false);
                scripts.push(pScript)
                if (scripts.length == files.length) {
                    resolve(scripts)
                }
            });
        });
    })
}

function getScript(name) {
    return new Promise((resolve, reject) => {
        scripts.forEach(function (script) {
            if (script.name == name) {
                log(script.name, " : ", name)
                resolve(script)
            }
        });

    })
}

function getEvent(events, eventName) {
    return new Promise((resolve, reject) => {
        events.forEach(function (evt) {
            if (evt.name == eventName) {
                resolve(evt);
            }
        })
    })
}

function getAction(actions, actionName) {
    return new Promise((resolve, reject) => {
        actions.forEach(function (act) {
            if (act.name == actionName) {
                resolve(act);
            }
        })
    })
}