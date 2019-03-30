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
                s.initValues(server.id, server.ip_address)
                if (i == response.length - 1) {
                    log(response)
                    resolve(sList);
                }
            }
        })
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