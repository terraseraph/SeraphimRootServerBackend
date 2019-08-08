//@ts-check
// @ts-ignore
const app = require("../app");
// var socket = app.io;
const GameController = require("./gameController")
var log = require("./loggingController").logStatus;
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

exports.socketSendLog = function (log) {
    //@ts-ignore
    // io.to('logs').emit(log);
    // io.sockets.in("logs").emit('log', { message: log });
}

exports.socketSendEvent = function (event) {
    // log("Socket: ", event)
    // @ts-ignore
    io.emit(`message`, event);
    console.log(event);
}

exports.socketSendAction = function (action) {
    log("Socket: ", action)
    // @ts-ignore
    io.emit(`message`, action)
}

exports.socketEmit = function (msg) {
    // @ts-ignore
    io.emit(`message`, msg)
}

exports.customSocketEmit = function (req, res) {
    var topic = "message";
    var msg = req.body;
    customSocketMessage(topic, msg);
    res.send("socketSent");
}

function customSocketMessage(topic, msg) {
    // @ts-ignore
    io.emit(topic, msg);
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

function emit(msg) {
    log("msg");

    // @ts-ignore
    io.emit(`message`, msg)
}