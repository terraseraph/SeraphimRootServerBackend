//@ts-check
// @ts-ignore
const app = require("../app");
// var socket = app.io;
const GameController = require("./gameController")
var log = require("./loggingController").log;
exports.parseMessage = function (msg) {
    log(msg)
    if (msg.updateTime == "true") {
        updateTime(msg).then((result) => {
            return result
        })
    }
    if (msg.updateState == "true") {
        updateState(msg).then((result) => {
            return result
        })
    }
    if (msg.forceEvent == "true") {
        log("Forced event")
        forceEvent(msg)
    }
    if (msg.forceAction) {
        log("forced action")
        forceAction(msg)
    }
}

exports.socketSendEvent = function (event) {
    // log("Socket: ", event)
    // @ts-ignore
    io.emit(`message`, event)
}

exports.socketSendAction = function (action) {
    log("Socket: ", action)
    // @ts-ignore
    io.emit(`message`, action)
}

function updateTime(msg) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        GameController.loUpdateGameTime(msg.name, msg.time);
        resolve(msg)
    })
}

function updateState(msg) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        GameController.loUpdateGameState(msg.name, msg.state)
        resolve(msg)
    })
}

function forceEvent(msg) {
    log("msg");

    // @ts-ignore
    io.emit(`message`, msg)
}

function forceAction(msg) {
    // @ts-ignore
    io.emit(`message`, msg)
}