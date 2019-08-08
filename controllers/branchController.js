//@ts-check
var SocketController = require("./socketController");
var log = require("./loggingController").log;
var logStatus = require("./loggingController").logStatus;
var logInfo = require("./loggingController").logInfo;
var ScriptController = require("./scriptController");
var RootServerController = require("./rootServerController")
var GameController = require("./gameController")
var db = require("./databaseController");
const fs = require("fs");
var ip = require('ip');
var path = require('path');
const HttpManager = require("../Managers/httpManager");
var Branch = require("../models/branchModel").Branch;
// var $ = require('jQuery');
var request = require('request');
var branchRoutes = {
    event: `/server/event`,
    action: `/server/action`,
    updateScript: `/scripts/update`,
    resetStates: `/scripts/selected/reset`
}

var branchList = [];
loadBranchesFromDb().then(list => {
    branchList = list

}); //TODO: put in init file
getBranchStatusUpdates();

function loadBranchesFromDb() {
    return new Promise((resolve, reject) => {
        var bList = []
        db.db_select(`SELECT * FROM BRANCHES`).then((response) => {
            if (response.length == 0) {
                return
            };
            for (let i = 0; i < response.length; i++) {
                const branch = response[i]; //old
                let b = new Branch(branch.name)
                b.initValues(branch.id, branch.ip_address, branch.rootserver_id)
                b.getBranchConfig().then(config => {
                    if (config == false) {
                        b.setConfig(null);
                    }
                    // response[i]["config"] = config //old
                    b.setConfig(config)
                    bList.push(b);
                    if (i == response.length - 1) {
                        log(response)
                        // res.send(response);
                        resolve(bList);
                    }
                })
            }
        })
    })
}

function getBranchStatusUpdates() {
    // for(var i = 0 ; i < branchList.length ; i++){
    //     branchList[i] = branchList[i].getBranchConfig();
    // }
    setTimeout(function () {
        loadBranchesFromDb().then(list => {
            branchList = list;
            getBranchStatusUpdates();
        });
    }, 10000)
}

function findBranchById(id) {
    return new Promise((resolve, reject) => {
        for (let b of branchList) {
            if (b.id == id) {
                resolve(b)
            }
        }
    })

}


// ============================================================== //
// ================= Branch Server Routes ====================== //
// ============================================================== //
exports.createBranch = function (req, res) {
    var name = req.body.name
    var rootserver_id = req.body.rootserver_id
    var ip_address = req.body.ip_address
    var branch = new Branch(name)
    branch.setIp_address(ip_address);
    branch.setRootserverId(rootserver_id);
    branch.create().then(response => {
        res.send(response)
        branchList.push(response)
        console.log(response);
        loadBranchesFromDb().then(b => {
            branchList = b;
        }); // TODO: fix - just refresh the list on the fly
    })
    // var q = `INSERT INTO BRANCHES (name, rootserver_id, ip_address) VALUES ("${name}", ${rootserver_id}, "${ip_address}")`
    // db.db_insert(q).then((query, id) => {
    //     res.send({
    //         "query": query,
    //         "insertedAt": id
    //     })
    // })
}


exports.getBranchById = function (req, res) {
    var id = req.params.id
    for (let b of branchList) {
        if (branchList[b].id == id) {
            res.send(branchList[b])
        }
    }
    // db.db_select(`SELECT * FROM BRANCHES WHERE id = '${req.params.id}'`).then(branch => {
    //     getBranchConfig(branch.ip_address).then(config => {
    //         branch["config"] = config
    //         res.send(branch);
    //     })
    // })
}

exports.getAllBranches = function (req, res) {
    // loadBranchesFromDb().then(list => {
    //     res.send(list);
    // })
    res.send(branchList);
}


function getBranchMedia(branchUrl) {
    return new Promise((resolve, reject) => {

        var options = {
            method: 'get',
            url: branchUrl + "/media"
        }
        request(options, (err, response, body) => {
            if (response == undefined) {
                resolve(false)
            } else {
                log("RESPONSE", response.body);
                let branch = JSON.parse(response.body);
                resolve(branch)
            }
        })
    })
}

function getBranchVideo(branchUrl) {
    return new Promise((resolve, reject) => {

        var options = {
            method: 'get',
            url: branchUrl + "/video"
        }
        request(options, (err, response, body) => {
            if (response == undefined) {
                resolve(false)
            } else {
                log("RESPONSE", response.body);
                let branch = JSON.parse(response.body);
                resolve(branch)
            }
        })
    })
}


