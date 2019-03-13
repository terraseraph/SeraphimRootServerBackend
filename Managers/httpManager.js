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
            body: msg.body
        }
    }
    //if post or put

    request(options, (err, response, body) => {
        if (response == undefined) {
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