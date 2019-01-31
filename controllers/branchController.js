//@ts-check
var SocketController = require("./socketController");
var log = require("./loggingController").log;
var ScriptController = require("./scriptController");
var $ = require('jQuery');
var branchRoutes = {
    event : `/server/event`,
    action : `/server/action`
}


// ============================================================== //
// ================= Branch Server Routes ====================== //
// ============================================================== //
exports.branchSendEvent = function(req, res){
    var scriptName = req.body.scriptName;
    var eventName = req.body.eventName;
    var branchUrl = req.body.branch_address;
    sendEvent(scriptName, eventName, branchUrl);
}

exports.localBranchSendEvent = function(scriptName, eventName, branchUrl){
    sendEvent(scriptName, eventName, branchUrl);
}


exports.branchSendAction = function(req, res){
    var scriptName = req.body.scriptName;
    var actionName = req.body.actionName;
    var branchUrl = req.body.branch_address;
    sendAction(scriptName, actionName, branchUrl);
}

exports.localBranchSendAction = function(scriptName, actionName, branchUrl){
    sendAction(scriptName, actionName, branchUrl);
}


function sendEvent(scriptName, eventName, branchUrl){
    return new Promise((resolve, reject) =>{
        
        var msg = {
            scriptName: scriptName,
            eventName: eventName
        }
        $.post(branchUrl + branchRoutes.event, msg, function(data){
            log(data);
            resolve(data);
        })
    })
}

function sendAction(scriptName, actionName, branchUrl){
    return new Promise((resolve, reject) =>{

        var msg = {
            scriptName: scriptName,
            actionName: actionName
        }
        $.post(branchUrl + branchRoutes.action, msg, function(data){
            log(data);
            resolve(data);
        })
    })
}


exports.branchUpdateScript = function(){

}

// ============================================================== //
// ================= Screen Display routes ====================== //
// ============================================================== //

exports.branchSendTrigger = function(req, res){
    var scriptName = req.body.scriptName;
    var triggerName = req.body.triggerName;
    var msg = {
        message_type: "trigger",
        scriptName: scriptName,
        triggerName: triggerName
    }
    SocketController.socketEmit(msg);
}


exports.branchSendHint = function(req, res){
    var scriptName = req.body.scriptName;
    var hintText = req.body.hintText;
    var msg = {
        message_type: "hint",
        scriptName: scriptName,
        hintText: hintText
    }
    SocketController.socketEmit(msg);
}

exports.branchClearHint = function(req, res){
    var scriptName = req.body.scriptName;
    var msg = {
        message_type: "hint",
        scriptName: scriptName,
        hintText: "--clear--"
    }
    SocketController.socketEmit(msg);
}


exports.branchSendAudio = function(req, res){
    var scriptName = req.body.scriptName;
    var audioFile = req.body.audioFile;
    var msg = {
        message_type: "audio",
        scriptName: scriptName,
        audioFile: audioFile
    }
    SocketController.socketEmit(msg);
}


exports.branchSendVideo = function(req, res){
    var scriptName = req.body.scriptName;
    var videoFile = req.body.videoFile;
    var msg = {
        message_type: "video",
        scriptName: scriptName,
        videoFile: videoFile
    }
    SocketController.socketEmit(msg);
}