function getBRanchAudio(branchUrl) {
    return new Promise((resolve, reject) => {

        var options = {
            method: 'get',
            url: branchUrl + "/audio"
        }
        request(options, (err, response, body) => {
            if (response == undefined) {
                resolve(false)
            } else {
                log("RESPONSE", response.body);
                let branch = JSON.parse(response.body);
                resolve(branch)
            }
        })
    })
}

exports.deleteMedia = function (req, res) {
    var type = req.body.type
    var name = req.body.name
    var id = req.body.id
    findBranchById(id).then(branch => {
        branch.deleteMedia(type, name).then(response => {
            res.send(response)
        })
    })
}

exports.uploadBranchVideo = function (req, res) {
    let id = req.body.id
    let videoFile = req.files.file;
    findBranchById(id).then(branch => {
        branch.uploadMedia(videoFile, branch.mediaType.VIDEO).then(result => {
            res.send(result)
        })
    })
}
exports.uploadBranchAudio = function (req, res) {
    let audioFile = req.files.file;
    let id = req.body.id
    findBranchById(id).then(branch => {
        branch.uploadMedia(audioFile, branch.mediaType.AUDIO).then(result => {
            res.send(result)
        })
    })
}

exports.uploadBranchScript = function (req, res) {
    console.log(req.body.script)
    findBranchById(req.body.id).then(branch => {
        branch.uploadScript(req.body.script).then(response => {
            res.send(response)
        })
    })
}

exports.deleteBranchScript = function (req, res) {
    var sName = path.parse(req.body.scriptName).name;
    findBranchById(req.body.id).then(branch => {
        branch.deleteScript(sName).then(response => {
            res.send(response)
        })
    })
}


exports.updateBranch = function (req, res) {
    var name = req.body.name
    var rootserver_id = req.body.rootserver_id
    var ip_address = req.body.ip_address
    var root_ip = req.body.config.server_url
    var id = req.body.id
    findBranchById(id).then(branch => {
        branch.setIp_address(ip_address)
        branch.setName(name)
        branch.updateRootApi(root_ip).then(response => {
            branch.update().then(qResult => {
                res.send({
                    http: response,
                    query: qResult
                })
            })
        });
    })
    // branchUpdateRootApi(ip_address, req.socket.localAddress)

}


exports.deleteBranch = function (req, res) {
    var id = req.params.id
    db.db_delete(`DELETE FROM BRANCHES WHERE id = ${id}`).then(reponse => {
        res.send("Deleted");
    })
    loadBranchesFromDb().then(b => {
        branchList = b;
    }); // TODO: fix - just refresh the list on the fly
}


// function branchUpdateRootApi(branchIp, rootIp) {
//     var options = {
//         method: 'put',
//         body: {
//             api: rootIp
//         },
//         json: true,
//         url: branchIp + "/config/api"
//     }
//     request(options, (err, response, body) => {
//         if (response == undefined) {
//             // res.send(false)
//         } else {
//             log("RESPONSE", body);
//             // let branch = JSON.parse(response.body);
//             // res.send(response.body)
//         }
//     })
// }


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
            if (response == undefined) {
                res.send({
                    "status": "failed"
                })
            } else {
                log(body)

                // makeNodeArrayWithMesh(JSON.parse(body)).then(nodes => {
                //     log("RESPONSE", nodes);
                //     let branch = response.body;
                //     res.send(nodes)
                // })
                res.send(body)
            }
        })
    })
}

function makeNodeArrayWithMesh(nodes) {
    return new Promise((resolve, reject) => {
        console.log("============= ", nodes)
        var result = {
            nodes: nodes
        }
        var arr = []
        for (let i in nodes.meshNodes) {
            let n = nodes.meshNodes[i]
            arr.push(n)
        }
        result.nodes.cocks = arr;
        resolve(result.nodes);
    });
}

function mapObj(obj) {
    var result = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
    return result;
}

function localGetBranchById(id, cb) {
    db.db_select(`SELECT * FROM BRANCHES WHERE id = ${id}`).then((branch) => {
        log("Branch : ", id, branch);
        cb(branch);
    })
}

function localGetBranchByName(name, cb) {
    db.db_select(`SELECT * FROM BRANCHES WHERE name = ${name}`).then((branch) => {
        log("Branch : ", name, branch);
        cb(branch);
    })
}

