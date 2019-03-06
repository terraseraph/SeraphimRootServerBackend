//@ts-check
var SocketController = require("../controllers/socketController");
var log = require("../controllers/loggingController").log;
var ScriptController = require("../controllers/scriptController");
// var $ = require('jQuery');
var request = require('request');
var branchRoutes = {
    event: `/server/event`,
    action: `/server/action`,
    updateScript: `/scripts/update`,
    resetStates: `/scripts/selected/reset`,
    status: `/status`
}
class Branch {
    scripts = [];
    nodeMeshes = [];
    ipaddress = "";
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    setIpAddress(ip) {
        this.setIpAddress = ip;
    }

    getInfo(callback) {
        this.sendGetRequest(`${this.ipaddress}/status`).then((cb) => {
            callback(cb);
        });
    }

    sendGetRequest(url) {
        return new Promise((resolve, reject) => {
            var url = (url);
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




}