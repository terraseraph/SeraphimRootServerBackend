//@ts-check
const path = require('path');
const fs = require('fs');
const jsonfile = require("jsonfile");
var log = require('./loggingController').log;
var logStatus = require('./loggingController').logStatus;
var gameController = require('./gameController');
var SocketController = require("./socketController");
const directoryPath = path.join(__dirname, '../EventActionScripts');
const BranchController = require("./branchController");
var scripts = []

/** On init */
readScriptsInDirectory().then(sc => {
    scripts = sc;
});

exports.createScript = function (req, res) {
    res.send(`{"message":"creating script"}`)
}

exports.readScript = function (req, res) {
    getScript(req.params.name).then((sc) => {
        res.send(sc)
    })

}

exports.readScripts = function (req, res) {
    // res.send(scripts)
    readScriptsInDirectory().then(s => {
        res.send(s)
    })
}

exports.updateScript = function (req, res) {
    log(req.body);
    localUpdateScript(req.body);
    res.send(`{"message":"updating script"}`)
}

exports.deleteScript = function (req, res) {
    fs.unlink(directoryPath + `/${req.params.scriptName}.json`, (e) => {
        log("complete")
        res.send({
            "success": `Deleted ${req.params.scriptName}`
        });
    })
}

exports.updateScriptDir = function (req, res) {
    readScriptsInDirectory().then(sc => {
        res.send(sc);

    })
}

exports.getFreshScriptsFromDirectory = function (req, res) {
    readScriptsInDirectory().then(s => {
        res.send(s)
    })
}

/** 
 * Force event
 */
exports.forceEvent = function (req, res) {
    var name = req.body.name
    var eventName = req.body.forceEvent
    var time = req.body.completedTime
    // console.log(name, eventName)
    getScript(name).then((s) => {
        getEvent(s.events, eventName).then((evt) => {
            evt.status = "complete";
            evt.completed_time = time;
            var msg = {
                event: evt,
                script_name: name
            }
            logStatus(msg)
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
            logStatus(msg)
            res.send(msg)
            SocketController.socketSendAction(msg)

        })
    })
}

/** Get all json event action scripts from directory */
function readScriptsInDirectory() {
    // scripts = []
    var fScripts = []
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                var script = fs.readFileSync(directoryPath + `/${file}`, 'utf8')
                var pScript = JSON.parse(script)
                fScripts.push(pScript)
                if (fScripts.length == files.length) {
                    resolve(fScripts)
                }
            });
        });
    })
}
exports.readScriptsInDirectory = readScriptsInDirectory;



function readScriptInDirectory(scriptName) {
    return new Promise((resolve, reject) => {
        readScriptsInDirectory().then(lScripts => {
            for (var i = 0; i < lScripts.length; i++) {
                if (lScripts[i].name == scriptName) {
                    resolve(lScripts[i]);
                }
            }
        })
    })
}

// Gets the script from memory
exports.localGetScript = function (name) {
    getScript().then(s => {
        return s;
    })
}

// Gets the script from the filesystem to refresh
exports.localGetFreshScript = function (scriptName) {
    return new Promise((resolve, reject) => {
        readScriptInDirectory(scriptName).then(script => {
            for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].name == scriptName) {
                    scripts[i] = script;
                    resolve(script);
                }
            }
        })
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

function localUpdateScript(script) {
    const file = `${directoryPath}/${script.name}.json`;
    jsonfile.writeFileSync(file, script, {
        spaces: 2
    })
    //update local script version to the updated version
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].name == script.name) {
            scripts[i] = script;
            log("Updated script: ", scripts[i].name);
        }
    }
    // update branch servers script too
    BranchController.branchUpdateScript(script);
}