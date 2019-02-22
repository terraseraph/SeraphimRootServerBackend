//@ts-check
var SocketController = require("./socketController");
var log = require("./loggingController").log;
var ScriptController = require("./scriptController");
// var $ = require('jQuery');
var request = require('request');
var branchRoutes = {
    event: `/server/event`,
    action: `/server/action`,
    updateScript: `/scripts/update`,
    resetStates: `/scripts/selected/reset`
}


// ============================================================== //
// ================= Branch Server Routes ====================== //
// ============================================================== //
exports.branchSendEvent = function (req, res) {
    var scriptName = req.body.scriptName;
    var eventName = req.body.eventName;
    var branchUrl = req.body.branch_address;
    sendEvent(scriptName, eventName, branchUrl);
}


exports.branchSendAction = function (req, res) {
    var scriptName = req.body.scriptName;
    var actionName = req.body.actionName;
    var branchUrl = req.body.branch_address;
    sendAction(scriptName, actionName, branchUrl);
}


function sendEvent(scriptName, eventName, branchUrl, masterId) {
    return new Promise((resolve, reject) => {

        var msg = {
            scriptName: scriptName,
            eventName: eventName,
            masterId: masterId
        }

        var url = (branchUrl + branchRoutes.event);
        var options = {
            method: 'post',
            body: msg,
            json: true,
            url: url
        }
        request(options, (err, res, body) => {
            var result = {
                "Success": res
            }
            resolve(result)
        })


        // $.post(branchUrl + branchRoutes.event, msg, function(data){
        //     log(data);
        //     resolve(data);
        // })
    })
}
exports.sendEvent = sendEvent;

function sendAction(scriptName, actionName, branchUrl, masterId) {
    return new Promise((resolve, reject) => {

        var msg = {
            scriptName: scriptName,
            actionName: actionName,
            masterId: masterId
        }


        var url = (branchUrl + branchRoutes.action);
        var options = {
            method: 'post',
            body: msg,
            json: true,
            url: url
        }
        log("============sending action==================", options)
        request(options, (err, res, body) => {
            var result = {
                "Success": res
            }
            resolve(result)
        })
        // $.post(branchUrl + branchRoutes.action, msg, function(data){
        //     log(data);
        //     resolve(data);
        // })
    })
}
exports.sendAction = sendAction;

exports.branchResetStates = function (script) {
    var url = (script.branch_address + branchRoutes.resetStates);
    var options = {
        method: 'get',
        url: url
    }
    request(options, (err, res, body) => {
        var result = {
            "Success": res
        }
        log(result)
    })
}


exports.branchUpdateScript = function (script) {
    var url = (script.branch_address + branchRoutes.updateScript);
    var options = {
        method: 'get',
        url: url
    }
    request(options, (err, res, body) => {
        var result = {
            "Success": res
        }
        log(result)
    })
}

// ============================================================== //
// ================= Screen Display routes ====================== //
// ============================================================== //

exports.branchSendTrigger = function (req, res) {
    var scriptName = req.body.scriptName;
    var trigger = req.body.trigger;
    var msg = {
        message_type: "trigger",
        scriptName: scriptName,
        trigger: trigger
    }
    SocketController.socketEmit(msg);
    res.send("Triggerd!")
}


exports.branchSendHint = function (req, res) {
    var scriptName = req.body.scriptName;
    var hintText = req.body.hintText;
    var msg = {
        message_type: "hint",
        scriptName: scriptName,
        hintText: hintText
    }
    SocketController.socketEmit(msg);
    var response = {
        message: msg,
        success: true
    }
    res.send(response);
}

exports.branchClearHint = function (req, res) {
    var scriptName = req.body.scriptName;
    var msg = {
        message_type: "hint",
        scriptName: scriptName,
        hintText: "--clear--"
    }
    SocketController.socketEmit(msg);
}


exports.branchSendAudio = function (req, res) {
    var scriptName = req.body.scriptName;
    var audioFile = req.body.audioFile;
    var msg = {
        message_type: "audio",
        scriptName: scriptName,
        audioFile: audioFile
    }
    SocketController.socketEmit(msg);
}


exports.branchSendVideo = function (req, res) {
    var scriptName = req.body.scriptName;
    var videoFile = req.body.videoFile;
    var msg = {
        message_type: "video",
        scriptName: scriptName,
        videoFile: videoFile
    }
    SocketController.socketEmit(msg);
}