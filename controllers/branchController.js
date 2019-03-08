//@ts-check
var SocketController = require("./socketController");
var log = require("./loggingController").log;
var ScriptController = require("./scriptController");
var db = require("./databaseController");
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
exports.createBranch = function (req, res) {
    var name = req.body.name
    var rootserver_id = req.body.rootserver_id
    var ip_address = req.body.ip_address
    var q = `INSERT INTO BRANCHES (name, rootserver_id, ip_address) VALUES ("${name}", ${rootserver_id}, "${ip_address}")`
    db.db_insert(q).then((query, id) => {
        res.send({
            "query": query,
            "insertedAt": id
        })
    })
}


exports.getBranchById = function (req, res) {
    db.db_select(`SELECT * FROM BRANCHES WHERE id = ${req.params.id}`).then((branch) => {
        res.send(branch);
    })
}

exports.getAllBranches = function (req, res) {
    db.db_select(`SELECT * FROM BRANCHES`).then((response) => {
        console.log(response)
        res.send(response);
    })
}

exports.updateBranch = function (req, res) {
    var name = req.body.name
    var rootserver_id = req.body.rootserver_id
    var ip_address = req.body.ip_address
    var id = req.body.id
    var q = `UPDATE BRANCHES SET name = "${name}", rootserver_id = "${rootserver_id}", ip_address = "${ip_address}" WHERE id = ${id}`
    db.db_update(q).then((result) => {
        res.send(result)
    })
}


exports.deleteBranch = function (req, res) {
    var id = req.params.id
    db.db_delete(`DELETE FROM BRANCHES WHERE id = ${id}`)
}


exports.getBranchNodes = function (req, res) {
    var branchId = req.params.branchId
    db.db_select(`SELECT * FROM NODEBRIDGES WHERE branch_id = ${branchId}`).then(result => {
        res.send(result);
    })
}

exports.getLiveBranchNodeInfo = function (req, res) {

    localGetBranchById(req.params.branchId, (branch) => {
        var address = (`${branch[0].ip_address}/node`);
        var options = {
            method: 'get',
            url: address
        }
        request(options, (err, response, body) => {
            console.log("RESPONSE", response.body);

            res.send(response.body)
        })
    })
}

function localGetBranchById(id, cb) {
    db.db_select(`SELECT * FROM BRANCHES WHERE id = ${id}`).then((branch) => {
        console.log("Branch : ", id, branch);
        cb(branch);
    })
}

exports.nodeUpdateFromServer = function (req, res) {
    var branchId = req.body.branchId;
    var node = req.body.node;
    db.db_select(`SELECT * FROM NODEBRIDGES WHERE name = "${node.id}"`).then(row => {
        if (row.length == 0 || row == undefined) {
            db.db_insert(`INSERT INTO NODEBRIDGES (name, ip_address, branch_id) VALUES ("${node.id}", "${node.ipAddress}", "${branchId}")`).then(result => {
                createNodeFromHeartbeatMessage(node.nodes, node.name)
                res.send(result)
                return;
            })
        } else {
            db.db_update(`UPDATE NODEBRIDGES SET name = "${node.id}", ip_address = "${node.ipAddress}", branch_id = "${branchId}"`).then(result => {
                createNodeFromHeartbeatMessage(node.nodes, node.name)
                res.send(result)
                return;
            })
        }
    })
}

function createNodeFromHeartbeatMessage(nodes, bridgeId) {
    if (nodes == undefined) {
        return
    }
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        db.db_select(`SELECT * FROM NODES WHERE name = "${node.id}" AND bridge_id = "${bridgeId}"`).then(row => {
            if (row.length != 0) {
                db.db_insert(`INSERT INTO NODES (name, type, last_alive, bridge_id) VALUES ("${node.id}", "${node.ipAddress}", "${node.last_alive}", "${bridgeId}")`).then(result => {
                    console.log(result);
                })
            } else {
                db.db_update(`UPDATE NODES SET name = "${node.id}", type = "${node.type}", last_alive = "${node.last_alive}", bridge_id = "${bridgeId}"`).then(result => {
                    console.log(result);
                })
            }
        })
    }
}

//========================================================================
//========================= EVENT ACTIONS ================================
//========================================================================
//========================================================================

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