(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-screen/game-screen.component */ "./src/app/game-screen/game-screen.component.ts");




var routes = [
    { path: "gamescreen/:name/:screenName", component: _game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_3__["GameScreenComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "SeraphimBranchServerMainDisplay";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-screen/game-screen.component */ "./src/app/game-screen/game-screen.component.ts");
/* harmony import */ var _root_server_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root-server.service */ "./src/app/root-server.service.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_6__["GameScreenComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [_root_server_service__WEBPACK_IMPORTED_MODULE_7__["RootServerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        // public api = `http://localhost:4300`;
        this.api = location.protocol + "//" + location.host;
        this.screenConfig = {
            configs: [
                {
                    name: "Christmas",
                    style: {
                        "font-family": "\"Comic Sans MS\", cursive, sans-serif",
                        color: "#f1f1f1"
                    }
                }
            ]
        };
    }
    ConfigService.prototype.getApiUrl = function () {
        console.log(this.api);
        return this.api;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/game-screen/game-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/game-screen/game-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n  margin: 0px;\r\n}\r\n\r\n#videoDiv {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -1;\r\n}\r\n\r\n#videoDivOverride {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.hiddenVideo {\r\n  display: none;\r\n  z-index: -1000;\r\n}\r\n\r\nvideo {\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\r\n  height: 100vh;\r\n}\r\n\r\n.hintElement {\r\n  font-size: 4vw;\r\n}\r\n\r\n.timeElement {\r\n  font-size: 15vw;\r\n}\r\n\r\n.timerDiv {\r\n  position: fixed;\r\n  bottom: 50%;\r\n  text-align: center;\r\n  color: #f1f1f1;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n.hintDiv {\r\n  position: fixed;\r\n  bottom: 15%;\r\n  text-align: justify;\r\n  color: #f1f1f1;\r\n  width: 100%;\r\n  height: 20%;\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1zY3JlZW4vZ2FtZS1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9nYW1lLXNjcmVlbi9nYW1lLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4jdmlkZW9EaXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiN2aWRlb0Rpdk92ZXJyaWRlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oaWRkZW5WaWRlbyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmhpbnRFbGVtZW50IHtcclxuICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLnRpbWVFbGVtZW50IHtcclxuICBmb250LXNpemU6IDE1dnc7XHJcbn1cclxuXHJcbi50aW1lckRpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2YxZjFmMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaGludERpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTUlO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/game-screen/game-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/game-screen/game-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timerDiv\" *ngIf=\"showTimer\">\n  <div class=\"timeElement\" [ngStyle]=\"customFontStyle\">\n    {{ time?.hours }} : {{ time?.minutes }} : {{ time?.seconds }}\n  </div>\n</div>\n\n<div class=\"hintDiv\" *ngIf=\"showHints\">\n  <div #hintElem [ngStyle]=\"hintTextSize\">\n    <p [ngStyle]=\"customFontStyle\">{{ hintText }}</p>\n  </div>\n</div>\n\n<div id=\"videoDiv\" name=\"videoDiv\">\n  <video #videoElem></video>\n</div>\n\n\n<div id=\"imageDiv\" name=\"imageDiv\">\n  <img #imageElem>\n</div>\n\n<div id=\"videoDivOverride\" name=\"videoDivOverride\">\n  <video #videoElemOverride [ngStyle]=\"videoOverrideStyle\"></video>\n</div>\n\n<div id=\"audioDiv\">\n  <audio #audioElem></audio>\n</div>\n"

/***/ }),

/***/ "./src/app/game-screen/game-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-screen/game-screen.component.ts ***!
  \******************************************************/
/*! exports provided: GameScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScreenComponent", function() { return GameScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _root_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../root-server.service */ "./src/app/root-server.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");






var GameScreenComponent = /** @class */ (function () {
    function GameScreenComponent(route, socket, rootServer, configService) {
        this.route = route;
        this.socket = socket;
        this.rootServer = rootServer;
        this.configService = configService;
    }
    GameScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.scriptName = params.get("name");
            _this.screenName = params.get("screenName");
            console.log(_this.scriptName);
            console.log(_this.screenName);
            _this.getScript(_this.scriptName);
            // this.getScreenConfig();
        });
        this.socketSubscribe();
    };
    // getScreenConfig() {
    //   let configs = this.configService.screenConfig.configs;
    //   for (var i = 0; i < configs.length; i++) {
    //     if (configs[i].name === this.scriptName) {
    //       this.customStyles = configs[i].style;
    //     }
    //   }
    //   this.hintTextSize = {
    //     "font-size": "6vw"
    //   };
    // }
    GameScreenComponent.prototype.getScript = function (scriptName) {
        var _this = this;
        this.rootServer.loadScript(scriptName).subscribe(function (script) {
            _this.script = script;
            _this.getScreenConfig();
        });
    };
    GameScreenComponent.prototype.getScreenConfig = function () {
        var configs = this.script.screenConfigs;
        for (var i = 0; i < configs.length; i++) {
            if (configs[i].name === this.screenName) {
                //     this.screenConfig = configs[i];
                //     console.log(this.screenConfig);
                //     // Show the timer
                //     this.showTimer = configs[i].showTimer;
                //     // Show hints
                //     this.showHints = configs[i].showHints;
                //     //Custom screen font
                //     this.customFontStyle = {
                //       "font-family": configs[i].font,
                //       color: configs[i].font_colour
                //     };
                //     // Set default background type
                //     if (configs[i].backgroundType === "Video") {
                //       this.initVideo(configs[i].backgroundPath);
                //       this.defaultBackgroundIsVideo = true;
                //     } else {
                //       this.defaultBackgroundIsVideo = false;
                // }
                //     this.initAudio();
                this.setConfigs(configs[i]);
            }
        }
        this.hintTextSize = {
            "font-size": "6vw"
        };
    };
    GameScreenComponent.prototype.setConfigs = function (configs) {
        this.screenConfig = configs;
        console.log(this.screenConfig);
        // Show the timer
        this.showTimer = configs.showTimer;
        // Show hints
        this.showHints = configs.showHints;
        //Custom screen font
        this.customFontStyle = {
            "font-family": configs.font,
            color: configs.font_colour
        };
        // Set default background type
        if (configs.backgroundType === "Video") {
            this.initVideo(configs.backgroundPath);
            this.defaultBackgroundIsVideo = true;
        }
        else {
            this.defaultBackgroundIsVideo = false;
        }
        this.initAudio();
    };
    GameScreenComponent.prototype.initAudio = function () {
        this.startAudio = new Audio();
        this.endAudio = new Audio();
        this.hintAudio = new Audio();
        this.backgroundAudio = new Audio();
        this.customAudio = new Audio();
        for (var _i = 0, _a = this.script.triggers; _i < _a.length; _i++) {
            var trigger = _a[_i];
            if (trigger.audio != "") {
                this.parseAudioType(trigger.audio_type, trigger.audio, trigger.loop_audio);
            }
        }
        this.audioArray = new Array();
        this.audioArray.push(this.startAudio);
        this.audioArray.push(this.endAudio);
        this.audioArray.push(this.hintAudio);
        this.audioArray.push(this.backgroundAudio);
        this.audioArray.push(this.customAudio);
    };
    GameScreenComponent.prototype.parseAudioType = function (type, path, loop) {
        // let api = this.rootServer.branchApi;
        // path = `${api}/${path}`;
        path = "" + path;
        switch (type) {
            case "start":
                this.startAudio = new Audio(path);
                if (loop)
                    this.startAudio.loop = true;
                break;
            case "end":
                this.endAudio = new Audio(path);
                if (loop)
                    this.endAudio.loop = true;
                break;
            case "hint":
                this.hintAudio = new Audio(path);
                if (loop)
                    this.hintAudio.loop = true;
                break;
            case "background":
                this.backgroundAudio = new Audio(path);
                if (loop)
                    this.backgroundAudio.loop = true;
                break;
            case "custom":
                this.customAudio = new Audio(path);
                if (loop)
                    this.customAudio.loop = true;
                break;
            default:
                break;
        }
    };
    GameScreenComponent.prototype.initVideo = function (videoPath) {
        //For background video
        this.videoElem.nativeElement.setAttribute("width", "100%");
        this.videoElem.nativeElement.setAttribute("height", "100%");
        this.videoElem.nativeElement.setAttribute("type", "video/mp4");
        //For Playing videos over the top
        this.videoElemOverride.nativeElement.setAttribute("width", "100%");
        this.videoElemOverride.nativeElement.setAttribute("height", "100%");
        this.videoElemOverride.nativeElement.setAttribute("type", "video/mp4");
        this.enableVideoOverride(false);
        this.playBackgroundVideo(videoPath, true, false);
    };
    // initVideo() {
    //   //For background video
    //   this.videoElem.nativeElement.setAttribute("width", "100%");
    //   this.videoElem.nativeElement.setAttribute("height", "100%");
    //   this.videoElem.nativeElement.setAttribute("type", "video/mp4");
    //   //For Playing videos over the top
    //   this.videoElemOverride.nativeElement.setAttribute("width", "100%");
    //   this.videoElemOverride.nativeElement.setAttribute("height", "100%");
    //   this.videoElemOverride.nativeElement.setAttribute("type", "video/mp4");
    //   this.enableVideoOverride(false);
    //   for (let trigger of this.script.triggers) {
    //     if (trigger.video != "") {
    //       if (trigger.video_type == "background") {
    //         this.playBackgroundVideo(
    //           trigger.video,
    //           trigger.loop_video,
    //           trigger.pause_timer
    //         );
    //       }
    //     }
    //   }
    // }
    GameScreenComponent.prototype.initImage = function (imagePath) {
        this.imageElem.nativeElement.setAttribute("width", "100%");
        this.imageElem.nativeElement.setAttribute("height", "100%");
        this.imageElem.nativeElement.setAttribute("src", "" + imagePath);
    };
    GameScreenComponent.prototype.enableVideoOverride = function (show) {
        if (show) {
            this.videoOverrideStyle = {
                "z-index": "2"
            };
        }
        else {
            this.videoOverrideStyle = {
                display: "none",
                "z-index": "-1000"
            };
        }
    };
    GameScreenComponent.prototype.socketSubscribe = function () {
        var _this = this;
        this.socketSubscription = this.socket
            .getMessages()
            .subscribe(function (message) {
            if (message.hasOwnProperty("instance_update")) {
                if (message.instance_update.name === _this.scriptName) {
                    _this.scriptUpdate(message.instance_update);
                    console.log(message);
                }
            }
            if (message.hasOwnProperty("reload")) {
                if (message.scriptName === _this.scriptName &&
                    message.screenName === _this.screenName) {
                    window.location.reload();
                }
            }
            if (message.hasOwnProperty("message_type")) {
                if (message.scriptName === _this.scriptName &&
                    message.screenName === _this.screenName) {
                    var msg = message;
                    switch (message.message_type) {
                        case "trigger":
                            _this.parseTrigger(msg);
                            break;
                        case "hint":
                            _this.parseHint(msg);
                            break;
                        case "audio":
                            _this.parseAudio(msg);
                            break;
                        case "video":
                            _this.parseVideo(msg);
                            break;
                        case "config":
                            _this.setConfigs(msg.config);
                        default:
                            break;
                    }
                }
                else if (message.message_type === "hint") {
                    _this.parseHint(message);
                }
            }
        });
    };
    GameScreenComponent.prototype.scriptUpdate = function (msg) {
        if (msg.hasOwnProperty("time")) {
            var t = msg.time;
            t.hours = t.hours.toString().padStart(2, "0");
            t.minutes = t.minutes.toString().padStart(2, "0");
            t.seconds = t.seconds.toString().padStart(2, "0");
            this.time = t;
        }
    };
    GameScreenComponent.prototype.parseTrigger = function (msg) {
        // let api = this.rootServer.branchApi;
        console.log(msg);
        if (msg.trigger.hint != "") {
            this.hintText = msg.trigger.hint;
        }
        if (msg.trigger.video != "") {
            var t = msg.trigger;
            this.parseVideoType(t.video_type, t.video, t.loop_video, t.pause_timer);
            // this.videoElem.nativeElement.src = `${api}/${msg.trigger.video}`;
            // this.videoElem.nativeElement.play();
        }
        if (msg.trigger.audio != "") {
            // let path = `${api}/${msg.trigger.audio}`;
            var path = "" + msg.trigger.audio;
            // this.audioElem.nativeElement.src = `${api}/${msg.trigger.audio}`;
            switch (msg.trigger.audio_type) {
                case "start":
                    // this.startAudio = new Audio(path);
                    this.playStartAudio();
                    break;
                case "end":
                    // this.endAudio = new Audio(path);
                    this.playEndAudio();
                    break;
                case "hint":
                    // this.hintAudio = new Audo(path);
                    this.playHintAudio();
                    break;
                case "background":
                    // this.backgroundAudio = new Audio(path);
                    this.playBackgroundAudio();
                    break;
                case "custom":
                    this.customAudio = new Audio(path);
                    this.playCustomAudio();
                    break;
                default:
                    break;
            }
            // this.audioElem.nativeElement.play();
        }
    };
    GameScreenComponent.prototype.parseHint = function (msg) {
        if (msg.hintText == undefined) {
            return;
        }
        if (msg.hintText == "--clear--") {
            this.hintText = "";
        }
        else {
            var initSize = 8;
            var hintSize = msg.hintText.length;
            var scale = hintSize * 0.035;
            scale = initSize - scale;
            if (scale < 3)
                scale = 3;
            this.hintTextSize["font-size"] = scale + "vw";
            console.log(this.hintTextSize);
            this.hintText = msg.hintText;
            this.playHintAudio();
        }
    };
    GameScreenComponent.prototype.parseVideo = function (msg) {
        // let api = this.rootServer.branchApi;
        // let path = `${api}/${msg.videoFile}`;
        var path = "" + msg.videoFile;
        this.playCustomVideo(msg.videoFile, false, false);
    };
    // =============================================================
    // =============================================================
    // ==================== AUDIO ==================================
    // =============================================================
    // =============================================================
    GameScreenComponent.prototype.parseAudio = function (msg) {
        // let api = this.rootServer.branchApi;
        // let path = `${api}/${msg.audioFile}`;
        var path = "" + msg.audioFile;
        this.customAudio = new Audio(path);
        this.playCustomAudio();
    };
    GameScreenComponent.prototype.stopAllAudio = function () {
        for (var i = 0; i < this.audioArray.length; i++) {
            var audio = this.audioArray[i];
            audio.pause();
        }
    };
    GameScreenComponent.prototype.playStartAudio = function () {
        var _this = this;
        this.startAudio.play();
        this.lowerBackgroundVolume();
        this.startAudio.onended = function () {
            _this.raiseBackgroundVolume();
        };
    };
    GameScreenComponent.prototype.playEndAudio = function () {
        var _this = this;
        this.endAudio.play();
        this.lowerBackgroundVolume();
        this.endAudio.onended = function () {
            _this.raiseBackgroundVolume();
        };
    };
    GameScreenComponent.prototype.playHintAudio = function () {
        var _this = this;
        this.hintAudio.play();
        this.lowerBackgroundVolume();
        this.hintAudio.onended = function () {
            _this.raiseBackgroundVolume();
        };
    };
    GameScreenComponent.prototype.playBackgroundAudio = function () {
        this.backgroundAudio.play();
    };
    GameScreenComponent.prototype.playCustomAudio = function () {
        var _this = this;
        this.customAudio.play();
        this.lowerBackgroundVolume();
        this.customAudio.onended = function () {
            _this.raiseBackgroundVolume();
        };
    };
    GameScreenComponent.prototype.lowerBackgroundVolume = function () {
        this.backgroundAudio.volume = 0.3;
    };
    GameScreenComponent.prototype.raiseBackgroundVolume = function () {
        this.backgroundAudio.volume = 1.0;
    };
    // =============================================================
    // =============================================================
    // ==================== VIDEO ==================================
    // =============================================================
    // =============================================================
    GameScreenComponent.prototype.parseVideoType = function (type, path, loop, pauseTimer) {
        switch (type) {
            case "background":
                this.playBackgroundVideo(path, loop, pauseTimer);
                break;
            default:
                this.playCustomVideo(path, loop, pauseTimer);
                break;
        }
    };
    GameScreenComponent.prototype.playBackgroundVideo = function (path, loop, pauseTimer) {
        // path = `${this.branchApi}/${path}`;
        path = "" + path;
        this.videoElem.nativeElement.src = path;
        this.videoElem.nativeElement.play();
        this.videoElem.nativeElement.loop = loop;
    };
    GameScreenComponent.prototype.playCustomVideo = function (path, loop, pauseTimer) {
        var _this = this;
        // path = `${this.branchApi}/${path}`;
        path = "" + path;
        this.enableVideoOverride(true);
        this.videoElemOverride.nativeElement.src = path;
        this.videoElemOverride.nativeElement.play();
        this.videoElemOverride.nativeElement.loop = loop;
        if (pauseTimer) {
            this.rootServer.pauseInstanceTimer(this.scriptName).subscribe(function (result) {
                console.log(result);
            });
        }
        this.videoElemOverride.nativeElement.onended = function () {
            _this.enableVideoOverride(false);
            if (pauseTimer) {
                _this.rootServer
                    .resumeInstanceTimer(_this.scriptName)
                    .subscribe(function (result) {
                    console.log(result);
                });
            }
        };
        //if timer pauses
        //if loop? nah..
        // event .ended - resume
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoElem"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameScreenComponent.prototype, "videoElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imageElem"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameScreenComponent.prototype, "imageElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoElemOverride"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameScreenComponent.prototype, "videoElemOverride", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("hintElem"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameScreenComponent.prototype, "hintElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("audioElem"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameScreenComponent.prototype, "audioElem", void 0);
    GameScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-game-screen",
            template: __webpack_require__(/*! ./game-screen.component.html */ "./src/app/game-screen/game-screen.component.html"),
            styles: [__webpack_require__(/*! ./game-screen.component.css */ "./src/app/game-screen/game-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"],
            _root_server_service__WEBPACK_IMPORTED_MODULE_4__["RootServerService"],
            _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], GameScreenComponent);
    return GameScreenComponent;
}());



