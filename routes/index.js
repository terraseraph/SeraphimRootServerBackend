var express = require('express');
var router = express.Router();
const app = require('../app')
const ScriptController = require("../controllers/scriptController");
const GameController = require("../controllers/gameController");
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

// router.post('/force/event', ScriptController.forceEvent)
router.route('/force/action').post(ScriptController.forceAction);
router.route('/force/event').post(ScriptController.forceEvent);

//=============================================//
//====== Script paths ========================//
//===========================================//
router.post('/script', ScriptController.createScript)

router.get('/script/:name', ScriptController.readScript)

router.get('/script', ScriptController.readScripts)

router.put('/script', ScriptController.updateScript)

router.delete('/script/:name', ScriptController.deleteScript)





//=============================================//
//====== Game paths ==========================//
//===========================================//

router.post('/game', GameController.newGame)
router.get('/game/:name', GameController.readGame)
router.get('/game', GameController.readAll)
router.put('/game/state', GameController.updateGameState)

router.put('/game/time', GameController.updateGameTime)
router.get('/game/time/pause/:name', GameController.pauseGame)
router.get('/game/time/resume/:name', GameController.resumeGame)

router.delete('/game/:name', GameController.deleteGame)

module.exports = router;