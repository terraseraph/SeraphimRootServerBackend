var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
const server = require("http").Server(app);
const SocketController = require("./controllers/socketController")
const io = require("socket.io")(server, {
    origins: "*:*"
});

var indexRouter = require("./routes/index");
var log = require("./controllers/loggingController").log;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

app.set("io", io);

/** Directory linking */
app.use(express.static(path.join(__dirname, "public")));
app.use("/packages", express.static(path.join(__dirname, "node_modules"))); //TODO: make individ paths for each (jquery..etc)

/** Routes */
app.use("/", indexRouter);

/**
 * Socket Settings
 */

io.on("connection", function (socket) {
    // log("Connected==============")
    // socket.on('new-message', function (msg) {
    //     io.emit('new-message', msg);
    //     log("message: " + msg)
    // });

    // socket.on('subscribe', function (branch, cb) {
    //     log('joining branch', branch.id);
    //     socket.join(branch.id);
    //     var join_data = {
    //         message: " JOINED Branch"
    //     }
    //     io.sockets.in(branch.id).emit('message', { message: join_data });
    //     cb('subscribed')
    // });

    // socket.on('unsubscribe', function (branch, cb) {
    //     log('leaving room', branch.id);
    //     socket.leave(branch.id);
    //     var leave_data = {
    //         message: "USER LEFT Branch"
    //     }
    //     io.sockets.in(branch.id).emit('message', { message: leave_data });
    //     cb('unsubscribed')
    // });

    // socket.on('message', function (data) {
    //     log('branch message', data.branch, data.message);
    //     io.sockets.in(data.branch).emit('message', { message: data.message });
    // });

    // socket.on('update', function (msg) {
    //     io.emit('update', msg);
    //     log("updates: " + msg)
    // });
    socket.on("message", function (data) {
        // log("branch message", data.branch, data.message);
        var result = SocketController.parseMessage(data);
        return result //if result => socket.emit(result)
    });


});

/** Server Settings */
var port = 4300; //TODO: get this from a config file
var ipAddress = "localhost"; //TODO: get this froma  config file too

server.listen(port, ipAddress);
server.on("error", onError);
server.on("listening", onListening);

/** Server events */
function onListening() {
    var addr = server.address();
    log(addr);
}

function onError(err) {
    log(err);
    if (err.syscall !== "listen") {
        throw err;
    }
}

module.exports = app;
global.io = io