/***/ }),

/***/ "./src/app/root-server.service.ts":
/*!****************************************!*\
  !*** ./src/app/root-server.service.ts ***!
  \****************************************/
/*! exports provided: RootServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootServerService", function() { return RootServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");





var RootServerService = /** @class */ (function () {
    function RootServerService(http, config) {
        this.http = http;
        this.config = config;
        this.api = "http://localhost:4300";
        this.observableScript = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.selectedScript);
        this.api = config.getApiUrl();
    }
    RootServerService.prototype.loadScript = function (name) {
        var _this = this;
        this.http.get(this.api + "/game/" + name).subscribe(function (scriptInstance) {
            _this.selectedScriptInstance = scriptInstance;
            console.log(scriptInstance);
        });
        return this.http.get(this.api + "/script/" + name);
    };
    RootServerService.prototype.pauseInstanceTimer = function (instanceName) {
        return this.http.get(this.api + "/game/time/pause/" + instanceName);
    };
    RootServerService.prototype.resumeInstanceTimer = function (instanceName) {
        return this.http.get(this.api + "/game/time/resume/" + instanceName);
    };
    RootServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], RootServerService);
    return RootServerService;
}());



/***/ }),

/***/ "./src/app/sockets.service.ts":
/*!************************************!*\
  !*** ./src/app/sockets.service.ts ***!
  \************************************/
/*! exports provided: SocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsService", function() { return SocketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");





var SocketsService = /** @class */ (function () {
    function SocketsService(config) {
        this.config = config;
        this.url = "192.168.0.180:4300"; //Also loads from config
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
        this.url = this.config.getApiUrl();
    }
    SocketsService.prototype.getMessages = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on("message", function (message) {
                observer.next(message);
            });
        });
    };
    SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], SocketsService);
    return SocketsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SeraphimEscape\Desktop\DEV\SeraphimBranchServerFrontEnd\SeraphimBranchServerMainDisplay\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map