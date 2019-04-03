var log = require("./loggingController").log;
var db = require("./databaseController");
var path = require('path');
const HttpManager = require("../Managers/httpManager");
var RootServer = require("../models/RootServerModel").RootServer

var rootServerList = [];
loadRootServersFromDb().then(list => {
    rootServerList = list
    console.log(rootServerList)
}); //TODO: put in init file

function loadRootServersFromDb() {
    return new Promise((resolve, reject) => {
        var sList = []
        db.db_select(`SELECT * FROM ROOTSERVER`).then((response) => {
            if (response.length == 0) {
                return
            };
            for (let i = 0; i < response.length; i++) {
                const server = response[i];
                let s = new RootServer()
                s.initValues(server.id, server.name, server.ip_address)
                sList.push(s);
                if (i == response.length - 1) {
                    log(response)
                    resolve(sList);
                }
            }
        })
    })
}

function updateRootServerConfig(update) {
    findRootServerById(update.id).then(rootModel => {
        rootModel.name = update.name
        rootModel.ip_address = update.ip_address
        rootModel.update()
    })
}

function findRootServerById(id) {
    return new Promise((resolve, reject) => {
        for (let s of rootServerList) {
            if (s.id == id) {
                resolve(s)
            }
        }
    })

}
exports.findRootServerById = findRootServerById

exports.getRootConfig = function (req, res) {
    loadRootServersFromDb().then(config => {
        res.send(config[0]);
        console.log(config);

    })
}

exports.updateRootConfig = function (req, res) {
    var update = {
        id: req.body.id,
        name: req.body.name,
        ip_address: req.body.ip_address
    }
    updateRootServerConfig(req.body);
}