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
    return new Promise((resolve, reject) => {
        var url = (script.branch_address + branchRoutes.resetStates + "/" + script.name);
        var options = {
            method: 'get',
            url: url
        }
        request(options, (err, res, body) => {
            var result = {
                "Success": res
            }
            resolve(result);
        })
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

exports.branchReloadScreen = function (req, res) {
    var scriptName = req.body.scriptName;
    var screenName = req.body.screenName;
    var msg = {
        message_type: "reload",
        scriptName: scriptName,
        screenName: screenName
    }
    SocketController.socketEmit(msg);
    res.send({
        "Success": "Screen reloaded!"
    });
}

exports.branchUpdateScreenConfig = function (req, res) {
    var scriptName = req.body.scriptName;
    var screenName = req.body.screenName;
    var config = req.body.config;
    var msg = {
        message_type: "config",
        scriptName: scriptName,
        screenName: screenName,
        config: config
    }
    SocketController.socketEmit(msg);
    res.send({
        "Success": "Screen reloaded!"
    });
}

exports.branchSendTrigger = function (req, res) {
    var scriptName = req.body.scriptName;
    var trigger = req.body.trigger;
    var screenName = trigger.screenName;
    var msg = {
        message_type: "trigger",
        scriptName: scriptName,
        trigger: trigger,
        screenName: screenName
    }
    SocketController.socketEmit(msg);
    res.send({
        "Success": "Triggerd!"
    });
}


exports.branchSendHint = function (req, res) {
    var scriptName = req.body.scriptName;
    var screenName = req.body.screenName;
    var hintText = req.body.hintText;
    var msg = {
        message_type: "hint",
        scriptName: scriptName,
        hintText: hintText,
        screenName: screenName
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
    var screenName = req.body.screenName;
    var msg = {
        message_type: "hint",
        scriptName: scriptName,
        screenName: screenName,
        hintText: "--clear--"
    }
    SocketController.socketEmit(msg);
}


exports.branchSendAudio = function (req, res) {
    var scriptName = req.body.scriptName;
    var screenName = req.body.screenName;
    var audioFile = req.body.audioFile;
    var msg = {
        message_type: "audio",
        scriptName: scriptName,
        screenName: screenName,
        audioFile: audioFile
    }
    SocketController.socketEmit(msg);
    res.send({
        success: true
    })
}


exports.branchSendVideo = function (req, res) {
    var scriptName = req.body.scriptName;
    var screenName = req.body.screenName;
    var videoFile = req.body.videoFile;
    var msg = {
        message_type: "video",
        scriptName: scriptName,
        screenName: screenName,
        videoFile: videoFile
    }
    SocketController.socketEmit(msg);
    res.send({
        success: true
    })
}