exports.nodeUpdateFromServer = function (req, res) {
    var branchId = req.body.branchId;
    var node = req.body.node;
    var pkt = { branch: branchId, node: node };
    logInfo(pkt);
    db.db_select(`SELECT * FROM NODEBRIDGES WHERE name = "${node.id}"`).then(row => {
        if (row.length == 0 || row == undefined) {
            db.db_insert(`INSERT INTO NODEBRIDGES (name, ip_address, branch_id) VALUES ("${node.id}", "${node.ipAddress}", "${branchId}")`).then(result => {
                makeMeshNodeArray(node.meshNodes).then(arr => {
                    createNodeFromHeartbeatMessage(arr, node.name)
                })
                res.send("Inserted")
                return;
            })
        } else {
            db.db_update(`UPDATE NODEBRIDGES SET name = "${node.id}", ip_address = "${node.ipAddress}", branch_id = "${branchId}"`).then(result => {
                makeMeshNodeArray(node.meshNodes).then(arr => {
                    createNodeFromHeartbeatMessage(arr, node.name)
                })
                res.send("updated")
                return;
            })
        }
    })
}

function makeMeshNodeArray(meshNodes) {
    return new Promise((resolve, reject) => {
        var nodes = [];
        for (var x in meshNodes) {
            // log("pushing", meshNodes[x]);
            nodes.push(meshNodes[x]);
        }
        resolve(nodes);
    });
}

function createNodeFromHeartbeatMessage(nodes, bridgeId) {
    if (nodes == undefined) {
        return
    }
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        log("UPSERTING: ", node)
        db.db_insert(`
        INSERT INTO NODES
        (name, type, last_alive, bridge_id, hardware_id, memory)
        VALUES ("${node.id}",
        "${node.type}",
        ${node.lastUpdated},
        "${bridgeId}",
        ${node.hardwareId},
        ${node.memory})
        ON CONFLICT(hardware_id) 
        DO UPDATE
        SET name = "${node.id}",
        type = "${node.type}",
        last_alive = ${node.lastUpdated},
        bridge_id = "${bridgeId}",
        hardware_id = ${node.hardwareId},
        memory = ${node.memory}`).then(result => {
            // log(result);
        })
    }
}

exports.sendNodeMeshPacket = function (req, res) {
    var header = req.body.header;
    var message = req.body.message;
    var options = {
        method: 'post',
        body: message,
        json: true,
        url: `${header.branchAddress}/node/${header.nodeType}/${header.bridgeId}`
    }
    logStatus(options)
    console.log(message)
    request(options, (err, result, body) => {
        if (err) {
            console.log(err)
        }
        var data = {
            success: result,
            body: body
        }
        res.send(data);
    })
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
    if (trigger.httpRequestType != "NONE" && trigger.httpRequestType != "" && trigger.httpRequestType != undefined) {
        var reqOptions = {
            body: {
                type: trigger.httpRequestType,
                url: trigger.httpRequestUrl,
                body: trigger.httpRequestBody
            }
        }
        HttpManager.sendHttpRequest(reqOptions, (response) => {
            log(response);
        })
    }
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
    GameController.getScriptInstance(scriptName).then(instance => {
        GameController.gamesJson[instance].displayedHint = hintText
    })
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
    GameController.getScriptInstance(scriptName).then(instance => {
        GameController.gamesJson[instance].displayedHint = ""
    })
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


// =============================================================================== //
// ========================= Shell commands ===================================== //
// ============================================================================= //
exports.shellRestartBranchServer = function (req, res) {
    var branchUrl = req.body.branchIp + '/shell/restart';
    var options = {
        method: 'get',
        url: branchUrl
    }
    request(options, (err, response, body) => {
        console.log(options)
        res.send(response)
    })
    // request.get(`${branchUrl}/shell/restart`, (result)=>{
    //     res.send(result)
    // })
}

exports.shellReloadBranchDesktop = function (req, res) {
    var branchUrl = req.body.branchIp + '/shell/reload';
    var options = {
        method: 'get',
        url: branchUrl
    }
    request(options, (err, response, body) => {

    })
    res.send(options)
}

exports.shellGitUpdate = function (req, res) {
    var branchUrl = req.body.branchIp + '/shell/gitupdate';
    var options = {
        method: 'get',
        url: branchUrl
    }
    request(options, (err, response, body) => {

    })
    res.send(options)
}

exports.shellCustomCommand = function (req, res) {
    var branchUrl = req.body.branchIp;
    var msg = {
        command: req.body.command
    }
    var options = {
        method: 'post',
        body: msg,
        url: branchUrl + "/shell/command",
        json: true
    }
    request(options, (err, result, body) => {
    })
    res.send(msg);
}