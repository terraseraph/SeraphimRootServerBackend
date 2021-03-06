//@ts-check

const SocketController = require("./socketController");
logUpdate();
function logUpdate() {
    setTimeout(function () {
        logToDb("TestLog")
        logUpdate();
    }, 10000)
}
function log(...args) {
    try {

        args.unshift(log.caller.name.toString())
    } catch (e) { }
    // console.log(args)
    var msg = {
        text: JSON.stringify(args),
        type: "log",
        time: new Date().getTime(),
        from: "root"
    }
    logToDb(msg, (e) => { })

}

function logInfo(...args) {
    // console.log(args)
    var msg = {
        text: JSON.stringify(args),
        type: MessageType.INFO,
        time: new Date().getTime(),
        from: "root"
    }
    logToDb(msg, (e) => { })
}

function logWarning(...args) {
    console.log(args)
    var msg = {
        text: JSON.stringify(args),
        type: MessageType.WARNING,
        time: new Date().getTime(),
        from: "root"
    }
    logToDb(msg, (e) => { })
}


function logError(...args) {
    console.log(args)
    var msg = {
        text: JSON.stringify(args),
        type: MessageType.ERROR,
        time: new Date().getTime(),
        from: "root"
    }
    logToDb(msg, (e) => { })
}


function logCritical(...args) {
    console.log(args)
    var msg = {
        text: JSON.stringify(args),
        type: MessageType.CRITICAL,
        time: new Date().getTime(),
        from: "root"
    }
    logToDb(msg, (e) => { })
}

function logStatus(...args) {
    // console.log(args)
    var msg = {
        text: JSON.stringify(args),
        type: MessageType.STATUS,
        time: new Date().getTime(),
        from: "root"
    }
    logToDb(msg, (e) => { })
}



exports.log = log
exports.logInfo = logInfo
exports.logWarning = logWarning
exports.logError = logError
exports.logCritical = logCritical
exports.logStatus = logStatus

var db = require("./databaseController");

var MessageType = {
    INFO: "info",
    WARNING: "warning",
    ERROR: "error",
    STATUS: "status",
    CRITICAL: "critical"
}

exports.logFromHttp = function (req, res) {
    logStatus(req.body);
    res.send("logged")
    // logToDb(req.body.message, (response) => {
    // })
}

function logToDb(msg, cb) {
    try {
        cb("logged");
        SocketController.socketSendLog(msg);
        if (msg.type == MessageType.STATUS) {
        }
        // db.db_insertMessageLog(`INSERT INTO MESSAGES (text, type, time, sender) VALUES ('${msg.text}','${msg.type}','${msg.time}', '${msg.from}')`).then(response => {
        //     cb(response)
        // })
    } catch (e) {

    }
}