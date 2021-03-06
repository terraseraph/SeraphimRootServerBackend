var express = require("express");
var router = express.Router();
const path = require('path');
const app = require("../app");
const controlInterface = path.join(__dirname, '../views/console.handlebars');
const screenInterface = path.join(__dirname, '../views/display.handlebars');
const ScriptController = require("../controllers/scriptController");
const GameController = require("../controllers/gameController");
const SocketController = require("../controllers/socketController");
const BranchController = require("../controllers/branchController");
const DatabaseController = require("../controllers/databaseController");
const HttpManager = require("../Managers/httpManager");
const MediaController = require("../controllers/MediaController");
const ModelController = require("../controllers/ModelController")
var LoggingController = require("../controllers/loggingController");
var RootServerController = require("../controllers/rootServerController");
var log = LoggingController.log;

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render(controlInterface, {
    layout: false
  });
});

router.get("/gamescreen/:script/:screenName", function (req, res, next) {
  res.render(screenInterface, {
    layout: false
  });
});


//=============================================//
//====== Config ==============================//
//===========================================//
router.get("/config", RootServerController.getRootConfig)
router.put('/config', RootServerController.updateRootConfig)

//=============================================//
//====== Event action paths ==================//
//===========================================//

router.route("/script/force/action").post(ScriptController.forceAction);
router.route("/script/force/event").post(ScriptController.forceEvent);

//=============================================//
//====== Script paths ========================//
//===========================================//
router.post("/script", ScriptController.createScript);

router.get("/script/:name", ScriptController.readScript);

router.get("/script", ScriptController.readScripts);
router.get("/scriptf", ScriptController.getFreshScriptsFromDirectory); //Use for getting un altered scripts fromm memory

router.put("/script", ScriptController.updateScript);

router.delete("/script/:scriptName", ScriptController.deleteScript);

//=============================================//
//====== Game paths ==========================//
//===========================================//

router.post("/game", GameController.newGame);
router.get("/game/:name", GameController.readGame);
router.get("/game", GameController.readAll);
router.put("/game/state", GameController.updateGameState);
router.put("/game/event/complete", GameController.setEventCompleted);

router.put("/game/time", GameController.updateGameTime);
router.get("/game/time/pause/:name", GameController.pauseGame);
router.get("/game/time/resume/:name", GameController.resumeGame);

router.route("/game/force/action").post(GameController.forceAction);
router.route("/game/force/event").post(GameController.forceEvent);

router.delete("/game/:name", GameController.deleteGame);

//=============================================//
//====== Branch paths ==========================//
//===========================================//
router.post("/branch/event", BranchController.branchSendEvent);
router.post("/branch/action", BranchController.branchSendAction);

router.post("/branch/script/update", BranchController.branchUpdateScript);
router.post("/branch/script/upload", BranchController.uploadBranchScript);
router.post("/branch/script/delete", BranchController.deleteBranchScript);

router.post("/branch/trigger", BranchController.branchSendTrigger);
router.post("/branch/trigger/audio", BranchController.branchSendAudio);
router.post("/branch/trigger/video", BranchController.branchSendVideo);

router.post("/branch/config", BranchController.branchUpdateScreenConfig);

router.post("/branch/hint", BranchController.branchSendHint);
router.post("/branch/hint/clear", BranchController.branchClearHint);

//Branch CRUD
router.post("/branch", BranchController.createBranch);
router.get("/branch/:id", BranchController.getBranchById);
router.get("/branch", BranchController.getAllBranches);
router.put("/branch", BranchController.updateBranch);
router.delete("/branch/:id", BranchController.deleteBranch);

// Branch Node info
router.get(`/branch/nodes/:branchId`, BranchController.getLiveBranchNodeInfo);
router.post("/branch/nodeUpdate", BranchController.nodeUpdateFromServer);

//Branch media routes
router.post(`/branch/media/delete`, BranchController.deleteMedia);
router.post("/branch/video", BranchController.uploadBranchVideo);
router.post("/branch/audio", BranchController.uploadBranchAudio);

// Send a packet to a mesh
router.post("/branch/nodes/direct", BranchController.sendNodeMeshPacket);

//=============================================//
//====== Trigger Routes ======================//
//===========================================//
router.post(`/trigger/request`, HttpManager.sendHttpRequest);


//=============================================//
//====== Media Routes ======================//
//===========================================//
router.get('/media/audio/:fileName', MediaController.mediaController.getAudioHTTP)


//=============================================//
//====== Model Routes ======================//
//===========================================//
router.get('/models/device', ModelController.modelManager.httpGetDeviceModel)

//=============================================//
//====== Message Routes ======================//
//===========================================//

router.post("/log", LoggingController.logFromHttp);


//=============================================//
//====== Shell Commands ======================//
//===========================================//
router.post("/branch/shell/restart", BranchController.shellRestartBranchServer);
router.post("/branch/shell/reload", BranchController.shellReloadBranchDesktop);
router.post("/branch/shell/gitupdate", BranchController.shellCustomCommand);
router.post("/branch/shell/command", BranchController.shellCustomCommand);


//=============================================//
//===== Socket Commands ======================//
//===========================================//
router.post("/socket/message", SocketController.customSocketEmit);


//=============================================//
//====== TEST DB =============================//
//===========================================//

router.get("/test/db", DatabaseController.testSelect);
router.post("/test/db", DatabaseController.testInsert);

module.exports = router;