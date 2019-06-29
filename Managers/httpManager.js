var request = require('request');
var log = require("../controllers/loggingController").log;

exports.sendHttpRequest = function (packet, callback) {
    var msg = packet.body;
    //if get or delete
    if (msg.type == "GET" || msg.type == "DELETE") {
        var options = {
            method: msg.type,
            url: msg.url
        }
    }
    if (msg.type == "POST" || msg.type == "PUT") {
        var options = {
            method: msg.type,
            url: msg.url,
            body: msg.body,
            // json: true,
            headers: { "content-type": "application/json" }
        }
    }
    console.log(msg.body)
    //if post or put

    request(options, (err, response, body) => {
        if (response == undefined) {
            console.log(err, body)
            callback({
                "status": "failed"
            })
        } else {
            log("RESPONSE", response.body);
            let branch = response.body;
            callback(branch)
        }
    })
}


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
    var options = {
        method: 'get',
        url: branchUrl
    }
    request(options, (err, response, body) => {

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