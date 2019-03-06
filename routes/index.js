var express = require('express');
var router = express.Router();
const app = require('../app')
const ScriptController = require("../controllers/scriptController");
const GameController = require("../controllers/gameController");
const BranchController = require("../controllers/branchController");
var log = require('../controllers/loggingController').log;
/* GET home page. */

router.get('/', function (req, res, next) {
  var result = {
    name: "Seraphim Root Server"
  }
  log(result)
  res.send(result)
});

//=============================================//
//====== Event action paths ==================//
//===========================================//


router.route('/script/force/action').post(ScriptController.forceAction);
router.route('/script/force/event').post(ScriptController.forceEvent);

//=============================================//
//====== Script paths ========================//
//===========================================//
router.post('/script', ScriptController.createScript)

router.get('/script/:name', ScriptController.readScript)

router.get('/script', ScriptController.readScripts)
router.get('/scriptf', ScriptController.getFreshScriptsFromDirectory) //Use for getting un altered scripts fromm memory

router.put('/script', ScriptController.updateScript)

router.delete('/script/:scriptName', ScriptController.deleteScript)





//=============================================//
//====== Game paths ==========================//
//===========================================//

router.post('/game', GameController.newGame)
router.get('/game/:name', GameController.readGame)
router.get('/game', GameController.readAll)
router.put('/game/state', GameController.updateGameState)
router.put('/game/event/complete', GameController.setEventCompleted)

router.put('/game/time', GameController.updateGameTime)
router.get('/game/time/pause/:name', GameController.pauseGame)
router.get('/game/time/resume/:name', GameController.resumeGame)

router.route('/game/force/action').post(GameController.forceAction);
router.route('/game/force/event').post(GameController.forceEvent);

router.delete('/game/:name', GameController.deleteGame)




//=============================================//
//====== Branch paths ==========================//
//===========================================//
router.post('/branch/event', BranchController.branchSendEvent);
router.post('/branch/action', BranchController.branchSendAction);

router.post('/branch/script/update', BranchController.branchUpdateScript);

router.post('/branch/trigger', BranchController.branchSendTrigger);
router.post('/branch/trigger/audio', BranchController.branchSendAudio);
router.post('/branch/trigger/video', BranchController.branchSendVideo);

router.post('/branch/config', BranchController.branchUpdateScreenConfig);

router.post('/branch/hint', BranchController.branchSendHint);
router.post('/branch/hint/clear', BranchController.branchClearHint);




module.exports = router;