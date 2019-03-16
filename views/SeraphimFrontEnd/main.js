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
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _script_editor_script_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./script-editor/script-editor.component */ "./src/app/script-editor/script-editor.component.ts");
/* harmony import */ var _event_action_script_event_action_script_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-action-script/event-action-script.component */ "./src/app/event-action-script/event-action-script.component.ts");









var routes = [
    { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
    { path: "overview", component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_4__["OverviewComponent"] },
    { path: "menu", component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: "log", component: _log_log_component__WEBPACK_IMPORTED_MODULE_6__["LogComponent"] },
    { path: "script-editor", component: _script_editor_script_editor_component__WEBPACK_IMPORTED_MODULE_7__["ScriptEditorComponent"] },
    { path: "event-action", component: _event_action_script_event_action_script_component__WEBPACK_IMPORTED_MODULE_8__["EventActionScriptComponent"] }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <app-menu></app-menu>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <app-overview-instance-list></app-overview-instance-list>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

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
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.service */ "./src/app/init.service.ts");



// import { SocketsService } from "./sockets.service"
var AppComponent = /** @class */ (function () {
    function AppComponent(init) {
        this.init = init;
        this.title = "SeraphimFrontEnd";
        init.init();
        // socket.init();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]])
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _event_action_script_event_action_script_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event-action-script/event-action-script.component */ "./src/app/event-action-script/event-action-script.component.ts");
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./init.service */ "./src/app/init.service.ts");
/* harmony import */ var _overview_event_action_list_overview_event_action_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overview-event-action-list/overview-event-action-list.component */ "./src/app/overview-event-action-list/overview-event-action-list.component.ts");
/* harmony import */ var _overview_instance_list_overview_instance_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overview-instance-list/overview-instance-list.component */ "./src/app/overview-instance-list/overview-instance-list.component.ts");
/* harmony import */ var _script_editor_script_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./script-editor/script-editor.component */ "./src/app/script-editor/script-editor.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_10__["OverviewComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _log_log_component__WEBPACK_IMPORTED_MODULE_12__["LogComponent"],
                _event_action_script_event_action_script_component__WEBPACK_IMPORTED_MODULE_13__["EventActionScriptComponent"],
                _overview_event_action_list_overview_event_action_list_component__WEBPACK_IMPORTED_MODULE_15__["OverviewEventActionListComponent"],
                _overview_instance_list_overview_instance_list_component__WEBPACK_IMPORTED_MODULE_16__["OverviewInstanceListComponent"],
                _script_editor_script_editor_component__WEBPACK_IMPORTED_MODULE_17__["ScriptEditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]
            ],
            providers: [_init_service__WEBPACK_IMPORTED_MODULE_14__["InitService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookings.service.ts":
/*!*************************************!*\
  !*** ./src/app/bookings.service.ts ***!
  \*************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BookingsService = /** @class */ (function () {
    function BookingsService(http) {
        var _this = this;
        this.http = http;
        this.api = "https://api.bookeo.com/v2/";
        this.secretKey = "secretKey=7RrMyipwOpedho7XwsrGFoKvSAi7nAp8";
        this.apiKey = "apiKey=ARUF9PN63MTWK9FXJK7H33350CPFK9Y1583F6ECD42";
        this.createStartTime().then(function (sTime) {
            _this.startTime = sTime;
            _this.createEndTime().then(function (eTime) {
                _this.endTime = eTime;
            });
        });
    }
    BookingsService.prototype.getUpcomingBookings = function () {
        return this.http.get(this.api + "bookings?startTime=" + this.startTime + "&endTime=" + this.endTime + "&" + this.secretKey + "&" + this.apiKey);
    };
    BookingsService.prototype.createStartTime = function () {
        return new Promise(function (resolve, reject) {
            var d = new Date();
            var monthNum = d.getMonth() + 1;
            var monthStr = monthNum.toString().padStart(2, "0");
            var dayStr = d
                .getDate()
                .toString()
                .padStart(2, "0");
            var result = d.getFullYear() + "-" + monthStr + "-" + dayStr + "T00:00:00-00:00";
            resolve(result);
        });
    };
    BookingsService.prototype.createEndTime = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var date = new Date();
            _this.promiseDateAdd(date, "day", 30).then(function (da) {
                var d;
                d = da;
                var monthNum = d.getMonth() + 1;
                var monthStr = monthNum.toString().padStart(2, "0");
                var dayStr = d
                    .getDate()
                    .toString()
                    .padStart(2, "0");
                var result = d.getFullYear() + "-" + monthStr + "-" + dayStr + "T00:00:00-00:00";
                resolve(result);
            });
        });
    };
    BookingsService.prototype.promiseDateAdd = function (date, interval, units) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.dateAdd(date, interval, units));
        });
    };
    BookingsService.prototype.dateAdd = function (date, interval, units) {
        var ret = new Date(date); // don't change original date
        var checkRollover = function () {
            if (ret.getDate() !== date.getDate()) {
            }
            ret.setDate(0);
        };
        switch (interval.toLowerCase()) {
            case "year":
                ret.setFullYear(ret.getFullYear() + units);
                checkRollover();
                break;
            case "quarter":
                ret.setMonth(ret.getMonth() + 3 * units);
                checkRollover();
                break;
            case "month":
                ret.setMonth(ret.getMonth() + units);
                checkRollover();
                break;
            case "week":
                ret.setDate(ret.getDate() + 7 * units);
                break;
            case "day":
                ret.setDate(ret.getDate() + units);
                break;
            case "hour":
                ret.setTime(ret.getTime() + units * 3600000);
                break;
            case "minute":
                ret.setTime(ret.getTime() + units * 60000);
                break;
            case "second":
                ret.setTime(ret.getTime() + units * 1000);
                break;
            default:
                ret = undefined;
                break;
        }
        return ret;
    };
    BookingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookingsService);
    return BookingsService;
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
        this.api = "http://192.168.0.180:4300";
    }
    ConfigService.prototype.getApiUrl = function () {
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

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService, EventActionScriptModel, ScriptEventModel, ScriptActionModel, ScriptHintModel, ScreenConfigModel, ScriptTriggerModel, ScriptStateModel, ScriptTimeModel, BranchModel, NodeBridgeModel, NodeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventActionScriptModel", function() { return EventActionScriptModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptEventModel", function() { return ScriptEventModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptActionModel", function() { return ScriptActionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptHintModel", function() { return ScriptHintModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenConfigModel", function() { return ScreenConfigModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptTriggerModel", function() { return ScriptTriggerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStateModel", function() { return ScriptStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptTimeModel", function() { return ScriptTimeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchModel", function() { return BranchModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBridgeModel", function() { return NodeBridgeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeModel", function() { return NodeModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DataService = /** @class */ (function () {
    function DataService(server, socket) {
        this.server = server;
        this.socket = socket;
        this.observableScriptInstance = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.selectedScriptInstance);
        this.scriptEditor_observableSelectedScript = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.scriptEditor_selectedScript);
        this.scriptEditor_observableScriptList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.scriptEditor_allScripts);
        this.branch_observableBranchList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.branch_allBranches);
        this.branch_observableSelectedBranch = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.branch_selectedBranch);
        this.scriptEditor_getAllScripts();
    }
    // flow:
    // component subscribes to changes to script
    // component requests the data to be updated
    // data then updates and sends a .next to observables
    // ==============================
    // Branches
    // ==============================
    DataService.prototype.branch_observableUpdate = function () {
        this.branch_observableSelectedBranch.next(this.branch_getSelectedBranch());
    };
    DataService.prototype.branch_observableListUpdate = function () {
        this.branch_observableBranchList.next(this.branch_getAllBranches());
    };
    DataService.prototype.branch_subscribe = function () {
        return this.branch_selectedBranch;
    };
    DataService.prototype.branch_setSelectedBranch = function (branchId) {
        var _this = this;
        this.branch_getAllBranches();
        this.findBranch(branchId).then(function (branch) {
            console.log("Setting editing branch to: ", branch);
            _this.branch_selectedBranch = branch;
            _this.branch_observableUpdate();
        });
    };
    DataService.prototype.branch_serverGetAllBranches = function () {
        var _this = this;
        this.server.readAllBranches().subscribe(function (branchList) {
            _this.branch_allBranches = branchList;
            console.log(branchList);
            _this.branch_observableListUpdate();
        });
    };
    DataService.prototype.branch_getSelectedBranch = function () {
        return this.branch_selectedBranch;
    };
    DataService.prototype.branch_getAllBranches = function () {
        return this.branch_allBranches;
    };
    DataService.prototype.branch_updateSelectedBranch = function (branch) {
        this.server.updateBranch(branch).subscribe(function (result) {
            console.log(result);
        });
    };
    DataService.prototype.branch_deleteBranch = function (id) {
        this.server.deleteBranch(id).subscribe(function (result) {
            console.log(result);
        });
    };
    DataService.prototype.branch_createNewBranch = function (name, ip) {
        var _this = this;
        var branch = new BranchModel(name, 1, ip);
        this.server.createBranch(branch).subscribe(function (result) {
            console.log(result);
            _this.branch_allBranches.push(branch);
        });
    };
    DataService.prototype.findBranch = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < _this.branch_allBranches.length; i++) {
                var branch = _this.branch_allBranches[i];
                if (branch.id == id) {
                    resolve(branch);
                }
            }
        });
    };
    DataService.prototype.branch_getAllBranchNodes = function (branchId) {
        var _this = this;
        this.server.getBridgeNodes(branchId).subscribe(function (nodes) {
            _this.findBranch(branchId).then(function (branch) {
                branch["nodes"] = nodes;
                _this.branch_observableListUpdate();
            });
        });
    };
    DataService.prototype.branch_editNodeCommonId = function (node) {
        var msg = {
            header: {
                branchAddress: node.branchAddress,
                bridgeId: node.bridgeId,
                nodeType: node.bridgeType
            },
            message: {
                id: node.bridgeId,
                message: {
                    toId: node.nodeId,
                    command: {
                        type: "setId",
                        message: node.newId
                    }
                }
            }
        };
        this.server.editNodeCommonId(msg).subscribe(function (result) {
            console.log(result);
        });
    };
    /**
     *
     *
   {"id":"10",
   "message":{
    "toId" : "3209423301",
      "command" : {
          "type" : "functionChange",
          "toId": "3209423301",
          "message" : "button"
          }
    }
  }
     *
     *
     */
    DataService.prototype.branch_editNodeType = function (node) {
        var msg = {
            header: {
                branchAddress: node.branchAddress,
                bridgeId: node.bridgeId,
                nodeType: node.bridgeType
            },
            message: {
                id: node.bridgeId,
                message: {
                    toId: node.nodeId,
                    command: {
                        type: "functionChange",
                        message: node.newType
                    }
                }
            }
        };
        this.server.editNodeCommonId(msg).subscribe(function (result) {
            console.log(result);
        });
    };
    DataService.prototype.branch_sendNodeAction = function (node) {
        var actionPkt = this.createActionPacketToSend(node.nodeId, node.action, node.actionType, node.data);
        var msg = {
            header: {
                branchAddress: node.branchAddress,
                bridgeId: node.bridgeId,
                nodeType: node.bridgeType
            },
            message: {
                id: node.bridgeId,
                message: actionPkt
            }
        };
        this.server.sendNodeAction(msg).subscribe(function (result) {
            console.log(result);
        });
    };
    DataService.prototype.branch_deleteVideo = function (name, branchIp) {
        var msg = {
            name: name,
            branchIp: branchIp,
            type: "video"
        };
        this.server.branchDeleteMedia(msg).subscribe(function (result) {
            console.log(result);
        });
    };
    DataService.prototype.branch_deleteAudio = function (name, branchIp) {
        var msg = {
            name: name,
            branchIp: branchIp,
            type: "audio"
        };
        this.server.branchDeleteMedia(msg).subscribe(function (result) {
            console.log(result);
        });
    };
    DataService.prototype.branch_uploadVideo = function (fd) {
        this.server.branchUploadVideo(fd).subscribe(function (res) {
            console.log(res);
        });
    };
    DataService.prototype.branch_uploadAudio = function (fd) {
        this.server.branchUploadAudio(fd).subscribe(function (res) {
            console.log(res);
        });
    };
    // ==============================
    // Script editor
    // ==============================
    DataService.prototype.scriptEditor_observableUpdate = function () {
        this.scriptEditor_observableSelectedScript.next(this.scriptEditor_getSelectedScript());
    };
    DataService.prototype.scriptEditor_observableListUpdate = function () {
        this.scriptEditor_observableScriptList.next(this.scriptEditor_getAllLocalScripts());
    };
    DataService.prototype.scriptEditor_subscribe = function () {
        return this.scriptEditor_selectedScript;
    };
    DataService.prototype.scriptEditor_setSelectedScript = function (scriptName) {
        var _this = this;
        this.findScript(scriptName).then(function (script) {
            // console.log("Setting editing script to: ", scriptName, script);
            _this.scriptEditor_selectedScript = script;
            _this.scriptEditor_observableUpdate();
        });
    };
    DataService.prototype.scriptEditor_getSelectedScript = function () {
        return this.scriptEditor_selectedScript;
    };
    DataService.prototype.scriptEditor_getAllLocalScripts = function () {
        return this.scriptEditor_allScripts;
    };
    DataService.prototype.scriptEditor_getAllScripts = function () {
        var _this = this;
        this.server.getFreshScriptsForEditing().subscribe(function (scriptList) {
            _this.scriptEditor_allScripts = scriptList;
            console.log(scriptList);
            _this.scriptEditor_observableListUpdate();
        });
        // this.server.loadScripts().subscribe((scriptList: any) => {
        //   this.scriptEditor_allScripts = scriptList;
        //   console.log(scriptList);
        //   this.scriptEditor_observableListUpdate();
        // });
    };
    DataService.prototype.scriptEditor_updateSelectedScript = function (instanceUpdate) {
        for (var i = 0; i < this.scriptEditor_allScripts.length; i++) {
            if (this.scriptEditor_allScripts[i].name === instanceUpdate.name) {
                this.scriptEditor_allScripts[i] = instanceUpdate;
                this.scriptEditor_observableListUpdate();
                this.server.updateScript(instanceUpdate).subscribe(function (result) {
                    console.log(result);
                });
                console.log(this.scriptEditor_allScripts);
            }
        }
    };
    DataService.prototype.scriptEditorSendHttpRequest = function (type, url, body) {
        if (body === void 0) { body = ""; }
        var msg = {
            type: type,
            url: url,
            body: body
        };
        this.server.triggerSendHttpRequest(msg).subscribe(function (result) {
            console.log(result);
        });
    };
    // ==============================
    // Overview
    // ==============================
    DataService.prototype.overview_getNewScript = function (scriptName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.findScript(scriptName).then(function (script) {
                resolve(script);
            });
        });
    };
    DataService.prototype.selectedScriptInstanceChange = function () {
        this.observableScriptInstance.next(this.selectedScriptInstance);
    };
    DataService.prototype.setSelectedScriptInstance = function (script) {
        this.selectedScriptInstance = this.scriptInstances["" + script.name];
        // this.selectedScriptInstance = script;
        this.selectedScriptInstanceChange();
    };
    DataService.prototype.scriptInstanceListChange = function () {
        this.observableScriptInstanceList.next(this.scriptInstances);
    };
    // TODO:
    // Make the callers eg overview - call data.serveice, data.service then updates its scripts
    DataService.prototype.createInstanceModel = function (sInstance) {
        var sModel = {
            name: sInstance.name,
            time: { hrs: 0, min: 0, sec: 0 },
            ended: "false",
            states: [],
            script: sInstance
        };
        this.scriptInstances["" + sModel.name] = sModel;
    };
    DataService.prototype.getLocalScriptInstance = function (InstanceName) {
        return this.scriptInstances["" + InstanceName];
    };
    DataService.prototype.updateLocalScriptInstance = function (instanceUpdate) {
        this.scriptInstances["" + instanceUpdate.name] = instanceUpdate;
    };
    DataService.prototype.deleteLocalScriptInstance = function (instanceName) {
        this.scriptInstances["" + instanceName] = null;
    };
    // ==================== Calls to server =======================
    DataService.prototype.initLoadAllScriptInstances = function () {
        var _this = this;
        this.server.loadScripts().subscribe(function (instances) {
            for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                var key = instances_1[_i];
                _this.createInstanceModel(instances["" + key]);
            }
        });
    };
    DataService.prototype.serverLoadScript = function (name) {
        var _this = this;
        this.server.loadScript(name).subscribe(function (script) {
            _this.selectedScriptInstance = script;
            console.log("=====TEST NEW DATA SERVICE =====", script);
            _this.selectedScriptInstanceChange();
        });
    };
    // ==================== Socket updates ========================
    // ==================== Helpers ========================
    DataService.prototype.createActionPacketToSend = function (nodeId, action, actionType, data) {
        var result = {
            toId: nodeId,
            state: {
                type: "action",
                message: {
                    action: action,
                    actionType: actionType,
                    data: data
                }
            }
        };
        return result;
    };
    DataService.prototype.findScript = function (scriptName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptEditor_allScripts; _i < _a.length; _i++) {
                var instance = _a[_i];
                if (instance.name === scriptName) {
                    resolve(instance);
                }
            }
        });
    };
    DataService.prototype.newEventModel = function () {
        return new Promise(function (resolve, reject) {
            var model = new ScriptEventModel();
            resolve(model);
        });
    };
    DataService.prototype.newActionModel = function () {
        return new Promise(function (resolve, reject) {
            var model = new ScriptActionModel();
            resolve(model);
        });
    };
    DataService.prototype.newHintModel = function () {
        return new Promise(function (resolve, reject) {
            var model = new ScriptHintModel();
            resolve(model);
        });
    };
    DataService.prototype.newTriggerModel = function () {
        return new Promise(function (resolve, reject) {
            var model = new ScriptTriggerModel();
            resolve(model);
        });
    };
    DataService.prototype.newStateModel = function () {
        return new Promise(function (resolve, reject) {
            var model = new ScriptStateModel();
            resolve(model);
        });
    };
    DataService.prototype.getNewScriptModel = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var model = new EventActionScriptModel("UNSET SCRIPT");
            _this.setDefaultEventsAndStates(model).then(function (s) {
                resolve(model);
            });
        });
    };
    DataService.prototype.newScreenConfigModel = function () {
        return new Promise(function (resolve, reject) {
            var model = new ScreenConfigModel();
            resolve(model);
        });
    };
    DataService.prototype.setDefaultEventsAndStates = function (model) {
        return new Promise(function (resolve, reject) {
            var startInstance = new ScriptStateModel();
            startInstance.name = "start_instance";
            var endInstance = new ScriptStateModel();
            endInstance.name = "end_instance";
            var timerComplete = new ScriptStateModel();
            timerComplete.name = "timer_complete";
            model.states.push(startInstance, endInstance, timerComplete);
            var eStartInstance = new ScriptEventModel();
            eStartInstance.name = "start_instnace";
            model.events.push(eStartInstance);
            var eEndInstance = new ScriptEventModel();
            eEndInstance.name = "end_instance";
            model.events.push(eEndInstance);
            resolve(model);
        });
    };
    DataService.prototype.newScriptModel = function () {
        var timeModel = {
            hours: "0",
            minutes: "60",
            seconds: "0"
        };
        var stateModel = {
            name: "",
            active: false
        };
        var eventModel = {
            id: "",
            name: "",
            device_id: "",
            event: "",
            eventType: "",
            data: "",
            description: "",
            dependencies: [],
            actions: [],
            message: "",
            states: []
        };
        var actionModel = {
            id: "",
            name: "",
            device_id: "",
            event: "",
            eventType: "",
            action: "",
            actionType: "",
            wait: 0,
            data: "",
            description: "",
            dependencies: [],
            repeatable: true,
            actions: [],
            message: "",
            states: []
        };
        var hintModel = {
            name: "",
            hint: ""
        };
        var triggerModel = {
            name: "",
            trigger: "",
            audio: "",
            video: "",
            hint: "",
            can_toggle: ""
        };
        var s = {
            name: "",
            id: "",
            branch_address: "",
            masterId: "",
            time: new ScriptTimeModel(),
            states: [new ScriptStateModel()],
            events: [new ScriptEventModel()],
            actions: [new ScriptActionModel()],
            hints: [new ScriptHintModel()],
            triggers: [new ScriptTriggerModel()]
        };
        // return new EventActionScriptModel("UNSET SCRIPT");
        return s;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _sockets_service__WEBPACK_IMPORTED_MODULE_2__["SocketsService"]])
    ], DataService);
    return DataService;
}());

var EventActionScriptModel = /** @class */ (function () {
    function EventActionScriptModel(name) {
        this.time = new ScriptTimeModel();
        this.name = name;
        this.states = new Array();
        this.events = new Array();
        this.actions = new Array();
        this.hints = new Array();
        this.triggers = new Array();
        this.screenConfigs = new Array();
    }
    return EventActionScriptModel;
}());

var ScriptEventModel = /** @class */ (function () {
    function ScriptEventModel() {
        this.states = [];
        this.id = "";
        this.name = "";
        this.device_id = "";
        this.event = "";
        this.eventType = "";
        this.data = "";
        this.description = "";
        this.dependencies = [];
        this.actions = [];
        this.message = "";
        this.states = [];
    }
    return ScriptEventModel;
}());

var ScriptActionModel = /** @class */ (function () {
    function ScriptActionModel() {
        this.id = "";
        this.name = "";
        this.device_id = "";
        this.action = "";
        this.actionType = "";
        this.data = "";
        this.description = "";
        this.dependencies = [];
        this.actions = [];
        this.message = "";
        this.states = [];
        this.wait = 0;
        this.repeatable = true;
    }
    return ScriptActionModel;
}());

var ScriptHintModel = /** @class */ (function () {
    function ScriptHintModel() {
    }
    return ScriptHintModel;
}());

var ScreenConfigModel = /** @class */ (function () {
    function ScreenConfigModel() {
        this.name = "";
        this.backgroundType = "";
        this.backgroundPath = "";
        this.audio = "";
        this.font = "'Times New Roman', Times, serif";
        this.font_colour = "white";
        this.showTimer = true;
        this.showHints = true;
    }
    return ScreenConfigModel;
}());

var ScriptTriggerModel = /** @class */ (function () {
    function ScriptTriggerModel() {
        this.name = "";
        this.trigger = "";
        this.audio = "";
        this.video = "";
        this.hint = "";
        this.can_toggle = "";
        this.screenName = "";
        this.httpRequestType = "NONE";
        this.httpRequestUrl = "";
        this.httpRequestBody = "";
    }
    return ScriptTriggerModel;
}());

var ScriptStateModel = /** @class */ (function () {
    function ScriptStateModel() {
        this.name = "";
        this.active = false;
    }
    return ScriptStateModel;
}());

var ScriptTimeModel = /** @class */ (function () {
    function ScriptTimeModel() {
        this.hours = "0";
        this.minutes = "60";
        this.seconds = "0";
    }
    return ScriptTimeModel;
}());

var BranchModel = /** @class */ (function () {
    function BranchModel(name, rootId, ipAddress) {
        this.name = name;
        this.rootserver_id = rootId;
        this.ip_address = ipAddress;
    }
    return BranchModel;
}());

var NodeBridgeModel = /** @class */ (function () {
    function NodeBridgeModel(name, ip, branchId) {
        this.name = name;
        this.ip_address = ip;
        this.branch_id = branchId;
    }
    return NodeBridgeModel;
}());

var NodeModel = /** @class */ (function () {
    function NodeModel(name, type, lastAlive, bridgeId) {
        this.name = name;
        this.type = type;
        this.last_alive = lastAlive;
        this.bridge_id = bridgeId;
    }
    return NodeModel;
}());



/***/ }),

/***/ "./src/app/event-action-script/event-action-script.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/event-action-script/event-action-script.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWFjdGlvbi1zY3JpcHQvZXZlbnQtYWN0aW9uLXNjcmlwdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/event-action-script/event-action-script.component.html":
/*!************************************************************************!*\
  !*** ./src/app/event-action-script/event-action-script.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-action-script works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/event-action-script/event-action-script.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/event-action-script/event-action-script.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventActionScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventActionScriptComponent", function() { return EventActionScriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventActionScriptComponent = /** @class */ (function () {
    function EventActionScriptComponent() {
    }
    EventActionScriptComponent.prototype.ngOnInit = function () {
    };
    EventActionScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-action-script',
            template: __webpack_require__(/*! ./event-action-script.component.html */ "./src/app/event-action-script/event-action-script.component.html"),
            styles: [__webpack_require__(/*! ./event-action-script.component.css */ "./src/app/event-action-script/event-action-script.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventActionScriptComponent);
    return EventActionScriptComponent;
}());



/***/ }),

/***/ "./src/app/init.service.ts":
/*!*********************************!*\
  !*** ./src/app/init.service.ts ***!
  \*********************************/
/*! exports provided: InitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitService", function() { return InitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sockets.service */ "./src/app/sockets.service.ts");



var InitService = /** @class */ (function () {
    function InitService(socket) {
        this.socket = socket;
    }
    InitService.prototype.init = function () {
        this.startSocket();
        // this.socket.init();
        console.log("Init service");
    };
    InitService.prototype.startSocket = function () {
        this.socketSubscription = this.socket
            .getMessages()
            .subscribe(function (message) {
            // console.log("SOCKET: ", message);
        });
    };
    InitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sockets_service__WEBPACK_IMPORTED_MODULE_2__["SocketsService"]])
    ], InitService);
    return InitService;
}());



/***/ }),

/***/ "./src/app/log/log.component.css":
/*!***************************************!*\
  !*** ./src/app/log/log.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy9sb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/log/log.component.html":
/*!****************************************!*\
  !*** ./src/app/log/log.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataLoaded\">\r\n<table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Room Name</th>\r\n        <th scope=\"col\">Booking Time</th>\r\n        <th scope=\"col\">Booking Name</th>\r\n        <th scope=\"col\">Participants</th>\r\n        <th scope=\"col\">Price</th>\r\n        <th scope=\"col\">Paid</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let b of bookings.data\">\r\n        <td>{{b?.productName}}</td>\r\n        <td>{{b?.startTime}}</td>\r\n        <td>{{b?.title}}</td>\r\n        <td>{{b?.participants.numbers[0].number}}</td>\r\n        <td>${{b?.price.totalGross.amount}}</td>\r\n        <td>${{b?.price.totalPaid.amount}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookings.service */ "./src/app/bookings.service.ts");



var LogComponent = /** @class */ (function () {
    function LogComponent(bookingService) {
        this.bookingService = bookingService;
    }
    LogComponent.prototype.ngOnInit = function () {
        this.getBookings();
    };
    LogComponent.prototype.getBookings = function () {
        var _this = this;
        this.bookingService.getUpcomingBookings().subscribe(function (data) {
            // this.bookings = data;
            _this.bookings = data;
            _this.dataLoaded = true;
            console.log(data);
            console.log(_this.bookings);
        });
    };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-log",
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/log/log.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"]])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" ngbButton (click)=\"navigate('overview')\">\r\n    Overview\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" ngbButton (click)=\"navigate('script-editor')\">\r\n    Script Editor\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" ngbButton (click)=\"navigate('settings')\">\r\n    Settings\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg btn-block\" ngbButton (click)=\"navigate('log')\">\r\n    Log\r\n  </button>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, ngbModule) {
        this.router = router;
        this.ngbModule = ngbModule;
        this.model = 1;
    }
    MenuComponent.prototype.ngOnInit = function () { };
    // Navigate by page name
    MenuComponent.prototype.navigate = function (page) {
        console.log("navigate", page);
        this.router.navigateByUrl("/" + page);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/overview-event-action-list/overview-event-action-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/overview-event-action-list/overview-event-action-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3LWV2ZW50LWFjdGlvbi1saXN0L292ZXJ2aWV3LWV2ZW50LWFjdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/overview-event-action-list/overview-event-action-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/overview-event-action-list/overview-event-action-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <template *ngFor=\"let event of script.events\">\n        <ngb-panel title=\"{{event.name}} : {{event.status}}\">\n          <ng-template ngbPanelContent>\n            <button (click)=\"sendForcedEvent(event.name)\">Force event {{event.name}}</button>\n            <hr>\n            <button *ngFor=\"let action of event.actions\" (click)=\"sendForcedAction(action)\">{{action}}</button>\n          </ng-template>\n        </ngb-panel>\n      </template>\n  </ngb-accordion>\n"

/***/ }),

/***/ "./src/app/overview-event-action-list/overview-event-action-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/overview-event-action-list/overview-event-action-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: OverviewEventActionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewEventActionListComponent", function() { return OverviewEventActionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../init.service */ "./src/app/init.service.ts");





var OverviewEventActionListComponent = /** @class */ (function () {
    function OverviewEventActionListComponent(server, socket, init) {
        this.server = server;
        this.socket = socket;
        this.init = init;
    }
    OverviewEventActionListComponent.prototype.ngOnInit = function () {
        this.loadScript();
    };
    OverviewEventActionListComponent.prototype.loadScript = function () {
        this.script = this.server.selectedScript;
    };
    OverviewEventActionListComponent.prototype.sendForcedAction = function (actionName) {
        console.log(actionName);
        this.server
            .sendForcedAction(this.script.name, actionName)
            .subscribe(function (action) {
            console.log(action);
        });
        this.socket.sendForcedAction(this.script.name, actionName);
    };
    OverviewEventActionListComponent.prototype.sendForcedEvent = function (eventName) {
        console.log(eventName);
        this.server
            .sendForcedEvent(this.script.name, eventName, this.script.time)
            .subscribe(function (event) {
            console.log(event);
        });
        this.socket.sendForcedEvent(this.script.name, eventName);
    };
    OverviewEventActionListComponent.prototype.socketSubscribe = function () {
        var _this = this;
        this.socketSubscription = this.socket
            .getMessages()
            .subscribe(function (message) {
            if (message.script_name === _this.script.name) {
                if (message.event !== undefined || message.event !== "") {
                    _this.eventStatus(message.event);
                }
            }
        });
    };
    OverviewEventActionListComponent.prototype.eventStatus = function (event) {
        this.script.events.forEach(function (evt) {
            if (evt.name === event.name) {
                evt.status = event.status;
            }
        });
    };
    OverviewEventActionListComponent.prototype.actionStatus = function (action) {
        this.script.actions.forEach(function (act) {
            if (act.name === action.name) {
                act.status = action.status;
            }
        });
    };
    OverviewEventActionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-overview-event-action-list",
            template: __webpack_require__(/*! ./overview-event-action-list.component.html */ "./src/app/overview-event-action-list/overview-event-action-list.component.html"),
            styles: [__webpack_require__(/*! ./overview-event-action-list.component.css */ "./src/app/overview-event-action-list/overview-event-action-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"],
            _init_service__WEBPACK_IMPORTED_MODULE_4__["InitService"]])
    ], OverviewEventActionListComponent);
    return OverviewEventActionListComponent;
}());



/***/ }),

/***/ "./src/app/overview-instance-list/overview-instance-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/overview-instance-list/overview-instance-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrowDiv {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.prevArrow {\r\n  left: 5%;\r\n}\r\n\r\n\r\n.nextArrow {\r\n  right: 5%;\r\n  top: 0%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXctaW5zdGFuY2UtbGlzdC9vdmVydmlldy1pbnN0YW5jZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2I7OztBQUdEO0VBQ0UsU0FBUztDQUNWOzs7QUFFRDtFQUNFLFVBQVU7RUFDVixRQUFRO0NBQ1QiLCJmaWxlIjoic3JjL2FwcC9vdmVydmlldy1pbnN0YW5jZS1saXN0L292ZXJ2aWV3LWluc3RhbmNlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnJvd0RpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucHJldkFycm93IHtcclxuICBsZWZ0OiA1JTtcclxufVxyXG5cclxuLm5leHRBcnJvdyB7XHJcbiAgcmlnaHQ6IDUlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/overview-instance-list/overview-instance-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/overview-instance-list/overview-instance-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataAvailable\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div *ngIf=\"showCards; then Shown; else NotShown\">\r\n      </div>\r\n\r\n      <!-- TOP INSTANCE BUTTONS -->\r\n      <ng-template #Shown>\r\n        <div class=\"card-group\">\r\n          <div class=\"card\" *ngFor=\"let script of scripts; index as i;\" (click)=\"loadScript(script.name);\">\r\n            <button class=\"btn btn-success btn-block\" (click)=\"loadScript(script.name);\">\r\n              <!-- <button class=\"btn btn-info btn-sm\" (click)=\"slickSetCardState(script.name, true)\">+</button> -->\r\n              {{ script.name }}:: {{script.timeUpdate.hours}} : {{script.timeUpdate.minutes}} :\r\n              {{script.timeUpdate.seconds}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n\r\n      <ng-template #NotShown>\r\n        <div class=\"card-group\">\r\n          <div class=\"card\" *ngFor=\"let script of scripts; index as i;\" (click)=\"showInstances(true)\">\r\n            <button class=\"btn btn-success btn-block\" (click)=\"loadScript(script.name)\">\r\n              {{ script.name }} :: {{script.timeUpdate.hours}} : {{script.timeUpdate.minutes}} :\r\n              {{script.timeUpdate.seconds}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"showCards\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1\">\r\n      <button class=\"prevArrow btn btn-warning\" (click)=\"slickModal.slickPrev()\">&lt;</button>\r\n\r\n    </div>\r\n    <div class=\"col-md-10\"></div>\r\n    <div class=\"col-md-1\">\r\n      <button class=\"nextArrow btn btn-warning\" (click)=\"slickModal.slickNext()\">&gt;</button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- BELOW is the new layout for the things.... -->\r\n  <ngx-slick-carousel id=\"slick\" class=\"carousel\" [config]=\"slideConfig\" #slickModal=\"slick-carousel\">\r\n    <ng-container *ngFor=\"let script of scripts; index as i;\">\r\n      <!-- <template *ngIf=\"script.ui_show; then setCardDisplayStyle(true)\"></template> -->\r\n      <div ngxSlickItem class=\"slide\" #showCard>\r\n\r\n        <div class=\"card\" style=\"width: 100%;\">\r\n          <h4 class=\"card-header\">\r\n            <!-- <button (click)=\"slickSetCardState(script.name, false, i)\" class=\"btn btn-danger btn-sm\">-</button> -->\r\n            {{script?.name}}</h4>\r\n          <div class=\"card-body\">\r\n\r\n\r\n            <!-- TIME DISPLAY -->\r\n            <h3>{{script.timeUpdate?.hours}}:{{script.timeUpdate?.minutes}}:{{script.timeUpdate?.seconds}}</h3>\r\n\r\n            <!-- HINT DISPLAY -->\r\n            <h6 id=\"{{script.name}}_hintDisplay\">{{script.displayedHint}}</h6>\r\n            <hr />\r\n            <!-- TIME UPDATE -->\r\n            <div class=\"input-group input-group-sm\">\r\n              <input type=\"text\" aria-label=\"hours\" placeholder=\"Hours\" id=\"{{script.name}}_inputHours\" class=\"form-control\">\r\n              <input type=\"text\" aria-label=\"Minutes\" placeholder=\"Minutes\" id=\"{{script.name}}_inputMinutes\" class=\"form-control\">\r\n              <input type=\"text\" aria-label=\"Seconds\" placeholder=\"Seconds\" id=\"{{script.name}}_inputSeconds\" class=\"form-control\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-info\" (click)=\"updateTime(script.name)\" type=\"button\">Update</button>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- PAUSE / RESUME TIME -->\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Start/End\">\r\n              <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"pauseGameTimer(script.name)\">Pause\r\n                Time</button>\r\n              <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"resumeGameTimer(script.name)\">Resume\r\n                Time</button>\r\n            </div>\r\n\r\n            <hr />\r\n\r\n            <!-- HINT INPUT-->\r\n            <div class=\"input-group input-group-sm\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Hint text\" aria-label=\"Type the hint to display\" id=\"{{script.name}}_hintInput\">\r\n              <div class=\"input-group-append\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\r\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <span class=\"sr-only\">Toggle Dropdown</span>\r\n                </button>\r\n                <div class=\"dropdown-menu\">\r\n                  <button class=\"dropdown-item\" *ngFor=\"let hint of script.hints\" (click)=\"insertHint(script.name, hint.hint)\">{{hint.name}}</button>\r\n                </div>\r\n                <button class=\"btn btn-outline-info\" (click)=\"sendHint(script.name)\" type=\"button\">Send</button>\r\n                <button class=\"btn btn-outline-danger\" (click)=\"clearHint(script.name)\" type=\"button\">Clear</button>\r\n              </div>\r\n            </div>\r\n\r\n            <hr />\r\n\r\n            <!-- START / END INSTANCE -->\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Start/End\">\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"startNewInstance(script.name)\">Start\r\n                Instance</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"endInstance(script.name)\">End Instance</button>\r\n            </div>\r\n\r\n            <hr />\r\n\r\n            <!-- EVENTS -->\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let event of script.events\">\r\n                    <div class=\"btn-group btn-group-sm btn-group-block\" style=\"width:100%\" role=\"group\" aria-label=\"Start/End\">\r\n                      <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"sendEvent(script.name, event.name, script.timeUpdate)\">{{event?.name}}\r\n                        {{event?.status}} -\r\n                        {{event.completed_time?.hours}}\r\n                        : {{event.completed_time?.minutes}}\r\n                        : {{event.completed_time?.seconds}}\r\n                      </button>\r\n                      <div class=\"button-group-append\">\r\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"showActionsModal(script.name, event)\">Actions</button>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <hr />\r\n            <div class=\"btn-group btn-group-sm btn-group-block\" style=\"width:100%\" role=\"group\" aria-label=\"Triggers\">\r\n              <button type=\"button\" class=\"btn btn-outline-success btn-sm\" (click)=\"showTriggersModal(script.name, script.triggers)\">Triggers</button>\r\n              <button type=\"button\" class=\"btn btn-outline-success btn-sm\" (click)=\"showAudioModal(script.name, script.triggers)\">Audio</button>\r\n              <button type=\"button\" class=\"btn btn-outline-success btn-sm\" (click)=\"showVideoModal(script.name, script.triggers)\">Video</button>\r\n            </div>\r\n\r\n            <hr />\r\n\r\n            <!-- STATES -->\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item\" *ngFor=\"let state of script.states\">{{state.name}} : {{state.active}}</li>\r\n            </ul>\r\n\r\n\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <small class=\"text-muted\">{{script.name}}</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n    <ng-template #hiddenCard>\r\n    </ng-template>\r\n\r\n  </ngx-slick-carousel>\r\n  <!-- </div> -->\r\n\r\n\r\n  <ng-template #actionModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">{{tempEventToShow.name}} Actions</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let action of tempEventToShow.actions\">\r\n          <button class=\"btn btn-info\" (click)=\"sendAction(tempScriptName, action)\">\r\n            Fire Action\r\n          </button>\r\n          {{action}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n  <ng-template #triggerModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">{{tempScriptName}} Triggers</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <!-- TRIGGERS -->\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item\" *ngFor=\"let trigger of tempTriggersToShow\">\r\n          <button class=\"btn btn-info\" (click)=\"sendTrigger(tempScriptName, trigger)\">Fire</button>\r\n          {{trigger.name}}\r\n        </li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n\r\n  <ng-template #audioModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">{{tempScriptName}} Audio</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <!-- AUDIO -->\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item\" *ngFor=\"let trigger of tempTriggersToShow\">\r\n          <button class=\"btn btn-info\" (click)=\"sendAudio(tempScriptName, trigger.audio, trigger.screenName)\">Play</button>{{trigger.audio}}\r\n        </li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n  <ng-template #videoModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">{{tempScriptName}} Video</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <!-- VIDEO -->\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item\" *ngFor=\"let trigger of tempTriggersToShow\">\r\n          <button class=\"btn btn-info\" (click)=\"triggerPlayVideo(tempScriptName, trigger.video, trigger.screenName)\">Play</button>\r\n          {{trigger.video}}\r\n        </li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/overview-instance-list/overview-instance-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/overview-instance-list/overview-instance-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: OverviewInstanceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewInstanceListComponent", function() { return OverviewInstanceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../init.service */ "./src/app/init.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);









var OverviewInstanceListComponent = /** @class */ (function () {
    function OverviewInstanceListComponent(dataService, server, socket, init, router, route, modalService) {
        this.dataService = dataService;
        this.server = server;
        this.socket = socket;
        this.init = init;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.isDataAvailable = false;
        this.showCards = false;
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.shownCards = new Array();
    }
    OverviewInstanceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllScripts().then(function (scripts) {
            _this.isDataAvailable = true;
            _this.scripts = scripts;
            for (var _i = 0, _a = _this.scripts; _i < _a.length; _i++) {
                var s = _a[_i];
                // NOTE: add specific values to check here
                s.timeUpdate = { hours: 0, minutes: 0, seconds: 0 };
                s.ended = false;
            }
            _this.socketSubscribe();
        });
        this.routeSubscribe();
    };
    OverviewInstanceListComponent.prototype.routeSubscribe = function () {
        var _this = this;
        this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                if (event.url === "/overview") {
                    _this.showInstances(true);
                }
                else {
                    _this.showInstances(false);
                }
            }
        });
    };
    OverviewInstanceListComponent.prototype.showInstances = function (canShow) {
        this.showCards = canShow;
    };
    OverviewInstanceListComponent.prototype.toggleInstances = function () {
        this.showCards = !this.showCards;
    };
    OverviewInstanceListComponent.prototype.loadAllScripts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.server.loadScripts().subscribe(function (scripts) {
                console.log(scripts, "loaded");
                resolve(scripts);
            });
        });
    };
    // to get the time and stuff
    OverviewInstanceListComponent.prototype.socketSubscribe = function () {
        var _this = this;
        this.socketSubscription = this.socket
            .getMessages()
            .subscribe(function (message) {
            _this.parseSocketMessage(message);
            // foreach instance check if the name matches, then update the time
        });
    };
    OverviewInstanceListComponent.prototype.parseSocketMessage = function (msg) {
        if (!msg.hasOwnProperty("instance_update")) {
            return;
        }
        for (var _i = 0, _a = this.scripts; _i < _a.length; _i++) {
            var script = _a[_i];
            if (script.name === msg.instance_update.script.name) {
                script.events = msg.instance_update.script.events;
                script.actions = msg.instance_update.script.actions;
                script.timeUpdate = msg.instance_update.time;
                script.ended = msg.instance_update.ended;
                script.states = msg.instance_update.states;
            }
        }
        this.server.updateLocalScripts(msg.instance_update);
    };
    OverviewInstanceListComponent.prototype.loadScript = function (name) {
        var _this = this;
        this.server.loadScript(name).subscribe(function (script) {
            _this.server.setSelectedScript(script);
            // this.dataService.setSelectedScriptInstance(script);
            _this.router.navigateByUrl("/overview");
            console.log(script);
        });
    };
    OverviewInstanceListComponent.prototype.setDisplayedHint = function (scriptName, hintText) {
        for (var i = 0; i < this.scripts.length; i++) {
            var script = this.scripts[i];
            if (script.name == scriptName) {
                script.displayedHint = hintText;
            }
        }
    };
    // ========================================================
    // ============= HINT CONTROLS ============================
    // ========================================================
    OverviewInstanceListComponent.prototype.sendHint = function (scriptName) {
        var _this = this;
        var hintText = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + scriptName + "_hintInput").val();
        var msg = {
            scriptName: scriptName,
            hintText: hintText
        };
        this.server.hintSendCustomHint(msg).subscribe(function (result) {
            console.log("Sending hint: ", result);
            // $(`#${scriptName}_hintDisplay`).html(hintText);
            _this.setDisplayedHint(scriptName, hintText);
        });
        //Send here
    };
    OverviewInstanceListComponent.prototype.insertHint = function (scriptName, hintText) {
        jquery__WEBPACK_IMPORTED_MODULE_8__("#" + scriptName + "_hintInput").val(hintText);
    };
    OverviewInstanceListComponent.prototype.clearHint = function (scriptName) {
        jquery__WEBPACK_IMPORTED_MODULE_8__("#" + scriptName + "_hintInput").val("");
        // $(`#${scriptName}_hintDisplay`).html("");
        this.setDisplayedHint(scriptName, "");
        var msg = {
            scriptName: scriptName,
            hintText: "--clear--"
        };
        this.server.clearHint(msg).subscribe(function (result) {
            console.log("Clearing hint: ", result);
        });
    };
    // ========================================================
    // ============= EVENT CONTROLS ===========================
    // ========================================================
    OverviewInstanceListComponent.prototype.sendEvent = function (scriptName, eventName, timeUpdate) {
        console.log(eventName);
        this.server
            .sendForcedEvent(scriptName, eventName, timeUpdate)
            .subscribe(function (event) {
            console.log(event);
        });
        this.socket.sendForcedEvent(scriptName, eventName);
    };
    // ========================================================
    // ============= ACTION CONTROLS ==========================
    // ========================================================
    OverviewInstanceListComponent.prototype.sendAction = function (scriptName, actionName) {
        console.log(actionName);
        this.server.sendForcedAction(scriptName, actionName).subscribe(function (action) {
            console.log(action);
        });
        this.socket.sendForcedAction(scriptName, actionName);
    };
    // ========================================================
    // ============= TIME CONTROLS ============================
    // ========================================================
    OverviewInstanceListComponent.prototype.updateTime = function (scriptName) {
        var hrs, mins, sec;
        var hours = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + scriptName + "_inputHours").val();
        var minutes = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + scriptName + "_inputMinutes").val();
        var seconds = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + scriptName + "_inputSeconds").val();
        if (hours === "") {
            hrs = 0;
        }
        else {
            hrs = parseInt(hours, 10);
        }
        if (minutes === "") {
            mins = 0;
        }
        else {
            mins = parseInt(minutes, 10);
        }
        if (seconds === "") {
            sec = 0;
        }
        else {
            sec = parseInt(seconds, 10);
        }
        this.server.updateCustomTime(scriptName, hrs, mins, sec).subscribe(function (time) {
            console.log("======= Updated time =======", time);
        });
    };
    OverviewInstanceListComponent.prototype.pauseGameTimer = function (scriptName) {
        this.server.pauseGameTimer(scriptName).subscribe(function (result) {
            console.log(result);
        });
    };
    OverviewInstanceListComponent.prototype.resumeGameTimer = function (scriptName) {
        this.server.resumeGameTimer(scriptName).subscribe(function (result) {
            console.log(result);
        });
    };
    // ========================================================
    // ============= START / END ==============================
    // ========================================================
    OverviewInstanceListComponent.prototype.startNewInstance = function (scriptName) {
        var _this = this;
        this.dataService.overview_getNewScript(scriptName).then(function (script) {
            var s;
            s = script;
            var t = s.time;
            _this.server
                .startNewGame(script, parseInt(t.hours, 10), parseInt(t.minutes, 10), parseInt(t.seconds, 10))
                .subscribe(function (status) {
                console.log(status);
                _this.sendEvent(scriptName, "start_instance", 0);
            });
        });
    };
    OverviewInstanceListComponent.prototype.endInstance = function (scriptName) {
        this.server.endGame(scriptName).subscribe(function (result) {
            console.log(result);
        });
    };
    // ========================================================
    // ============= TRIGGERS =================================
    // ========================================================
    OverviewInstanceListComponent.prototype.sendTrigger = function (scriptName, trigger) {
        var msg = {
            scriptName: scriptName,
            trigger: trigger,
            screenName: trigger.screenName
        };
        this.server.triggerForceTrigger(msg).subscribe(function (result) {
            console.log("Forcing trigger: ", msg, result);
        });
    };
    OverviewInstanceListComponent.prototype.sendAudio = function (scriptName, audioFile, screenName) {
        var msg = {
            scriptName: scriptName,
            audioFile: audioFile,
            screenName: screenName
        };
        this.server.triggerPlayAudio(msg).subscribe(function (result) {
            console.log("Playing Audio: ", result);
        });
    };
    OverviewInstanceListComponent.prototype.triggerPlayVideo = function (scriptName, videoFile, screenName) {
        var msg = {
            scriptName: scriptName,
            videoFile: videoFile,
            screenName: screenName
        };
        this.server.triggerPlayVideo(msg).subscribe(function (result) {
            console.log("Playing Video: ", result);
        });
    };
    // ========================================================
    // ============= SLICK SLIDER =============================
    // ========================================================
    OverviewInstanceListComponent.prototype.slickGoTo = function (index) {
        this.slickModal.slickGoTo(index);
    };
    OverviewInstanceListComponent.prototype.slickSetCardState = function (scriptName, state, index) {
        if (index === void 0) { index = 0; }
        for (var i = 0; i < this.scripts.length; i++) {
            if (this.scripts[i].name === scriptName) {
                this.scripts[i]["ui_show"] = state;
                if (state) {
                    this.shownCards.push(this.scripts[i]);
                    console.log("pushing", this.scripts[i].name);
                    console.log(this.shownCards);
                }
                else {
                    for (var j = 0; j < this.shownCards.length; j++) {
                        if (this.shownCards[j].name === scriptName) {
                            console.log(this.shownCards);
                            this.shownCards.splice(j, 1);
                        }
                    }
                    this.refreshPage();
                }
            }
        }
    };
    OverviewInstanceListComponent.prototype.refreshPage = function () {
        var _this = this;
        this.router
            .navigateByUrl("/settings", { skipLocationChange: true })
            .then(function () {
            _this.router.navigate(["/overview"]);
        })
            .then(function () { });
    };
    OverviewInstanceListComponent.prototype.beforeChange = function (e) {
        console.log(e);
    };
    OverviewInstanceListComponent.prototype.toggleSlick = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.slickModal.unslick();
        }).then(function () {
            // this.slickModal.initSlick(this.slideConfig);
        });
    };
    // ========================================================
    // ============= MODAL CONTROLLERS \=======================
    // ========================================================
    OverviewInstanceListComponent.prototype.showActionsModal = function (scriptName, event) {
        this.modalService.open(this.actionModal, { size: "lg" });
        this.tempScriptName = scriptName;
        this.tempEventToShow = event;
    };
    OverviewInstanceListComponent.prototype.showTriggersModal = function (scriptName, triggers) {
        this.modalService.open(this.triggerModal, { size: "lg" });
        this.tempScriptName = scriptName;
        this.tempTriggersToShow = triggers;
    };
    OverviewInstanceListComponent.prototype.showAudioModal = function (scriptName, triggers) {
        this.modalService.open(this.audioModal, { size: "lg" });
        this.tempScriptName = scriptName;
        this.tempTriggersToShow = triggers;
    };
    OverviewInstanceListComponent.prototype.showVideoModal = function (scriptName, triggers) {
        this.modalService.open(this.videoModal, { size: "lg" });
        this.tempScriptName = scriptName;
        this.tempTriggersToShow = triggers;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slickModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewInstanceListComponent.prototype, "slickModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewInstanceListComponent.prototype, "actionModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewInstanceListComponent.prototype, "eventModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("triggerModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewInstanceListComponent.prototype, "triggerModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("audioModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewInstanceListComponent.prototype, "audioModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewInstanceListComponent.prototype, "videoModal", void 0);
    OverviewInstanceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-overview-instance-list",
            template: __webpack_require__(/*! ./overview-instance-list.component.html */ "./src/app/overview-instance-list/overview-instance-list.component.html"),
            styles: [__webpack_require__(/*! ./overview-instance-list.component.css */ "./src/app/overview-instance-list/overview-instance-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"],
            _init_service__WEBPACK_IMPORTED_MODULE_6__["InitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], OverviewInstanceListComponent);
    return OverviewInstanceListComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.css":
/*!*************************************************!*\
  !*** ./src/app/overview/overview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"isDataAvailable\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h2>{{ script?.name }}</h2>\r\n        <hr />\r\n        <div *ngIf=\"script?.timeUpdate\">\r\n          <h2>{{script.timeUpdate.hours}} : {{script.timeUpdate.minutes}} : {{script.timeUpdate.seconds}}</h2>\r\n        </div>\r\n        <br />\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let state of script.states\">{{state.name}} : {{state.active}}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"timer_duration\"> Timer duration </label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"hours\" id=\"timer_duration_hours\" value=\"1\" placeholder=\"Hours\" />\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"minutes\" id=\"timer_duration_minutes\" placeholder=\"minutes\" />\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"seconds\" id=\"timer_duration_seconds\" placeholder=\"seconds\" />\r\n        </div>\r\n        <hr />\r\n        <button id=\"update_game_timer\" type=\"button\" class=\"btn btn-success-outline\" (click)=\"updateCustomTimer()\">\r\n          Update Game timer\r\n        </button>\r\n        <button id=\"start_game_timer\" type=\"button\" class=\"btn btn-success-outline\" (click)=\"resumeGameTimer()\">\r\n          Start Game timer\r\n        </button>\r\n        <button id=\"stop_game_timer\" type=\"button\" class=\"btn btn-danger-outline\" (click)=\"pauseGameTimer()\">\r\n          Pause Game Timer\r\n        </button>\r\n        <hr />\r\n        <button id=\"new_game\" type=\"button\" class=\"btn btn-success\" (click)=\"startNewGame()\">\r\n          Start New Game\r\n        </button>\r\n        <button id=\"end_game\" type=\"button\" class=\"btn btn-danger\" (click)=\"endGame()\">\r\n          End Game\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n\r\n        <div class=\"card text-white bg-dark mb-3\">\r\n          <div class=\"card-header\">Hints</div>\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-dark\" *ngFor=\"let hint of script?.hints\">\r\n                <button class=\"btn btn-primary\" (click)=\"hintSendHint(hint)\">Copy</button>\r\n                {{hint?.name}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card text-white bg-dark mb-3\">\r\n          <div class=\"card-header\">Triggers</div>\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-dark\" *ngFor=\"let trigger of script?.triggers\">\r\n                <button class=\"btn btn-primary\" (click)=\"triggerForceTrigger(trigger)\">Fire</button>\r\n                {{trigger.name}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <label for=\"hintInput\"> Hint </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintInput\" [(ngModel)]=\"hintText\" name=\"hintInput\" />\r\n        <button class=\"btn btn-primary\" (click)=\"hintSendCustomHint()\">Send Hint</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"clearHint()\">\r\n          Clear message\r\n        </button>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card text-white bg-dark mb-3\">\r\n          <div class=\"card-header\">Audio Controls</div>\r\n          <div class=\"card-body\">\r\n\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-dark\" *ngFor=\"let trigger of script?.triggers\">\r\n                <button class=\"btn btn-primary\" (click)=\"triggerPlayAudio(trigger.audio)\">{{trigger.audio}}</button>\r\n              </li>\r\n            </ul>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let event of script.events\">\r\n            <button class=\"btn btn-primary\" (click)=\"sendForcedEvent(event.name)\">Fire Event</button>\r\n            {{event?.name}} : {{event?.status}} - {{event.completed_time?.hours}} : {{event.completed_time?.minutes}} :\r\n            {{event.completed_time?.seconds}}\r\n            <ngb-accordion #acc=\"ngbAccordion\">\r\n              <ngb-panel title=\"Show Actions\">\r\n                <ng-template ngbPanelContent>\r\n                  <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let action of event.actions\">\r\n                      <button class=\"btn btn-primary\" (click)=\"sendForcedAction(action)\">\r\n                        Fire Action\r\n                      </button>\r\n                      {{action}}\r\n                    </li>\r\n                  </ul>\r\n                </ng-template>\r\n              </ngb-panel>\r\n            </ngb-accordion>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../init.service */ "./src/app/init.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(server, socket, init, router, route, dataService) {
        this.server = server;
        this.socket = socket;
        this.init = init;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.isDataAvailable = false;
        // this.loadScriptSubscribe();
    }
    OverviewComponent.prototype.ngOnInit = function () {
        // this.loadScriptSubscribe();
        // this.socketSubscribe();
    };
    OverviewComponent.prototype.loadScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.server.selectedScript);
        });
    };
    OverviewComponent.prototype.loadScriptSubscribe = function () {
        var _this = this;
        this.scriptSubscription = this.server.observableScript.subscribe(function (script) {
            _this.script = script;
            _this.isDataAvailable = true;
        });
    };
    OverviewComponent.prototype.startNewGame = function () {
        var _this = this;
        this.script = null;
        this.loadScript().then(function (loadedScript) {
            console.log(loadedScript);
            _this.script = loadedScript;
            var t = _this.script.time;
            _this.server
                .startNewGame(_this.script, parseInt(t.hours, 10), parseInt(t.minutes, 10), parseInt(t.seconds, 10))
                .subscribe(function (status) {
                console.log(status);
                _this.sendForcedEvent("start_instance");
            });
        });
    };
    OverviewComponent.prototype.endGame = function () {
        this.server.endGame(this.script.name).subscribe(function (result) {
            console.log(result);
            // reset the game params here
        });
    };
    // ======================================================================= //
    // ========================= SOCKET MESSAGES  ============================ //
    // ======================================================================= //
    OverviewComponent.prototype.socketSubscribe = function () {
        var _this = this;
        this.socketSubscription = this.socket
            .getMessages()
            .subscribe(function (message) {
            if (message.hasOwnProperty("instance_update")) {
                if (message.instance_update.name === _this.script.name) {
                    _this.parseSocketMessage(message);
                }
            }
            if (message.hasOwnProperty("event")) {
                _this.eventStatus(message.event);
            }
        });
    };
    OverviewComponent.prototype.parseSocketMessage = function (msg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!msg.hasOwnProperty("instance_update")) {
                return;
            }
            _this.script.events = msg.instance_update.script.events;
            _this.script.actions = msg.instance_update.script.actions;
            _this.script.timeUpdate = msg.instance_update.time;
            _this.script.ended = msg.instance_update.ended;
            _this.script.states = msg.instance_update.states;
            console.log("==== socket message", msg, _this.script);
            resolve();
        });
    };
    // ======================================================================= //
    // ========================== TIMER  ===================================== //
    // ======================================================================= //
    OverviewComponent.prototype.startCustomTimer = function () {
        var hrs, mins, sec;
        if (this.hours === "") {
            hrs = 0;
        }
        else {
            hrs = parseInt(this.hours, 10);
        }
        if (this.minutes === "") {
            mins = 0;
        }
        else {
            mins = parseInt(this.minutes, 10);
        }
        if (this.seconds === "") {
            sec = 0;
        }
        else {
            sec = parseInt(this.seconds, 10);
        }
        this.server
            .startCustomTime(this.script.name, hrs, mins, sec)
            .subscribe(function (time) {
            console.log(time);
        });
    };
    OverviewComponent.prototype.updateCustomTimer = function () {
        var hrs, mins, sec;
        if (this.hours === "") {
            hrs = 0;
        }
        else {
            hrs = parseInt(this.hours, 10);
        }
        if (this.minutes === "") {
            mins = 0;
        }
        else {
            mins = parseInt(this.minutes, 10);
        }
        if (this.seconds === "") {
            sec = 0;
        }
        else {
            sec = parseInt(this.seconds, 10);
        }
        this.server
            .updateCustomTime(this.script.name, hrs, mins, sec)
            .subscribe(function (time) {
            console.log("======= Updated time =======", time);
        });
    };
    OverviewComponent.prototype.pauseGameTimer = function () {
        this.server.pauseGameTimer(this.script.name).subscribe(function (result) {
            console.log(result);
        });
    };
    OverviewComponent.prototype.resumeGameTimer = function () {
        this.server.resumeGameTimer(this.script.name).subscribe(function (result) {
            console.log(result);
        });
    };
    // ======================================================================= //
    // ========================== EVENT ACTION  ============================== //
    // ======================================================================= //
    OverviewComponent.prototype.sendForcedAction = function (actionName) {
        console.log(actionName);
        this.server
            .sendForcedAction(this.script.name, actionName)
            .subscribe(function (action) {
            console.log(action);
        });
        this.socket.sendForcedAction(this.script.name, actionName);
    };
    OverviewComponent.prototype.sendForcedEvent = function (eventName) {
        console.log(eventName);
        this.server
            .sendForcedEvent(this.script.name, eventName, this.script.timeUpdate)
            .subscribe(function (event) {
            console.log(event);
        });
        this.socket.sendForcedEvent(this.script.name, eventName);
    };
    OverviewComponent.prototype.eventStatus = function (event) {
        var _this = this;
        this.script.events.forEach(function (evt) {
            if (evt.name === event.name) {
                evt.status = event.status;
                evt.completed_time = _this.script.timeUpdate;
                console.log("Updating Event: ", _this.script);
            }
        });
    };
    OverviewComponent.prototype.actionStatus = function (action) {
        this.script.actions.forEach(function (act) {
            if (act.name === action.name) {
                act.status = action.status;
            }
        });
    };
    // ======================================================================= //
    // ========================== TRIGGERS  ================================== //
    // ======================================================================= //
    OverviewComponent.prototype.triggerForceTrigger = function (trigger) {
        var msg = {
            scriptName: this.script.name,
            trigger: trigger,
            screenName: trigger.screenName
        };
        this.server.triggerForceTrigger(msg).subscribe(function (result) {
            console.log("Forcing trigger: ", msg, result);
        });
    };
    OverviewComponent.prototype.triggerPlayAudio = function (audioFile) {
        var msg = {
            scriptName: this.script.name,
            audioFile: audioFile
        };
        this.server.triggerPlayAudio(msg).subscribe(function (result) {
            console.log("Playing Audio: ", result);
        });
    };
    OverviewComponent.prototype.triggerPlayVideo = function (videoFile) {
        var msg = {
            scriptName: this.script.name,
            videoFile: videoFile
        };
        this.server.triggerPlayVideo(msg).subscribe(function (result) {
            console.log("Playing Video: ", result);
        });
    };
    // ======================================================================= //
    // ========================== HINTS  ===================================== //
    // ======================================================================= //
    OverviewComponent.prototype.hintSendHint = function (hint) {
        var msg = {
            scriptName: this.script.name,
            hintText: this.hintText
        };
        this.hintText = hint.hint;
        this.server.hintSendHint(msg).subscribe(function (result) {
            console.log("Sending hint: ", result);
        });
    };
    OverviewComponent.prototype.hintSendCustomHint = function () {
        var msg = {
            scriptName: this.script.name,
            hintText: this.hintText
        };
        this.server.hintSendCustomHint(msg).subscribe(function (result) {
            console.log("Sending hint: ", result);
        });
    };
    OverviewComponent.prototype.clearHint = function () {
        var msg = {
            scriptName: this.script.name,
            hintText: "--clear--"
        };
        this.hintText = "";
        this.server.clearHint(msg).subscribe(function (result) {
            console.log("Clearing hint: ", result);
        });
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-overview",
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/overview/overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"],
            _init_service__WEBPACK_IMPORTED_MODULE_4__["InitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/script-editor/script-editor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/script-editor/script-editor.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Montserrat', 'Lato', 'Open Sans', 'Helvetica Neue', Helvetica, Calibri, Arial, sans-serif;\r\n  color: #6b7381;\r\n  background: #f2f2f2;\r\n}\r\n\r\n.jumbotron {\r\n  background: #6b7381;\r\n  color: #bdc1c8;\r\n}\r\n\r\n.jumbotron h1 {\r\n  color: #fff;\r\n}\r\n\r\n.example {\r\n  margin: 4rem auto;\r\n}\r\n\r\n.example>.row {\r\n  margin-top: 2rem;\r\n  height: 5rem;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  border: 1px solid rgba(189, 193, 200, 0.5);\r\n}\r\n\r\n.example>.row:first-of-type {\r\n  border: none;\r\n  height: auto;\r\n  text-align: left;\r\n}\r\n\r\n.example h3 {\r\n  font-weight: 400;\r\n}\r\n\r\n.example h3>small {\r\n  font-weight: 200;\r\n  font-size: 0.75em;\r\n  color: #939aa5;\r\n}\r\n\r\n.example h6 {\r\n  font-weight: 700;\r\n  font-size: 0.65rem;\r\n  letter-spacing: 3.32px;\r\n  text-transform: uppercase;\r\n  color: #bdc1c8;\r\n  margin: 0;\r\n  line-height: 5rem;\r\n}\r\n\r\n.example .btn-toggle {\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.btn-toggle {\r\n  margin: 0 4rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1.5rem;\r\n  width: 3rem;\r\n  border-radius: 1.5rem;\r\n  color: #6b7381;\r\n  background: #bdc1c8;\r\n}\r\n\r\n.btn-toggle:focus,\r\n.btn-toggle.focus,\r\n.btn-toggle:focus.active,\r\n.btn-toggle.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle:before,\r\n.btn-toggle:after {\r\n  line-height: 1.5rem;\r\n  width: 4rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  transition: opacity 0.25s;\r\n}\r\n\r\n.btn-toggle:before {\r\n  content: 'Off';\r\n  left: -4rem;\r\n}\r\n\r\n.btn-toggle:after {\r\n  content: 'On';\r\n  right: -4rem;\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle>.handle {\r\n  position: absolute;\r\n  top: 0.1875rem;\r\n  left: 0.1875rem;\r\n  width: 1.125rem;\r\n  height: 1.125rem;\r\n  border-radius: 1.125rem;\r\n  background: #fff;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.active {\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.active>.handle {\r\n  left: 1.6875rem;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.active:before {\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-sm:before,\r\n.btn-toggle.btn-sm:after {\r\n  line-height: -0.5rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.4125rem;\r\n  width: 2.325rem;\r\n}\r\n\r\n.btn-toggle.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-xs:before,\r\n.btn-toggle.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle:before,\r\n.btn-toggle:after {\r\n  color: #6b7381;\r\n}\r\n\r\n.btn-toggle.active {\r\n  background-color: #29b5a8;\r\n}\r\n\r\n.btn-toggle.btn-lg {\r\n  margin: 0 5rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 2.5rem;\r\n  width: 5rem;\r\n  border-radius: 2.5rem;\r\n}\r\n\r\n.btn-toggle.btn-lg:focus,\r\n.btn-toggle.btn-lg.focus,\r\n.btn-toggle.btn-lg:focus.active,\r\n.btn-toggle.btn-lg.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle.btn-lg:before,\r\n.btn-toggle.btn-lg:after {\r\n  line-height: 2.5rem;\r\n  width: 5rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  transition: opacity 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-lg:before {\r\n  content: 'Off';\r\n  left: -5rem;\r\n}\r\n\r\n.btn-toggle.btn-lg:after {\r\n  content: 'On';\r\n  right: -5rem;\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.btn-lg>.handle {\r\n  position: absolute;\r\n  top: 0.3125rem;\r\n  left: 0.3125rem;\r\n  width: 1.875rem;\r\n  height: 1.875rem;\r\n  border-radius: 1.875rem;\r\n  background: #fff;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-lg.active {\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-lg.active>.handle {\r\n  left: 2.8125rem;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-lg.active:before {\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.btn-lg.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm:before,\r\n.btn-toggle.btn-lg.btn-sm:after {\r\n  line-height: 0.5rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.6875rem;\r\n  width: 3.875rem;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-xs:before,\r\n.btn-toggle.btn-lg.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle.btn-sm {\r\n  margin: 0 0.5rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1.5rem;\r\n  width: 3rem;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.btn-toggle.btn-sm:focus,\r\n.btn-toggle.btn-sm.focus,\r\n.btn-toggle.btn-sm:focus.active,\r\n.btn-toggle.btn-sm.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle.btn-sm:before,\r\n.btn-toggle.btn-sm:after {\r\n  line-height: 1.5rem;\r\n  width: 0.5rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.55rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  transition: opacity 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-sm:before {\r\n  content: 'Off';\r\n  left: -0.5rem;\r\n}\r\n\r\n.btn-toggle.btn-sm:after {\r\n  content: 'On';\r\n  right: -0.5rem;\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.btn-sm>.handle {\r\n  position: absolute;\r\n  top: 0.1875rem;\r\n  left: 0.1875rem;\r\n  width: 1.125rem;\r\n  height: 1.125rem;\r\n  border-radius: 1.125rem;\r\n  background: #fff;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-sm.active {\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-sm.active>.handle {\r\n  left: 1.6875rem;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:before {\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm:before,\r\n.btn-toggle.btn-sm.btn-sm:after {\r\n  line-height: -0.5rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.4125rem;\r\n  width: 2.325rem;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-xs:before,\r\n.btn-toggle.btn-sm.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle.btn-xs {\r\n  margin: 0 0;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1rem;\r\n  width: 2rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.btn-toggle.btn-xs:focus,\r\n.btn-toggle.btn-xs.focus,\r\n.btn-toggle.btn-xs:focus.active,\r\n.btn-toggle.btn-xs.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle.btn-xs:before,\r\n.btn-toggle.btn-xs:after {\r\n  line-height: 1rem;\r\n  width: 0;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  transition: opacity 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-xs:before {\r\n  content: 'Off';\r\n  left: 0;\r\n}\r\n\r\n.btn-toggle.btn-xs:after {\r\n  content: 'On';\r\n  right: 0;\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.btn-xs>.handle {\r\n  position: absolute;\r\n  top: 0.125rem;\r\n  left: 0.125rem;\r\n  width: 0.75rem;\r\n  height: 0.75rem;\r\n  border-radius: 0.75rem;\r\n  background: #fff;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-xs.active {\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-xs.active>.handle {\r\n  left: 1.125rem;\r\n  transition: left 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-xs.active:before {\r\n  opacity: 0.5;\r\n}\r\n\r\n.btn-toggle.btn-xs.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm:before,\r\n.btn-toggle.btn-xs.btn-sm:after {\r\n  line-height: -1rem;\r\n  color: #fff;\r\n  letter-spacing: 0.75px;\r\n  left: 0.275rem;\r\n  width: 1.55rem;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-xs:before,\r\n.btn-toggle.btn-xs.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle.btn-secondary {\r\n  color: #6b7381;\r\n  background: #bdc1c8;\r\n}\r\n\r\n.btn-toggle.btn-secondary:before,\r\n.btn-toggle.btn-secondary:after {\r\n  color: #6b7381;\r\n}\r\n\r\n.btn-toggle.btn-secondary.active {\r\n  background-color: #ff8300;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyaXB0LWVkaXRvci9zY3JpcHQtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3R0FBd0c7RUFDeEcsZUFBZTtFQUNmLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJDQUEyQztDQUM1Qzs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsU0FBUztFQUNULG9DQUE0QjtVQUE1Qiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG9CQUFvQjtDQUNyQjs7QUFFRDs7OztFQUlFLGNBQWM7Q0FDZjs7QUFFRDs7RUFFRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDs7RUFFRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDs7RUFFRSxjQUFjO0NBQ2Y7O0FBRUQ7O0VBRUUsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtDQUN2Qjs7QUFFRDs7OztFQUlFLGNBQWM7Q0FDZjs7QUFFRDs7RUFFRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDs7RUFFRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDs7RUFFRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7Q0FDdkI7O0FBRUQ7Ozs7RUFJRSxjQUFjO0NBQ2Y7O0FBRUQ7O0VBRUUsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7O0VBRUUsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0NBQ3JCOztBQUVEOzs7O0VBSUUsY0FBYztDQUNmOztBQUVEOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixRQUFRO0NBQ1Q7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUVEOztFQUVFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDs7RUFFRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9zY3JpcHQtZWRpdG9yL3NjcmlwdC1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdMYXRvJywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM2YjczODE7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgYmFja2dyb3VuZDogIzZiNzM4MTtcclxuICBjb2xvcjogI2JkYzFjODtcclxufVxyXG5cclxuLmp1bWJvdHJvbiBoMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5leGFtcGxlIHtcclxuICBtYXJnaW46IDRyZW0gYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGU+LnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODksIDE5MywgMjAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZT4ucm93OmZpcnN0LW9mLXR5cGUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmV4YW1wbGUgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5leGFtcGxlIGgzPnNtYWxsIHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIGNvbG9yOiAjOTM5YWE1O1xyXG59XHJcblxyXG4uZXhhbXBsZSBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDMuMzJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjYmRjMWM4O1xyXG4gIG1hcmdpbjogMDtcclxuICBsaW5lLWhlaWdodDogNXJlbTtcclxufVxyXG5cclxuLmV4YW1wbGUgLmJ0bi10b2dnbGUge1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUge1xyXG4gIG1hcmdpbjogMCA0cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgY29sb3I6ICM2YjczODE7XHJcbiAgYmFja2dyb3VuZDogI2JkYzFjODtcclxufVxyXG5cclxuLmJ0bi10b2dnbGU6Zm9jdXMsXHJcbi5idG4tdG9nZ2xlLmZvY3VzLFxyXG4uYnRuLXRvZ2dsZTpmb2N1cy5hY3RpdmUsXHJcbi5idG4tdG9nZ2xlLmZvY3VzLmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGU6YmVmb3JlLFxyXG4uYnRuLXRvZ2dsZTphZnRlciB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogNHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnT2ZmJztcclxuICBsZWZ0OiAtNHJlbTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdPbic7XHJcbiAgcmlnaHQ6IC00cmVtO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGU+LmhhbmRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC4xODc1cmVtO1xyXG4gIGxlZnQ6IDAuMTg3NXJlbTtcclxuICB3aWR0aDogMS4xMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxLjEyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmFjdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYWN0aXZlPi5oYW5kbGUge1xyXG4gIGxlZnQ6IDEuNjg3NXJlbTtcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMjVzO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5hY3RpdmU6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmFjdGl2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtOmJlZm9yZSxcclxuLmJ0bi10b2dnbGUuYnRuLXNtOmFmdGVyIHtcclxuICBsaW5lLWhlaWdodDogLTAuNXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xyXG4gIGxlZnQ6IDAuNDEyNXJlbTtcclxuICB3aWR0aDogMi4zMjVyZW07XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbTpiZWZvcmUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tc206YWZ0ZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZTpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbS5hY3RpdmU6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14czpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi14czphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGU6YmVmb3JlLFxyXG4uYnRuLXRvZ2dsZTphZnRlciB7XHJcbiAgY29sb3I6ICM2YjczODE7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YjVhODtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnIHtcclxuICBtYXJnaW46IDAgNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tbGc6Zm9jdXMsXHJcbi5idG4tdG9nZ2xlLmJ0bi1sZy5mb2N1cyxcclxuLmJ0bi10b2dnbGUuYnRuLWxnOmZvY3VzLmFjdGl2ZSxcclxuLmJ0bi10b2dnbGUuYnRuLWxnLmZvY3VzLmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnOmJlZm9yZSxcclxuLmJ0bi10b2dnbGUuYnRuLWxnOmFmdGVyIHtcclxuICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tbGc6YmVmb3JlIHtcclxuICBjb250ZW50OiAnT2ZmJztcclxuICBsZWZ0OiAtNXJlbTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnOmFmdGVyIHtcclxuICBjb250ZW50OiAnT24nO1xyXG4gIHJpZ2h0OiAtNXJlbTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1sZz4uaGFuZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjMxMjVyZW07XHJcbiAgbGVmdDogMC4zMTI1cmVtO1xyXG4gIHdpZHRoOiAxLjg3NXJlbTtcclxuICBoZWlnaHQ6IDEuODc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuODc1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmFjdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmFjdGl2ZT4uaGFuZGxlIHtcclxuICBsZWZ0OiAyLjgxMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmFjdGl2ZTpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmFjdGl2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmJ0bi1zbTpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi1sZy5idG4tc206YWZ0ZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcclxuICBsZWZ0OiAwLjY4NzVyZW07XHJcbiAgd2lkdGg6IDMuODc1cmVtO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tbGcuYnRuLXNtOmJlZm9yZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1sZy5idG4tc206YWZ0ZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmJ0bi1zbS5hY3RpdmU6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tbGcuYnRuLXNtLmFjdGl2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLWxnLmJ0bi14czpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi1sZy5idG4teHM6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbSB7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tc206Zm9jdXMsXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbS5mb2N1cyxcclxuLmJ0bi10b2dnbGUuYnRuLXNtOmZvY3VzLmFjdGl2ZSxcclxuLmJ0bi10b2dnbGUuYnRuLXNtLmZvY3VzLmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtOmJlZm9yZSxcclxuLmJ0bi10b2dnbGUuYnRuLXNtOmFmdGVyIHtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIHdpZHRoOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjU1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdPZmYnO1xyXG4gIGxlZnQ6IC0wLjVyZW07XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbTphZnRlciB7XHJcbiAgY29udGVudDogJ09uJztcclxuICByaWdodDogLTAuNXJlbTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbT4uaGFuZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjE4NzVyZW07XHJcbiAgbGVmdDogMC4xODc1cmVtO1xyXG4gIHdpZHRoOiAxLjEyNXJlbTtcclxuICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMTI1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZT4uaGFuZGxlIHtcclxuICBsZWZ0OiAxLjY4NzVyZW07XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZTpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmFjdGl2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmJ0bi1zbTpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbS5idG4tc206YWZ0ZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiAtMC41cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgbGVmdDogMC40MTI1cmVtO1xyXG4gIHdpZHRoOiAyLjMyNXJlbTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmJ0bi1zbTpiZWZvcmUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4tc20uYnRuLXNtOmFmdGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbS5idG4tc20uYWN0aXZlOmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNtLmJ0bi1zbS5hY3RpdmU6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zbS5idG4teHM6YmVmb3JlLFxyXG4uYnRuLXRvZ2dsZS5idG4tc20uYnRuLXhzOmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4teHMge1xyXG4gIG1hcmdpbjogMCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXhzOmZvY3VzLFxyXG4uYnRuLXRvZ2dsZS5idG4teHMuZm9jdXMsXHJcbi5idG4tdG9nZ2xlLmJ0bi14czpmb2N1cy5hY3RpdmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi14cy5mb2N1cy5hY3RpdmUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14czpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi14czphZnRlciB7XHJcbiAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14czpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdPZmYnO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14czphZnRlciB7XHJcbiAgY29udGVudDogJ09uJztcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14cz4uaGFuZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjEyNXJlbTtcclxuICBsZWZ0OiAwLjEyNXJlbTtcclxuICB3aWR0aDogMC43NXJlbTtcclxuICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC4yNXM7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14cy5hY3RpdmUge1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14cy5hY3RpdmU+LmhhbmRsZSB7XHJcbiAgbGVmdDogMS4xMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXhzLmFjdGl2ZTpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXhzLmFjdGl2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi1zbTpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi14cy5idG4tc206YWZ0ZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiAtMXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xyXG4gIGxlZnQ6IDAuMjc1cmVtO1xyXG4gIHdpZHRoOiAxLjU1cmVtO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4teHMuYnRuLXNtOmJlZm9yZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi14cy5idG4tc206YWZ0ZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi1zbS5hY3RpdmU6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS5idG4teHMuYnRuLXNtLmFjdGl2ZTphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXhzLmJ0bi14czpiZWZvcmUsXHJcbi5idG4tdG9nZ2xlLmJ0bi14cy5idG4teHM6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGNvbG9yOiAjNmI3MzgxO1xyXG4gIGJhY2tncm91bmQ6ICNiZGMxYzg7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlLmJ0bi1zZWNvbmRhcnk6YmVmb3JlLFxyXG4uYnRuLXRvZ2dsZS5idG4tc2Vjb25kYXJ5OmFmdGVyIHtcclxuICBjb2xvcjogIzZiNzM4MTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUuYnRuLXNlY29uZGFyeS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjgzMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/script-editor/script-editor.component.html":
/*!************************************************************!*\
  !*** ./src/app/script-editor/script-editor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{! <img src='' onerror='get_rooms_from_game_script()'> }} -->\r\n\r\n<!-- <a href=\"https://github.com/flowhub/the-graph\">Change to this!!!!</a> -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div id=\"instance_list\">\r\n        <h3>Scripts</h3>\r\n        <div class=\"card\" style=\"width: 100%;\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li *ngFor=\"let script of scriptInstanceList\" class=\"list-group-item\">\r\n              {{ script.name }}\r\n              <br />\r\n              <button class=\"btn btn-success\" (click)=\"loadScript(script.name)\">\r\n                Edit\r\n              </button>\r\n              <button class=\"btn btn-danger\" (click)=\"deleteScript(script.name)\">\r\n                Delete\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <button class=\"btn btn-success\" (click)=\"showNewScriptNameModal()\">Add new script</button>\r\n        <br />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div id=\"event_action_list\">\r\n        <div *ngIf=\"scriptLoaded\">\r\n\r\n          <div class=\"input-group input-group-sm\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Branch Address :</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"branch_address\" [(ngModel)]=\"scriptInstance.branch_address\"\r\n              value=\"{{ scriptInstance.branch_address }}\" />\r\n          </div>\r\n\r\n\r\n          <div class=\"input-group input-group-sm\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Branch Name :</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"branch_name\" [(ngModel)]=\"scriptInstance.name\"\r\n              value=\"{{ scriptInstance.name }}\" />\r\n          </div>\r\n\r\n          <div class=\"input-group input-group-sm\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Branch ID :</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"branch_id\" [(ngModel)]=\"scriptInstance.id\"\r\n              value=\"{{ scriptInstance.id }}\" />\r\n          </div>\r\n\r\n          <div class=\"input-group input-group-sm\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Master ID (Bridge):</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"branch_masterId\" [(ngModel)]=\"scriptInstance.masterId\"\r\n              value=\"{{ scriptInstance.masterId }}\" />\r\n          </div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group form-control-sm\">\r\n                <label for=\"branch_hours\"> Hours : </label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" id=\"branch_hours\" [(ngModel)]=\"scriptInstance.time.hours\"\r\n                  value=\"{{ scriptInstance.time.hours }}\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group form-control-sm\">\r\n                <label for=\"branch_minutes\"> Minutes : </label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" id=\"branch_minutes\" [(ngModel)]=\"scriptInstance.time.minutes\"\r\n                  value=\"{{ scriptInstance.time.minutes }}\" />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group form-control-sm\">\r\n                <label for=\"branch_seconds\"> Seconds : </label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" id=\"branch_seconds\" [(ngModel)]=\"scriptInstance.time.seconds\"\r\n                  value=\"{{ scriptInstance.time.seconds }}\" />\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <hr />\r\n\r\n\r\n          <button class=\"btn btn-success\" (click)=\"scriptSaveConfig()\">Save</button>\r\n\r\n          <hr />\r\n\r\n          <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel title=\"States : {{ scriptInstance.states?.length }}\">\r\n              <ng-template ngbPanelContent>\r\n                <div class=\"card\" style=\"width: 100%;\">\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li *ngFor=\"let state of scriptInstance?.states\" class=\"list-group-item\">\r\n                      State: {{ state.name }}\r\n                      <br />\r\n                      <button class=\"btn btn-success\" (click)=\"scriptEditState(state.name)\">\r\n                        Edit\r\n                      </button>\r\n                      <button class=\"btn btn-danger\" (click)=\"scriptDeleteState(state.name)\">\r\n                        Delete\r\n                      </button>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <button class=\"btn btn-success\" (click)=\"scriptCreateNewState()\">Add State</button>\r\n          <hr />\r\n\r\n          <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel title=\"Actions : {{ scriptInstance.actions?.length }}\">\r\n              <ng-template ngbPanelContent>\r\n                <div class=\"card\" style=\"width: 100%;\">\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li *ngFor=\"let action of scriptInstance?.actions\" class=\"list-group-item\">\r\n                      Action: {{ action.name }}\r\n                      <br />\r\n                      <button class=\"btn btn-success\" (click)=\"scriptEditAction(action.name)\">\r\n                        Edit\r\n                      </button>\r\n                      <button class=\"btn btn-danger\" (click)=\"scriptDeleteAction(action.name)\">\r\n                        Delete\r\n                      </button>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <button class=\"btn btn-success\" (click)=\"scriptCreateNewAction()\">Add Action</button>\r\n          <hr />\r\n\r\n          <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel title=\"Events : {{ scriptInstance.events?.length }}\">\r\n              <ng-template ngbPanelContent>\r\n                <div class=\"card\" style=\"width: 100%;\">\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li *ngFor=\"let event of scriptInstance?.events\" class=\"list-group-item\">\r\n                      Event: {{ event.name }}\r\n                      <br />\r\n                      <button class=\"btn btn-success\" (click)=\"scriptEditEvent(event.name)\">\r\n                        Edit\r\n                      </button>\r\n                      <button class=\"btn btn-danger\" (click)=\"scriptDeleteEvent(event.name)\">\r\n                        Delete\r\n                      </button>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <button class=\"btn btn-success\" (click)=\"scriptCreateNewEvent()\">Add Event</button>\r\n          <hr />\r\n\r\n\r\n          <hr />\r\n          <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel title=\"Hints : {{ scriptInstance.hints?.length }}\">\r\n              <ng-template ngbPanelContent>\r\n                <div class=\"card\" style=\"width: 100%;\">\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li *ngFor=\"let hint of scriptInstance?.hints\" class=\"list-group-item\">\r\n                      Hint: {{ hint.name }}\r\n                      <br />\r\n                      <button class=\"btn btn-success\" (click)=\"scriptEditHint(hint.name)\">\r\n                        Edit\r\n                      </button>\r\n                      <button class=\"btn btn-danger\" (click)=\"scriptDeleteHint(hint.name)\">\r\n                        Delete\r\n                      </button>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <button class=\"btn btn-success\" (click)=\"scriptCreateNewHint()\">Add Hint</button>\r\n          <hr />\r\n\r\n\r\n          <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel title=\"Screen Configurations : {{ scriptInstance.screenConfigs?.length }}\">\r\n              <ng-template ngbPanelContent>\r\n                <div class=\"card\" style=\"width: 100%;\">\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li *ngFor=\"let config of scriptInstance?.screenConfigs\" class=\"list-group-item\">\r\n                      config: {{ config.name }}\r\n                      <br />\r\n                      <button class=\"btn btn-success\" (click)=\"scriptEditScreenConfig(config.name)\">\r\n                        Edit\r\n                      </button>\r\n                      <button class=\"btn btn-danger\" (click)=\"scriptDeleteScreenConfig(config.name)\">\r\n                        Delete\r\n                      </button>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <button class=\"btn btn-success\" (click)=\"scriptCreateNewScreenConfig()\">Add Screen</button>\r\n          <hr />\r\n\r\n          <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel title=\"Triggers : {{ scriptInstance.triggers?.length }}\">\r\n              <ng-template ngbPanelContent>\r\n                <div class=\"card\" style=\"width: 100%;\">\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li *ngFor=\"let trigger of scriptInstance?.triggers\" class=\"list-group-item\">\r\n                      Trigger: {{ trigger.name }}\r\n                      <br />\r\n                      <button class=\"btn btn-success\" (click)=\"scriptEditTrigger(trigger.name)\">\r\n                        Edit\r\n                      </button>\r\n                      <button class=\"btn btn-danger\" (click)=\"scriptDeleteTrigger(trigger.name)\">\r\n                        Delete\r\n                      </button>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <button class=\"btn btn-success\" (click)=\"scriptCreateNewTrigger()\">Add Trigger</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- TRIGGER FORM --------------------------------------------------->\r\n<!-- -------------------------------------------------------------->\r\n\r\n\r\n<ng-template #triggerModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{triggerToEdit.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"col-md-12\" *ngIf=\"triggerLoaded\">\r\n      <h3>Edit Trigger</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerName\"> Name </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"triggerName\" [(ngModel)]=\"triggerToEdit.name\" value=\"{{ triggerToEdit.name }}\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_trigger_select_state\"> State (To listen for) </label>\r\n        <select #triggerStateSelector class=\"selectpicker form-control\" id=\"gs_trigger_select_state\" [(ngModel)]=\"triggerToEdit.trigger\">\r\n          <option selected=\"selected\">{{ triggerToEdit.trigger }}</option>\r\n          <option *ngFor=\"let state of scriptInstance.states\">{{state.name}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_trigger_select_state\"> Screen to trigger on) </label>\r\n        <select #triggerStateSelector class=\"selectpicker form-control\" id=\"gs_trigger_select_state\" [(ngModel)]=\"triggerToEdit.screenName\">\r\n          <option selected=\"selected\">{{ triggerToEdit.screenName }}</option>\r\n          <option *ngFor=\"let config of scriptInstance.screenConfigs\">{{config.name}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerAudio\"> Audio file </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"triggerAudio\" [(ngModel)]=\"triggerToEdit.audio\" value=\"{{ triggerToEdit.audio }}\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_trigger_loop_audio\"> Loop Audio </label>\r\n        <div *ngIf=\"triggerToEdit.loop_audio\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"triggerToggleLoopAudio()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"!triggerToEdit.loop_audio\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"triggerToggleLoopAudio()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_trigger_audio_type\"> Audio Type </label>\r\n        <select #eventTypeSelector class=\"selectpicker form-control\" id=\"gs_event_type_event\" [(ngModel)]=\"triggerToEdit.audio_type\">\r\n          <option selected=\"selected\">{{ triggerToEdit.audio_type }}</option>\r\n          <option>background</option>\r\n          <option>start</option>\r\n          <option>end</option>\r\n          <option>hint</option>\r\n          <option>custom</option>\r\n        </select>\r\n      </div>\r\n\r\n      <hr />\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerVideo\"> Video file </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"triggerVideo\" [(ngModel)]=\"triggerToEdit.video\" value=\"{{ triggerToEdit.video }}\" />\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_trigger_loop_video\"> Loop Video </label>\r\n        <div *ngIf=\"triggerToEdit.loop_video\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"triggerToggleLoopVideo()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"!triggerToEdit.loop_video\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"triggerToggleLoopVideo()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerVideoType\"> Video Type </label>\r\n        <select #eventTypeSelector class=\"selectpicker form-control\" id=\"triggerVideoType\" [(ngModel)]=\"triggerToEdit.video_type\">\r\n          <option selected=\"selected\">{{ triggerToEdit.video_type }}</option>\r\n          <option>background</option>\r\n          <option>custom</option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerPauseTimer\"> Pause timer while playing video </label>\r\n        <div *ngIf=\"triggerToEdit.pause_timer\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"triggerTogglePauseTimer()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"!triggerToEdit.pause_timer\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"triggerTogglePauseTimer()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <hr />\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerHint\"> Hint </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"triggerHint\" [(ngModel)]=\"triggerToEdit.hint\" value=\"{{ triggerToEdit.hint }}\" />\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerToggle\"> Can toggle (Is repeatable)</label>\r\n        <div *ngIf=\"triggerToEdit.can_toggle\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"triggerToggleRepeatable()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"!triggerToEdit.can_toggle\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"triggerToggleRepeatable()\" data-toggle=\"button\"\r\n            aria-pressed=\"false\" autocomplete=\"off\">\r\n            <div class=\"handle\"></div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <hr />\r\n      <h3>Advanced:</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_trigger_audio_type\"> Http Request Method </label>\r\n        <select #eventTypeSelector class=\"selectpicker form-control\" id=\"gs_event_type_event\" [(ngModel)]=\"triggerToEdit.httpRequestType\">\r\n          <option selected=\"selected\">{{ triggerToEdit.httpRequestType }}</option>\r\n          <option>GET</option>\r\n          <option>POST</option>\r\n          <option>PUT</option>\r\n          <option>PATCH</option>\r\n          <option>DELETE</option>\r\n          <option>NONE</option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerHint\"> Http Request URL: </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"triggerHint\" [(ngModel)]=\"triggerToEdit.httpRequestUrl\" value=\"{{ triggerToEdit.httpRequestUrl }}\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"triggerHint\"> Http Request Body: </label>\r\n        <textarea type=\"text\" class=\"form-control\" id=\"triggerHint\" [(ngModel)]=\"triggerToEdit.httpRequestBody\" value=\"{{ triggerToEdit.httpRequestBody }}\"></textarea>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"saveEditedTrigger();modal.close('Close click')\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!-- STATE FORM --------------------------------------------------->\r\n<!-- -------------------------------------------------------------->\r\n\r\n<ng-template #stateModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{stateToEdit.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"col-md-12\" *ngIf=\"stateLoaded\">\r\n      <h3>Edit State</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"stateName\"> Name </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"stateName\" [(ngModel)]=\"stateToEdit.name\" value=\"{{ stateToEdit.name }}\" />\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"saveEditedState();modal.close('Close click')\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<!-- HINT FORM --------------------------------------------------->\r\n<!-- -------------------------------------------------------------->\r\n\r\n<ng-template #hintModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{hintToEdit.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"col-md-12\" *ngIf=\"hintLoaded\">\r\n      <h3>Edit Hint</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"hintName\"> Name </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintName\" [(ngModel)]=\"hintToEdit.name\" value=\"{{ hintToEdit.name }}\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"hintText\"> Hint Text </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintText\" [(ngModel)]=\"hintToEdit.hint\" value=\"{{ hintToEdit.hint }}\" />\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"saveEditedHint();modal.close('Close click')\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- EVENT FORM --------------------------------------------------->\r\n<!-- -------------------------------------------------------------->\r\n\r\n<ng-template #eventModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{eventToEdit.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <div class=\"col-md-12\" *ngIf=\"eventLoaded\">\r\n      <h3>Edit Event</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_event_action_name\"> Name </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"gs_event_action_name\" value=\"{{ eventToEdit.name }}\" [(ngModel)]=\"eventToEdit.name\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_event_type_event\"> Event Type / Event </label>\r\n        <select #eventTypeSelector class=\"selectpicker form-control\" id=\"gs_event_type_event\" [(ngModel)]=\"eventEventTypeSelect\">\r\n          <option selected=\"selected\">{{ eventToEdit.eventType }}/{{ eventToEdit.event }}</option>\r\n          <option>button/toggle</option>\r\n          <option>keypad/code</option>\r\n          <option>rfid/code</option>\r\n          <option>photoRes/rangeTrigger</option>\r\n          <option>thermometer/rangeTrigger</option>\r\n          <option>potentiometer/rangetrigger</option>\r\n          <option>magnetSwitch/on</option>\r\n          <option>magnetSwitch/off</option>\r\n          <option>distanceSensor/rangeTrigger</option>\r\n          <option>stepperDone/stepperTrigger</option>\r\n          <option>phoneET/callOut</option>\r\n          <option>phoneET/callReceived</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_device_id\"> Device Id </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"gs_device_id\" [(ngModel)]=\"eventToEdit.device_id\" value=\"{{ eventToEdit.device_id }}\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_data\"> Data </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"gs_data\" [(ngModel)]=\"eventToEdit.data\" value=\"{{ eventToEdit.data }}\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_description\"> Description </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"gs_description\" [(ngModel)]=\"eventToEdit.description\" value=\"{{ eventToEdit.description }}\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_dependencies\"> Dependencies (Game states) </label>\r\n        <select class=\"selectpicker form-control\" id=\"gs_event_states\" [(ngModel)]=\"eventStateSelect\">\r\n          <option *ngFor=\"let state of scriptInstance.states\">{{\r\n            state.name\r\n            }}</option>\r\n        </select>\r\n        <!-- <input type=\"text\" class=\"form-control\" id=\"gs_dependencies\" value=\"{{ eventToEdit.dependencies }}\" /> -->\r\n        <button class=\"btn btn-success\" (click)=\"addDependencyToEvent(eventStateSelect)\">Add Dependency</button>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let dependecy of eventToEdit.dependencies\" class=\"list-group-item\">\r\n            State: {{ dependecy }}\r\n            <button class=\"btn btn-danger\" (click)=\"deleteDependencyFromEvent(dependecy)\">\r\n              Delete\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_state\"> Game state (When triggered) </label>\r\n        <select class=\"selectpicker form-control\" id=\"gs_event_states\" [(ngModel)]=\"eventStateSelect\">\r\n          <option *ngFor=\"let state of scriptInstance.states\">{{\r\n            state.name\r\n            }}</option>\r\n        </select>\r\n        <button class=\"btn btn-success\" (click)=\"addStateToCurrentEvent(eventStateSelect)\">Add State</button>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let state of eventToEdit.states\" class=\"list-group-item\">\r\n            State: {{ state.name }}\r\n            <div *ngIf=\"state.active\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"toggleEventState(state.name)\"\r\n                data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">\r\n                <div class=\"handle\"></div>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"!state.active\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"toggleEventState(state.name)\" data-toggle=\"button\"\r\n                aria-pressed=\"false\" autocomplete=\"off\">\r\n                <div class=\"handle\"></div>\r\n              </button>\r\n            </div>\r\n            <button class=\"btn btn-danger\" (click)=\"scriptDeleteStateFromEvent(state)\">\r\n              Delete\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"gs_actions\"> Actions (When triggered) </label>\r\n        <select class=\"selectpicker form-control\" id=\"gs_actions\" [(ngModel)]=\"eventActionSelect\">\r\n          <option *ngFor=\"let action of scriptInstance.actions\">{{\r\n            action.name\r\n            }}</option>\r\n        </select>\r\n        <!-- <input type=\"text\" class=\"form-control\" id=\"gs_actions\" value=\"{{ eventToEdit.actions }}\" /> -->\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let action of eventToEdit.actions\" class=\"list-group-item\">\r\n            Action: {{ action }}\r\n            <button class=\"btn btn-danger\" (click)=\"deleteActionFromEvent(action)\">\r\n              Delete\r\n            </button>\r\n          </li>\r\n        </ul>\r\n        <button class=\"btn btn-success\" (click)=\"addActiontoEvent(eventActionSelect)\">Add action</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"saveEditedEvent();modal.close('Close click')\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- ACTION FORM --------------------------------------------------->\r\n<!-- -------------------------------------------------------------->\r\n<ng-template #actionModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{actionToEdit.name}} Video</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div id=\"device_details\">when device selected list device settings</div>\r\n    <div class=\"container-fluid\" *ngIf=\"actionLoaded\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h3>Edit Action</h3>\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_event_action_name\"> Name </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"gs_event_action_name\" [(ngModel)]=\"actionToEdit.name\" value=\"{{ actionToEdit.name }}\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_action_type_action\"> Action Type / Action </label>\r\n            <!-- {{! Make this populated from sql, or js when selecting action or event up the top}} -->\r\n            <select class=\"selectpicker form-control\" id=\"gs_action_type_action\" [(ngModel)]=\"actionActionTypeSelect\">\r\n              <option selected=\"selected\">{{ actionToEdit.actionType }}/{{\r\n                actionToEdit.action\r\n                }}</option>\r\n              <option>relay/start</option>\r\n              <option>relay/stop</option>\r\n              <option>relay/toggleA</option>\r\n              <option>mp3/play</option>\r\n              <option>mp3/stop</option>\r\n              <option>mp3/volume</option>\r\n              <option>buzzer/toggle</option>\r\n              <option>distanceSensor/configureRange</option>\r\n              <option>phoneAT/inCommingCall</option>\r\n              <option>phoneAT/outGoingCall</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_device_id\"> Device Id </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"gs_device_id\" [(ngModel)]=\"actionToEdit.device_id\" value=\"{{ actionToEdit.device_id }}\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_data\"> Data </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"gs_data\" [(ngModel)]=\"actionToEdit.data\" value=\"{{ actionToEdit.data }}\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_description\"> Description </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"gs_description\" [(ngModel)]=\"actionToEdit.description\" value=\"{{ actionToEdit.description }}\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_dependencies\"> Dependencies (Game states) </label>\r\n            <select class=\"selectpicker form-control\" id=\"gs_event_states\" [(ngModel)]=\"actionStateDependencySelect\">\r\n              <option *ngFor=\"let state of scriptInstance.states\">{{\r\n                state.name\r\n                }}</option>\r\n            </select>\r\n            <button class=\"btn btn-success\" (click)=\"addDependencyToAction(actionStateDependencySelect)\">Add\r\n              Dependency</button>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li *ngFor=\"let dependecy of actionToEdit.dependencies\" class=\"list-group-item\">\r\n                State: {{ dependecy }}\r\n                <button class=\"btn btn-danger\" (click)=\"deleteDependencyFromAction(dependecy)\">\r\n                  Delete\r\n                </button>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_state\"> Game state (When triggered) </label>\r\n            <select class=\"selectpicker form-control\" id=\"gs_event_states\" [(ngModel)]=\"actionStateSelect\">\r\n              <option *ngFor=\"let state of scriptInstance.states\">{{\r\n                state.name\r\n                }}</option>\r\n            </select>\r\n            <button class=\"btn btn-success\" (click)=\"addStateToCurrentAction(actionStateSelect)\">Add State</button>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li *ngFor=\"let state of actionToEdit.states\" class=\"list-group-item\">\r\n                State: {{ state.name }}\r\n                <div *ngIf=\"state.active\">\r\n                  <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"toggleActionState(state.name)\"\r\n                    data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">\r\n                    <div class=\"handle\"></div>\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"!state.active\">\r\n                  <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"toggleActionState(state.name)\"\r\n                    data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">\r\n                    <div class=\"handle\"></div>\r\n                  </button>\r\n                </div>\r\n                <button class=\"btn btn-danger\" (click)=\"scriptDeleteStateFromAction(state)\">\r\n                  Delete\r\n                </button>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_state\"> Repeatable : </label>\r\n            {{actionToEdit.repeatable}}\r\n            <div *ngIf=\"actionToEdit.repeatable == true\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"toggleActionRepeatable()\" data-toggle=\"button\"\r\n                aria-pressed=\"false\" autocomplete=\"off\">\r\n                <div class=\"handle\"></div>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"actionToEdit.repeatable == false\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"toggleActionRepeatable()\" data-toggle=\"button\"\r\n                aria-pressed=\"false\" autocomplete=\"off\">\r\n                <div class=\"handle\"></div>\r\n              </button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"gs_actions\"> Actions (When triggered) </label>\r\n            <select class=\"selectpicker form-control\" id=\"gs_actions\" [(ngModel)]=\"actionActionSelect\">\r\n              <option *ngFor=\"let action of scriptInstance.actions\">{{\r\n                action.name\r\n                }}</option>\r\n            </select>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li *ngFor=\"let action of actionToEdit.actions\" class=\"list-group-item\">\r\n                Action: {{ action }}\r\n                <button class=\"btn btn-danger\" (click)=\"deleteActionFromAction(action)\">\r\n                  Delete\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"btn btn-success\" (click)=\"addActiontoAction(actionActionSelect)\">Add action</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"saveEditedAction();modal.close('Close click')\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n<!-- NEW SCRIPT MODAL ---------------------------------------------------->\r\n<!--  -------------------------------------------------------------------->\r\n<!--  -------------------------------------------------------------------->\r\n\r\n<ng-template #newScriptModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">New Script</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <h3>Script Name</h3>\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Name </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"hintName\" [(ngModel)]=\"newScriptName\" placeholder=\"Script Name....\" />\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"createNewScript();modal.close('Close click')\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<!-- SCREEN CONFIG MODAL ---------------------------------------------------->\r\n<!--  -------------------------------------------------------------------->\r\n<!--  -------------------------------------------------------------------->\r\n<ng-template #screenConfigModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Screen Config -\r\n      {{scriptInstance.branch_address}}/{{scriptInstance.name}}/{{screenConfigToEdit.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <h3>Screen Config</h3>\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Name </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"screenConfigName\" [(ngModel)]=\"screenConfigToEdit.name\" placeholder=\"Script Name....\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Background Type </label>\r\n      <select class=\"selectpicker form-control\" id=\"gs_action_type_action\" [(ngModel)]=\"screenConfigToEdit.backgroundType\">\r\n        <option selected=\"selected\">{{ screenConfigToEdit.backgroundType }}</option>\r\n        <option>Video</option>\r\n        <option>Image</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Background Path </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"screenConfigName\" [(ngModel)]=\"screenConfigToEdit.backgroundPath\"\r\n        placeholder=\"Path to file\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Font Family</label>\r\n      <select class=\"selectpicker form-control\" id=\"gs_action_type_action\" [(ngModel)]=\"screenConfigToEdit.font\">\r\n        <option selected=\"selected\">{{ screenConfigToEdit.font }}</option>\r\n        <option>'Comic Sans MS', cursive, sans-serif</option>\r\n        <option>'Times New Roman', Times, serif</option>\r\n        <option>Arial, Helvetica, sans-serif</option>\r\n        <option>Impact, Charcoal, sans-serif</option>\r\n        <option>Tahoma, Geneva, sans-serif</option>\r\n        <option>Verdana, Geneva, sans-serif</option>\r\n        <option>'Courier New', Courier, monospace</option>\r\n        <option>'Lucida Console', Monaco, monospace</option>\r\n        <option>'Comic Sans MS', cursive, sans-serif</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Font Colour</label>\r\n      <select class=\"selectpicker form-control\" id=\"gs_action_type_action\" [(ngModel)]=\"screenConfigToEdit.font_colour\">\r\n        <option selected=\"selected\">{{ screenConfigToEdit.font_colour }}</option>\r\n        <option>Red</option>\r\n        <option>DarkRed</option>\r\n        <option>Pink</option>\r\n        <option>HotPink</option>\r\n        <option>Green</option>\r\n        <option>DarkGreen</option>\r\n        <option>Brown</option>\r\n        <option>Maroon</option>\r\n        <option>Yellow</option>\r\n        <option>Khaki</option>\r\n        <option>Cyan</option>\r\n        <option>SteelBlue</option>\r\n        <option>White</option>\r\n        <option>Beige</option>\r\n        <option>Plum</option>\r\n        <option>BlueViolet</option>\r\n        <option>Indego</option>\r\n        <option>DarkSlateBlue</option>\r\n        <option>Purple</option>\r\n        <option>Blue</option>\r\n        <option>RoyalBlue</option>\r\n        <option>Navy</option>\r\n        <option>Silver</option>\r\n        <option>Gray</option>\r\n        <option>DimGray</option>\r\n        <option>Black</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Audio path *optional </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"screenConfigName\" [(ngModel)]=\"screenConfigToEdit.audio\" placeholder=\"Audio path\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Show Timer </label>\r\n      <div *ngIf=\"screenConfigToEdit.showTimer == true\">\r\n        <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"toggleScreenConfigShowtimer()\" data-toggle=\"button\"\r\n          aria-pressed=\"false\" autocomplete=\"off\">\r\n          <div class=\"handle\"></div>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"screenConfigToEdit.showTimer == false\">\r\n        <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"toggleScreenConfigShowtimer()\" data-toggle=\"button\"\r\n          aria-pressed=\"false\" autocomplete=\"off\">\r\n          <div class=\"handle\"></div>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"hintName\"> Show Hints </label>\r\n      <div *ngIf=\"screenConfigToEdit.showHints == true\">\r\n        <button type=\"button\" class=\"btn btn-lg btn-toggle active\" (click)=\"toggleScreenConfigShowHints()\" data-toggle=\"button\"\r\n          aria-pressed=\"false\" autocomplete=\"off\">\r\n          <div class=\"handle\"></div>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"screenConfigToEdit.showHints == false\">\r\n        <button type=\"button\" class=\"btn btn-lg btn-toggle\" (click)=\"toggleScreenConfigShowHints()\" data-toggle=\"button\"\r\n          aria-pressed=\"false\" autocomplete=\"off\">\r\n          <div class=\"handle\"></div>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-default\" (click)=\"saveEditedScreenConfig();modal.close('Close click')\">\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/script-editor/script-editor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/script-editor/script-editor.component.ts ***!
  \**********************************************************/
/*! exports provided: ScriptEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptEditorComponent", function() { return ScriptEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../init.service */ "./src/app/init.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var ScriptEditorComponent = /** @class */ (function () {
    // newEventFlag: boolean;
    function ScriptEditorComponent(dataService, server, socket, init, router, route, modalService) {
        this.dataService = dataService;
        this.server = server;
        this.socket = socket;
        this.init = init;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.scriptLoaded = false;
    }
    ScriptEditorComponent.prototype.ngOnInit = function () {
        this.scriptListSubscribe();
        this.scriptSubscribe();
        this.scriptLoaded = false;
        this.toggleFormPanelOff();
    };
    // ================================= //
    // ========= Script Selection ===== //
    // =============================== //
    ScriptEditorComponent.prototype.scriptListSubscribe = function () {
        var _this = this;
        this.dataService.scriptEditor_getAllScripts();
        this.scriptListSubscription = this.dataService.scriptEditor_observableScriptList.subscribe(function (scriptList) {
            _this.scriptInstanceList = scriptList;
        });
    };
    ScriptEditorComponent.prototype.scriptSubscribe = function () {
        var _this = this;
        this.scriptSubscription = this.dataService.scriptEditor_observableSelectedScript.subscribe(function (script) {
            console.log("selected script for editing: ", script);
            _this.scriptInstance = script;
            _this.scriptLoaded = true;
        });
    };
    ScriptEditorComponent.prototype.loadScript = function (scriptName) {
        this.dataService.scriptEditor_setSelectedScript(scriptName);
    };
    ScriptEditorComponent.prototype.deleteScript = function (scriptName) {
        var _this = this;
        console.log("Deleting: ", scriptName);
        this.server.deleteScript(scriptName).subscribe(function (cb) {
            console.log(cb);
            _this.ngOnInit();
            // for(var i = 0 ; i < this.scriptInstance.length; i ++){
            //   if(this.scriptInstanceList[i].name == scriptName){
            //     this.scriptInstanceList.splice(i, 1);
            //   }
            // }
        });
    };
    ScriptEditorComponent.prototype.createNewScript = function () {
        var _this = this;
        this.dataService.getNewScriptModel().then(function (script) {
            //@ts-ignore
            script.name = _this.newScriptName;
            _this.scriptInstance = script;
            _this.scriptLoaded = true;
            _this.scriptInstanceList.push(script);
        });
    };
    // ================================================= //
    // ========= Script config functions ===== //
    // ============================================== //
    ScriptEditorComponent.prototype.scriptSaveConfig = function () {
        this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
        console.log("saved config");
    };
    // ================================= //
    // ========= Event functions ===== //
    // =============================== //
    ScriptEditorComponent.prototype.scriptEditEvent = function (eventName) {
        var _this = this;
        this.findEvent(eventName).then(function (evt) {
            // this.newEventFlag = false;
            var e;
            e = evt;
            _this.eventToEdit = evt;
            _this.eventEventTypeSelect = e.eventType + "/" + e.event;
            _this.toggleFormPanel("event");
        });
        console.log("Editing event: ", eventName);
    };
    ScriptEditorComponent.prototype.scriptDeleteEvent = function (eventName) {
        for (var i = 0; i < this.scriptInstance.events.length; i++) {
            if (this.scriptInstance.events[i].name === eventName) {
                this.scriptInstance.events.splice(i, 1);
                this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
                console.log("Deleting: ", eventName, this.scriptInstance.events);
            }
        }
    };
    ScriptEditorComponent.prototype.scriptDeleteStateFromEvent = function (state) {
        var index = this.eventToEdit.states.indexOf(state);
        if (index !== -1) {
            this.eventToEdit.states.splice(index, 1);
        }
        console.log("Deleting: ", state);
    };
    // ================ Event state toggle ======//
    ScriptEditorComponent.prototype.toggleEventState = function (stateName) {
        for (var i = 0; i < this.eventToEdit.states.length; i++) {
            if (this.eventToEdit.states[i].name === stateName) {
                this.eventToEdit.states[i].active = !this.eventToEdit.states[i].active;
                console.log(this.eventToEdit.states[i].name, this.eventToEdit.states[i].active);
                return;
            }
        }
    };
    ScriptEditorComponent.prototype.addStateToCurrentEvent = function (stateName) {
        var _this = this;
        console.log(this.eventStateSelect);
        this.findScriptState(stateName).then(function (state) {
            _this.eventToEdit.states.push(state);
        });
    };
    ScriptEditorComponent.prototype.addActiontoEvent = function (actionName) {
        this.eventToEdit.actions.push(actionName);
    };
    ScriptEditorComponent.prototype.deleteActionFromEvent = function (actionName) {
        var index = this.eventToEdit.actions.indexOf(actionName);
        if (index !== -1) {
            this.eventToEdit.actions.splice(index, 1);
        }
    };
    ScriptEditorComponent.prototype.addDependencyToEvent = function (depName) {
        this.eventToEdit.dependencies.push(depName);
    };
    ScriptEditorComponent.prototype.deleteDependencyFromEvent = function (depName) {
        var index = this.eventToEdit.dependencies.indexOf(depName);
        if (index !== -1) {
            this.eventToEdit.dependencies.splice(index, 1);
        }
    };
    ScriptEditorComponent.prototype.findEventState = function (stateName) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < _this.eventToEdit.states.length; i++) {
                if (_this.eventToEdit.states[i].name === stateName) {
                    resolve(_this.eventToEdit.states[i]);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.saveEditedEvent = function () {
        var _this = this;
        this.parseEventActionType(this.eventEventTypeSelect, "event").then(function (et) {
            var e;
            e = et;
            _this.eventToEdit.event = e.event;
            _this.eventToEdit.eventType = e.eventType;
            console.log(_this.eventToEdit, _this.scriptInstance, "ET: ", e);
            _this.dataService.scriptEditor_updateSelectedScript(_this.scriptInstance);
        });
    };
    ScriptEditorComponent.prototype.scriptCreateNewEvent = function () {
        var _this = this;
        this.dataService.newEventModel().then(function (eventModel) {
            var em;
            em = eventModel;
            em.name = "UNSET EVENT";
            _this.scriptInstance.events.push(em);
        });
    };
    // ================================= //
    // ========= Action functions ===== //
    // =============================== //
    ScriptEditorComponent.prototype.scriptEditAction = function (actionName) {
        var _this = this;
        console.log("Editing Action: ", actionName);
        this.findAction(actionName).then(function (act) {
            var a;
            a = act;
            _this.actionActionTypeSelect = a.actionType + "/" + a.action;
            _this.actionToEdit = a;
            if (_this.actionToEdit.repeatable != typeof Boolean) {
                _this.actionToEdit.repeatable = true;
            }
            _this.toggleFormPanel("action");
        });
    };
    ScriptEditorComponent.prototype.scriptCreateNewAction = function () {
        var _this = this;
        this.dataService.newActionModel().then(function (actionModel) {
            var am;
            am = actionModel;
            am.name = "UNSET action";
            _this.scriptInstance.actions.push(am);
        });
    };
    ScriptEditorComponent.prototype.scriptDeleteAction = function (actionName) {
        for (var i = 0; i < this.scriptInstance.actions.length; i++) {
            if (this.scriptInstance.actions[i].name === actionName) {
                this.scriptInstance.actions.splice(i, 1);
                this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
                console.log("Deleting: ", actionName, this.scriptInstance.actions);
            }
        }
    };
    ScriptEditorComponent.prototype.scriptDeleteStateFromAction = function (state) {
        var index = this.actionToEdit.states.indexOf(state);
        if (index !== -1) {
            this.actionToEdit.states.splice(index, 1);
        }
        console.log("Deleting: ", state.name);
    };
    ScriptEditorComponent.prototype.addDependencyToAction = function (depName) {
        this.actionToEdit.dependencies.push(depName);
    };
    ScriptEditorComponent.prototype.deleteDependencyFromAction = function (depName) {
        var index = this.actionToEdit.dependencies.indexOf(depName);
        if (index !== -1) {
            this.actionToEdit.dependencies.splice(index, 1);
        }
    };
    ScriptEditorComponent.prototype.addStateToCurrentAction = function (stateName) {
        var _this = this;
        console.log(this.actionStateSelect);
        this.findScriptState(stateName).then(function (state) {
            _this.actionToEdit.states.push(state);
        });
    };
    ScriptEditorComponent.prototype.toggleActionState = function (stateName) {
        for (var i = 0; i < this.actionToEdit.states.length; i++) {
            if (this.actionToEdit.states[i].name === stateName) {
                this.actionToEdit.states[i].active = !this.actionToEdit.states[i]
                    .active;
                console.log(this.actionToEdit.states[i].name, this.actionToEdit.states[i].active);
                return;
            }
        }
    };
    ScriptEditorComponent.prototype.toggleActionRepeatable = function () {
        this.actionToEdit.repeatable = !this.actionToEdit.repeatable;
    };
    ScriptEditorComponent.prototype.addActiontoAction = function (actionName) {
        this.actionToEdit.actions.push(actionName);
    };
    ScriptEditorComponent.prototype.deleteActionFromAction = function (actionName) {
        var index = this.actionToEdit.actions.indexOf(actionName);
        if (index !== -1) {
            this.actionToEdit.actions.splice(index, 1);
        }
    };
    ScriptEditorComponent.prototype.saveEditedAction = function () {
        var _this = this;
        this.parseEventActionType(this.actionActionTypeSelect, "action").then(function (at) {
            var a;
            a = at;
            _this.actionToEdit.action = a.action;
            _this.actionToEdit.actionType = a.actionType;
            console.log(_this.actionToEdit, _this.scriptInstance, "AT: ", a);
            _this.dataService.scriptEditor_updateSelectedScript(_this.scriptInstance);
        });
    };
    // ================================= //
    // ========= Hint functions ===== //
    // =============================== //
    ScriptEditorComponent.prototype.scriptEditHint = function (hintName) {
        var _this = this;
        console.log("Editing Hint: ", hintName);
        this.findHint(hintName).then(function (hint) {
            _this.hintToEdit = hint;
            _this.toggleFormPanel("hint");
        });
    };
    ScriptEditorComponent.prototype.scriptDeleteHint = function (hintName) {
        for (var i = 0; i < this.scriptInstance.hints.length; i++) {
            if (this.scriptInstance.hints[i].name === hintName) {
                this.scriptInstance.hints.splice(i, 1);
                this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
                console.log("Deleting: ", hintName, this.scriptInstance.hints);
            }
        }
    };
    ScriptEditorComponent.prototype.saveEditedHint = function () {
        this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
    };
    ScriptEditorComponent.prototype.scriptCreateNewHint = function () {
        var _this = this;
        this.dataService.newHintModel().then(function (hintModel) {
            var hm;
            hm = hintModel;
            hm.name = "UNSET Hint";
            _this.scriptInstance.hints.push(hm);
        });
    };
    // ================================= //
    // ========= States functions ===== //
    // =============================== //
    ScriptEditorComponent.prototype.saveEditedState = function () {
        this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
    };
    ScriptEditorComponent.prototype.scriptEditState = function (stateName) {
        var _this = this;
        console.log("Editing State: ", stateName);
        this.findState(stateName).then(function (state) {
            _this.stateToEdit = state;
            _this.toggleFormPanel("state");
        });
    };
    ScriptEditorComponent.prototype.scriptDeleteState = function (stateName) {
        for (var i = 0; i < this.scriptInstance.states.length; i++) {
            if (this.scriptInstance.states[i].name === stateName) {
                this.scriptInstance.states.splice(i, 1);
                this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
                console.log("Deleting: ", stateName, this.scriptInstance.states);
            }
        }
    };
    ScriptEditorComponent.prototype.scriptCreateNewState = function () {
        var _this = this;
        this.dataService.newStateModel().then(function (stateModel) {
            var sm;
            sm = stateModel;
            sm.name = "UNSET State";
            _this.scriptInstance.states.push(sm);
        });
    };
    // ================================= //
    // ========= Triggers functions ===== //
    // =============================== //
    ScriptEditorComponent.prototype.scriptEditTrigger = function (triggerName) {
        var _this = this;
        console.log("Editing Trigger: ", triggerName);
        this.findTrigger(triggerName).then(function (trg) {
            _this.triggerToEdit = trg;
            _this.toggleFormPanel("trigger");
        });
    };
    ScriptEditorComponent.prototype.scriptDeleteTrigger = function (triggerName) {
        for (var i = 0; i < this.scriptInstance.triggers.length; i++) {
            if (this.scriptInstance.triggers[i].name === triggerName) {
                this.scriptInstance.triggers.splice(i, 1);
                this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
                console.log("Deleting: ", triggerName, this.scriptInstance.triggers);
            }
        }
    };
    ScriptEditorComponent.prototype.saveEditedTrigger = function () {
        this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
    };
    ScriptEditorComponent.prototype.scriptCreateNewTrigger = function () {
        var _this = this;
        this.dataService.newTriggerModel().then(function (triggerModel) {
            var tm;
            tm = triggerModel;
            tm.name = "UNSET Trigger";
            _this.scriptInstance.triggers.push(tm);
        });
    };
    ScriptEditorComponent.prototype.triggerToggleLoopAudio = function () {
        this.triggerToEdit.loop_audio = !this.triggerToEdit.loop_audio;
    };
    ScriptEditorComponent.prototype.triggerToggleLoopVideo = function () {
        this.triggerToEdit.loop_video = !this.triggerToEdit.loop_video;
    };
    ScriptEditorComponent.prototype.triggerTogglePauseTimer = function () {
        this.triggerToEdit.pause_timer = !this.triggerToEdit.pause_timer;
    };
    ScriptEditorComponent.prototype.triggerToggleRepeatable = function () {
        this.triggerToEdit.can_toggle = !this.triggerToEdit.can_toggle;
    };
    // ======================================= //
    // ========= Screen config functions ===== //
    // ======================================= //
    ScriptEditorComponent.prototype.scriptEditScreenConfig = function (screenConfigName) {
        var _this = this;
        console.log("Editing Screen Config: ", screenConfigName);
        this.findScreenConfig(screenConfigName).then(function (conf) {
            _this.screenConfigToEdit = conf;
            _this.toggleFormPanel("screenConfig");
        });
    };
    ScriptEditorComponent.prototype.scriptDeleteScreenConfig = function (screenConfig) {
        for (var i = 0; i < this.scriptInstance.screenConfigs.length; i++) {
            if (this.scriptInstance.screenConfigs[i].name === screenConfig) {
                this.scriptInstance.screenConfigs.splice(i, 1);
                this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
                console.log("Deleting: ", screenConfig, this.scriptInstance.screenConfigs);
            }
        }
    };
    ScriptEditorComponent.prototype.saveEditedScreenConfig = function () {
        this.dataService.scriptEditor_updateSelectedScript(this.scriptInstance);
        //update game screen config too
        this.server
            .updateScreenConfiguration(this.scriptInstance.name, this.screenConfigToEdit)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ScriptEditorComponent.prototype.scriptCreateNewScreenConfig = function () {
        var _this = this;
        this.dataService.newScreenConfigModel().then(function (screenConfigModel) {
            var sc;
            sc = screenConfigModel;
            sc.name = "UNSET ScreenConfig";
            _this.scriptInstance.ScreenConfigs.push(sc);
        });
    };
    ScriptEditorComponent.prototype.toggleScreenConfigShowtimer = function () {
        this.screenConfigToEdit.showTimer = !this.screenConfigToEdit.showTimer;
    };
    ScriptEditorComponent.prototype.toggleScreenConfigShowHints = function () {
        this.screenConfigToEdit.showHints = !this.screenConfigToEdit.showHints;
    };
    // ================ helpers =============//
    ScriptEditorComponent.prototype.findScriptState = function (stateName) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < _this.scriptInstance.states.length; i++) {
                if (_this.scriptInstance.states[i].name === stateName) {
                    resolve(_this.scriptInstance.states[i]);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.parseEventActionType = function (input, type) {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            var split = input.split("/");
            var result = {};
            if (type === "event") {
                result = {
                    eventType: split[0],
                    event: split[1]
                };
            }
            else {
                result = {
                    actionType: split[0],
                    action: split[1]
                };
            }
            resolve(result);
        });
    };
    ScriptEditorComponent.prototype.toggleFormPanel = function (panelType) {
        this.toggleFormPanelOff();
        switch (panelType) {
            case "event":
                this.eventLoaded = true;
                this.showEventsModal();
                break;
            case "action":
                this.actionLoaded = true;
                this.showActionsModal();
                break;
            case "trigger":
                this.triggerLoaded = true;
                this.showTriggersModal();
                break;
            case "hint":
                this.hintLoaded = true;
                this.showHintsModal();
                break;
            case "state":
                this.stateLoaded = true;
                this.showStatesModal();
                break;
            case "screenConfig":
                this.screenConfigLoaded = true;
                this.showScreenConfigModal();
            default:
                break;
        }
    };
    ScriptEditorComponent.prototype.toggleFormPanelOff = function () {
        this.eventLoaded = false;
        this.actionLoaded = false;
        this.hintLoaded = false;
        this.triggerLoaded = false;
        this.stateLoaded = false;
    };
    ScriptEditorComponent.prototype.findEvent = function (name) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptInstance.events; _i < _a.length; _i++) {
                var evt = _a[_i];
                if (evt.name === name) {
                    resolve(evt);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.findAction = function (name) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptInstance.actions; _i < _a.length; _i++) {
                var act = _a[_i];
                if (act.name === name) {
                    resolve(act);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.findHint = function (name) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptInstance.hints; _i < _a.length; _i++) {
                var hint = _a[_i];
                if (hint.name === name) {
                    resolve(hint);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.findState = function (name) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptInstance.states; _i < _a.length; _i++) {
                var state = _a[_i];
                if (state.name === name) {
                    resolve(state);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.findTrigger = function (name) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptInstance.triggers; _i < _a.length; _i++) {
                var trg = _a[_i];
                if (trg.name === name) {
                    resolve(trg);
                }
            }
        });
    };
    ScriptEditorComponent.prototype.findScreenConfig = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var _i = 0, _a = _this.scriptInstance.screenConfigs; _i < _a.length; _i++) {
                var conf = _a[_i];
                if (conf.name === name) {
                    resolve(conf);
                }
            }
        });
    };
    // ========== MODALS ============//
    ScriptEditorComponent.prototype.showActionsModal = function () {
        this.modalService.open(this.actionModal, { size: "lg" });
    };
    ScriptEditorComponent.prototype.showEventsModal = function () {
        this.modalService.open(this.eventModal, { size: "lg" });
    };
    ScriptEditorComponent.prototype.showStatesModal = function () {
        this.modalService.open(this.stateModal, { size: "lg" });
    };
    ScriptEditorComponent.prototype.showHintsModal = function () {
        this.modalService.open(this.hintModal, { size: "lg" });
    };
    ScriptEditorComponent.prototype.showTriggersModal = function () {
        this.modalService.open(this.triggerModal, { size: "lg" });
    };
    ScriptEditorComponent.prototype.showNewScriptNameModal = function () {
        this.modalService.open(this.newScriptModal, { size: "lg" });
        this.newScriptName = "";
    };
    ScriptEditorComponent.prototype.showScreenConfigModal = function () {
        this.modalService.open(this.screenConfigModal, { size: "lg" });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "actionModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "eventModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("triggerModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "triggerModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("stateModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "stateModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("hintModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "hintModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("newScriptModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "newScriptModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("screenConfigModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScriptEditorComponent.prototype, "screenConfigModal", void 0);
    ScriptEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-script-editor",
            template: __webpack_require__(/*! ./script-editor.component.html */ "./src/app/script-editor/script-editor.component.html"),
            styles: [__webpack_require__(/*! ./script-editor.component.css */ "./src/app/script-editor/script-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"],
            _sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"],
            _init_service__WEBPACK_IMPORTED_MODULE_5__["InitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], ScriptEditorComponent);
    return ScriptEditorComponent;
}());



/***/ }),

/***/ "./src/app/server.service.ts":
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");





var ServerService = /** @class */ (function () {
    function ServerService(http, config) {
        this.http = http;
        this.config = config;
        this.api = "http://192.168.0.180:4300";
        // Seleceted will throw errors otherwise... TODO: put elsewhere
        this.selectedScript = {
            name: "Select a script",
            timeUpdate: { hrs: 0, min: 0, sec: 0 }
        };
        this.observableScript = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.selectedScript);
        this.scriptInstances = [];
        this.api = config.getApiUrl();
    }
    ServerService.prototype.scriptChange = function () {
        this.observableScript.next(this.selectedScript);
    };
    ServerService.prototype.setSelectedScript = function (script) {
        this.selectedScript = script;
        this.scriptChange();
    };
    // Script CRUD
    ServerService.prototype.createScript = function (script) {
        return this.http.post(this.api + "/script", script);
    };
    ServerService.prototype.loadScript = function (name) {
        var _this = this;
        this.http.get(this.api + "/game/" + name).subscribe(function (scriptInstance) {
            _this.selectedScriptInstance = scriptInstance;
            console.log(scriptInstance);
        });
        return this.http.get(this.api + "/script/" + name);
    };
    ServerService.prototype.loadScripts = function () {
        var _this = this;
        this.http.get(this.api + "/game").subscribe(function (scriptInstances) {
            _this.scriptInstances = scriptInstances;
        });
        return this.http.get(this.api + "/script");
    };
    ServerService.prototype.updateScript = function (script) {
        return this.http.put(this.api + "/script", script);
    };
    ServerService.prototype.deleteScript = function (script) {
        return this.http.delete(this.api + "/script/" + script);
    };
    ServerService.prototype.getFreshScriptsForEditing = function () {
        return this.http.get(this.api + "/scriptf");
    };
    // ==========================================//
    // ======== Branches =======================//
    // =========================================//
    ServerService.prototype.createBranch = function (branch) {
        return this.http.post(this.api + "/branch", branch);
    };
    ServerService.prototype.readBranch = function (id) {
        console.log("Server reading branch", id);
        return this.http.get(this.api + "/branch/" + id);
    };
    ServerService.prototype.readAllBranches = function () {
        console.log("Server reading branches");
        return this.http.get(this.api + "/branch");
    };
    ServerService.prototype.updateBranch = function (branch) {
        return this.http.put(this.api + "/branch", branch);
    };
    ServerService.prototype.deleteBranch = function (id) {
        return this.http.delete(this.api + "/branch/" + id);
    };
    ServerService.prototype.branchDeleteMedia = function (msg) {
        return this.http.post(this.api + "/branch/media/delete", msg);
    };
    ServerService.prototype.branchUploadVideo = function (msg) {
        return this.http.post(this.api + "/branch/video", msg);
    };
    ServerService.prototype.branchUploadAudio = function (msg) {
        return this.http.post(this.api + "/branch/audio", msg);
    };
    // ==========================================//
    // ======== Nodes =======================//
    // =========================================//
    ServerService.prototype.getBridgeNodes = function (branchId) {
        return this.http.get(this.api + "/branch/nodes/" + branchId);
    };
    ServerService.prototype.editNodeCommonId = function (msg) {
        return this.http.post(this.api + "/branch/nodes/direct", msg);
    };
    ServerService.prototype.editNodeType = function (msg) {
        return this.http.post(this.api + "/branch/nodes/direct", msg);
    };
    ServerService.prototype.sendNodeAction = function (msg) {
        return this.http.post(this.api + "/branch/nodes/direct", msg);
    };
    // ==========================================//
    // ======== Overview =======================//
    // =========================================//
    ServerService.prototype.loadOverview = function (scriptName) {
        return this.http.get(this.api + "/getOverview/" + scriptName);
    };
    ServerService.prototype.sendForcedAction = function (scriptName, actionName) {
        var msg = {
            name: scriptName,
            forceAction: actionName
        };
        console.log(msg);
        // return this.http.post(`${this.api}/force/action`, msg);
        return this.http.post(this.api + "/game/force/action", msg);
    };
    ServerService.prototype.sendForcedEvent = function (scriptName, eventName, completedTime) {
        var msg = {
            name: scriptName,
            forceEvent: eventName,
            completedTime: completedTime
        };
        console.log(msg);
        // return this.http.post(`${this.api}/force/event`, msg);
        return this.http.post(this.api + "/game/force/event", msg);
    };
    ServerService.prototype.startCustomTime = function (scriptName, h, m, s) {
        var msg = {
            name: scriptName,
            time: { hours: h, minutes: m, seconds: s }
        };
        return this.http.put(this.api + "/game/time", msg);
    };
    ServerService.prototype.updateCustomTime = function (scriptName, h, m, s) {
        var msg = {
            name: scriptName,
            update: "true",
            time: { hours: h, minutes: m, seconds: s }
        };
        return this.http.put(this.api + "/game/time", msg);
    };
    ServerService.prototype.startNewGame = function (scriptName, h, m, s) {
        var msg = {
            name: scriptName,
            timeLimit: {
                hours: h,
                minutes: m,
                seconds: s
            }
        };
        console.log(msg);
        return this.http.post(this.api + "/game", msg);
    };
    ServerService.prototype.pauseGameTimer = function (scriptName) {
        return this.http.get(this.api + "/game/time/pause/" + scriptName);
    };
    ServerService.prototype.resumeGameTimer = function (scriptName) {
        return this.http.get(this.api + "/game/time/resume/" + scriptName);
    };
    ServerService.prototype.endGame = function (scriptName) {
        return this.http.delete(this.api + "/game/" + scriptName);
    };
    ServerService.prototype.updateLocalScripts = function (instanceUpdate) {
        var _this = this;
        var exist = false;
        this.scriptInstances.forEach(function (script) {
            if (script.name === instanceUpdate.name) {
                script = instanceUpdate;
                if (_this.selectedScript.name === instanceUpdate.name) {
                    _this.selectedScript.timeUpdate = instanceUpdate.timeUpdate;
                }
                exist = true;
            }
        });
        if (!exist) {
            this.scriptInstances.push(instanceUpdate);
        }
    };
    ServerService.prototype.updateScreenConfiguration = function (scriptName, config) {
        var msg = {
            config: config,
            scriptName: scriptName,
            screenName: config.name
        };
        return this.http.post(this.api + "/branch/config", msg);
    };
    // ======================================================================= //
    // ========================== TRIGGERS  ================================== //
    // ======================================================================= //
    ServerService.prototype.triggerForceTrigger = function (msg) {
        console.log("Forcing trigger: ", msg);
        return this.http.post(this.api + "/branch/trigger", msg);
    };
    ServerService.prototype.triggerPlayAudio = function (msg) {
        console.log("Playing: ", msg);
        return this.http.post(this.api + "/branch/trigger/audio", msg);
    };
    ServerService.prototype.triggerPlayVideo = function (msg) {
        console.log("Playing: ", msg);
        return this.http.post(this.api + "/branch/trigger/video", msg);
    };
    ServerService.prototype.triggerSendHttpRequest = function (msg) {
        return this.http.post(this.api + "/trigger/request", msg);
    };
    // ======================================================================= //
    // ========================== HINTS  ===================================== //
    // ======================================================================= //
    ServerService.prototype.hintSendHint = function (msg) {
        console.log("SendingHint: ", msg);
        return this.http.post(this.api + "/branch/hint", msg);
    };
    ServerService.prototype.hintSendCustomHint = function (msg) {
        console.log(msg);
        return this.http.post(this.api + "/branch/hint", msg);
    };
    ServerService.prototype.clearHint = function (msg) {
        console.log(msg);
        return this.http.post(this.api + "/branch/hint/clear", msg);
    };
    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div id=\"instance_list\">\r\n        <h3>Branches</h3>\r\n        <div class=\"card\" style=\"width: 100%;\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li *ngFor=\"let branch of branchList\" class=\"list-group-item\">\r\n              <h4>{{ branch?.name }}</h4>\r\n              <ul class=\"list-group list-group-flush\">\r\n                <li>ID: {{ branch?.id }}</li>\r\n                <li>IP ADDRESS: {{ branch?.ip_address }}</li>\r\n              </ul>\r\n              <br />\r\n              <button class=\"btn btn-success\" (click)=\"loadBranch(branch.id)\">\r\n                Edit\r\n              </button>\r\n              <button class=\"btn btn-danger\" (click)=\"deleteBranch(branch.id)\">\r\n                Delete\r\n              </button>\r\n              <button class=\"btn btn-outline-info\" (click)=\"configBranch(branch.id)\">\r\n                Config\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <button class=\"btn btn-success\" (click)=\"showNewBranchNameModal()\">\r\n          Add new Branch\r\n        </button>\r\n        <br />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div>\r\n\r\n\r\n        <!-- BRANCH INFO -->\r\n\r\n\r\n        <div class=\"card\" *ngIf=\"selectedBranch?.name != undefined\">\r\n          <div class=\"card-header\">\r\n            <h2>{{selectedBranch?.name}}</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Branch ID: </h5>\r\n            <p class=\"card-text\">{{selectedBranch?.id}}</p>\r\n            <h5 class=\"card-title\">IP Address : </h5>\r\n            <p class=\"card-text\">{{selectedBranch?.ip_address}}</p>\r\n            <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\r\n            <hr />\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Video</h5>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                      <li class=\"list-group-item\" *ngFor=\"let video of selectedBranch.config.media?.video\">\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"branchDeleteVideo(video)\">Delete</button>\r\n                        {{video}}\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r\n                      </div>\r\n                      <div class=\"custom-file\">\r\n                        <input id='update_image' class=\"custom-file-input\" (change)='onFileSelected($event);setMediaType(\"video\")'\r\n                          type=\"file\" name='file'>\r\n                        <!-- <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\"> -->\r\n                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Select Video</label>\r\n                      </div>\r\n                      <button class=\"btn btn-sm btn-primary\" (click)=\"setMediaType('video');updateMedia()\">Upload</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Audio</h5>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                      <li class=\"list-group-item\" *ngFor=\"let audio of selectedBranch.config.media?.audio\">\r\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"branchDeleteVideo(audio)\">Delete</button>\r\n                        {{audio}}\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r\n                      </div>\r\n                      <div class=\"custom-file\">\r\n                        <!-- <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\"> -->\r\n                        <input id='update_image' class=\"custom-file-input\" (change)='onFileSelected($event);setMediaType(\"audio\")'\r\n                          type=\"file\" name='file'>\r\n                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\r\n                      </div>\r\n                      <button class=\"btn btn-sm btn-primary\" (click)=\"setMediaType('audio');updateMedia()\">Upload</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <hr />\r\n\r\n\r\n\r\n        <!-- BRANCH NODE MESHES -->\r\n        <div *ngFor=\"let node of selectedBranch?.nodes\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">Bridge ID: {{ node?.id }}</li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <div class=\"input-group input-group-sm\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">Branch Address :</span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"branch_address\" value=\"{{ node.ipAddress }}\" />\r\n              </div>\r\n              <!-- IP ADDRESS: {{node?.ipAddress}} -->\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <div class=\"input-group input-group-sm\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">Bridge Type :</span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"branch_address\" value=\"{{ node?.nodeType }}\" />\r\n              </div>\r\n\r\n              <!-- Bridge Type: {{node?.nodeType}} -->\r\n            </li>\r\n          </ul>\r\n          <h4>Mesh Nodes:</h4>\r\n          <div *ngFor=\"let mNode of selectedBranchMeshNodes\">\r\n            <div class=\"card\">\r\n              <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">\r\n                  <h5>Hardware Id:</h5>\r\n                  {{ mNode?.hardwareId }}\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <h5>Common Id:</h5>\r\n                  {{ mNode?.id }}\r\n\r\n\r\n\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"input-group input-group-sm\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">Node Id</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" id=\"mNodeId_{{mNode.id}}\" value=\"{{ mNode.id }}\" />\r\n                  </div>\r\n                  <button class=\"btn btn-sm-success\" (click)=\"editNodeId(node.id, node.nodeType, mNode.id)\">Change</button>\r\n                  <!-- IP ADDRESS: {{node?.ipAddress}} -->\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <h5>Node Type:</h5>\r\n                  {{ mNode?.type }}\r\n\r\n                  <select class=\"selectpicker form-control\" id=\"mNodeSelectType_{{mNode.id}}\">\r\n                    <option selected=\"selected\">{{ mNode?.type }}</option>\r\n                    <option *ngFor=\"let type of nodeTypes\">{{type}}</option>\r\n                  </select>\r\n                  <button class=\"btn btn-sm-success\" (click)=\"editNodeType(node.id, node.nodeType, mNode.id)\">Change</button>\r\n\r\n\r\n\r\n\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <h5>Last Updated:</h5>\r\n                  {{ mNode?.lastUpdated | date: \"medium\" }}\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <h5>Free Memory:</h5>\r\n                  {{ mNode?.memory }}\r\n                </li>\r\n\r\n                <li class=\"list-group-item\">\r\n                  <h3>Send Action</h3>\r\n\r\n                  <!-- Relay controls -->\r\n                  <div *ngIf=\"mNode.type == 'relay'\">\r\n                    <div *ngFor=\"let action of actionRelayActions\">\r\n                      <button *ngFor=\"let data of actionRelayData\" (click)=\"sendActionToNode(node.id, node.nodeType, mNode.id, action, 'relay', data)\">{{action}}\r\n                        {{data}}</button>\r\n                    </div>\r\n\r\n\r\n\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <hr />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #newBranchModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">New Script</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <h3>Branch Name</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"hintName\"> Name </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintName\" [(ngModel)]=\"newBranchName\" placeholder=\"Branch Name....\" />\r\n      </div>\r\n\r\n      <h3>Branch IP Address</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"hintName\"> IP Address </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintName\" [(ngModel)]=\"newBranchIp\" placeholder=\"E.g. http://192.168.0.10:4300\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-default\" (click)=\"createNewBranch(); modal.close('Close click')\">\r\n        Save\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">\r\n        Close\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #branchConfigModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">{{ selectedBranch?.name }}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"input-group input-group-sm\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Branch Name :</span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintName\" [(ngModel)]=\"selectedBranch.name\" placeholder=\"Branch Name....\" />\r\n      </div>\r\n\r\n      <div class=\"input-group input-group-sm\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Branch IP Address :</span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"branch_address\" [(ngModel)]=\"selectedBranch.ip_address\" value=\"{{ selectedBranch.ipAddress }}\" />\r\n      </div>\r\n\r\n      <div class=\"input-group input-group-sm\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Root Server IP :</span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"hintName\" [(ngModel)]=\"selectedBranch.config.server_url\"\r\n          placeholder=\"E.g. http://192.168.0.10:4300\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-default\" (click)=\"updateBRanchConfig(); modal.close('Close click')\">\r\n        Save\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">\r\n        Close\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        // Editing nodes
        this.nodeTypes = [
            "relay",
            "bridge",
            "button",
            "keypad",
            "magSwitch",
            "rfid",
            "mp3"
        ];
        this.selectedBranchMeshNodes = [];
        // Action packets
        this.actionRelayData = [15, 2, 4, 5, 27, 14, 12, 13];
        this.actionRelayActions = ["start", "stop", "toggleA"];
        this.actionRelayActionType = "relay";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.branchListSubscribe();
        this.branchSubscribe();
        this.branchLoaded = false;
    };
    SettingsComponent.prototype.onFileSelected = function (event) {
        event.preventDefault();
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.selectedFilePath = event.target.files[0].path;
    };
    SettingsComponent.prototype.updateMedia = function () {
        var _this = this;
        // event.preventDefault();
        this.prepareForm().then(function (fd) {
            if (_this.mediaType == "video") {
                _this.dataService.branch_uploadVideo(fd);
            }
            else if (_this.mediaType == "audio") {
                _this.dataService.branch_uploadAudio(fd);
            }
            _this.mediaType = "none";
        });
    };
    SettingsComponent.prototype.prepareForm = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fd = new FormData();
            fd.append("file", _this.selectedFile, _this.selectedFile.name);
            fd.append("branchIp", _this.selectedBranch.ip_address);
            console.log(_this.selectedFile, _this.selectedFile.name);
            resolve(fd);
        });
    };
    SettingsComponent.prototype.setMediaType = function (type) {
        this.mediaType = type;
    };
    SettingsComponent.prototype.branchListSubscribe = function () {
        var _this = this;
        this.dataService.branch_serverGetAllBranches();
        this.branchListSubscription = this.dataService.branch_observableBranchList.subscribe(function (branchList) {
            console.log(branchList);
            _this.branchList = branchList;
            if (branchList === undefined) {
                return;
            }
        });
    };
    SettingsComponent.prototype.branchSubscribe = function () {
        var _this = this;
        this.branchSubscription = this.dataService.branch_observableSelectedBranch.subscribe(function (branch) {
            if (branch != undefined) {
                console.log("GOT BRANCH");
                if (branch.nodes != undefined) {
                    console.log("GOT NODE");
                    for (var i = 0; i < branch.nodes.length; i++) {
                        var node = branch.nodes[i];
                        _this.makeArr(node.meshNodes).then(function (arr) { });
                    }
                }
            }
            _this.selectedBranch = branch;
            console.log("selected branch for editing: ", branch);
            _this.branchLoaded = true;
        });
    };
    SettingsComponent.prototype.makeArr = function (meshNodes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.selectedBranchMeshNodes = [];
            var nodes = [];
            for (var x in meshNodes) {
                console.log("pushing", x);
                _this.selectedBranchMeshNodes.push(meshNodes[x]);
                nodes.push(meshNodes[x]);
            }
            resolve(nodes);
        });
    };
    SettingsComponent.prototype.loadBranch = function (id) {
        this.dataService.branch_setSelectedBranch(id);
        this.dataService.branch_getAllBranchNodes(id);
        // this is now read as selectedBranch
        this.branchLoaded = true;
    };
    SettingsComponent.prototype.deleteBranch = function (id) {
        this.dataService.branch_deleteBranch(id);
    };
    SettingsComponent.prototype.configBranch = function (id) {
        this.loadBranch(id);
        this.modalService.open(this.branchConfigModal, { size: "lg" });
    };
    SettingsComponent.prototype.updateBRanchConfig = function () {
        this.dataService.branch_updateSelectedBranch(this.selectedBranch);
    };
    SettingsComponent.prototype.showNewBranchNameModal = function () {
        this.modalService.open(this.newBranchModal, { size: "lg" });
        this.newBranchName = "";
        this.newBranchIp = "";
    };
    SettingsComponent.prototype.createNewBranch = function () {
        this.dataService.branch_createNewBranch(this.newBranchName, this.newBranchIp);
        this.dataService.branch_serverGetAllBranches();
    };
    SettingsComponent.prototype.branchDeleteVideo = function (name) {
        this.dataService.branch_deleteVideo(name, this.selectedBranch.ip_address);
    };
    SettingsComponent.prototype.branchDeleteAudio = function (name) {
        this.dataService.branch_deleteAudio(name, this.selectedBranch.ipaddress);
    };
    // =============================
    // ===== QUERY NODE FUNCTIONS ==
    // =============================
    SettingsComponent.prototype.getNodeSubconnections = function (bridgeId) { };
    SettingsComponent.prototype.getNodeNodeList = function (bridgeId) {
        //type = getMeshNodes
    };
    // =============================
    // ====== EDIT NODE FUNCTIONS ==
    // =============================
    SettingsComponent.prototype.editNodeBranchAddress = function (bridgeId, ipaddress) {
        //ip address as int array i.e. [192,168,0,10]
    };
    SettingsComponent.prototype.editNodeId = function (bridgeId, bridgeType, nodeId) {
        var _this = this;
        // let newId = $(`#mNodeId_${nodeId}`).val();
        this.getElemValue("#mNodeId_" + nodeId).then(function (newId) {
            var node = {
                branchAddress: _this.selectedBranch.ip_address,
                bridgeId: bridgeId,
                bridgeType: bridgeType,
                nodeId: nodeId,
                newId: newId
            };
            console.log(node);
            _this.dataService.branch_editNodeCommonId(node);
        });
    };
    SettingsComponent.prototype.editNodeType = function (bridgeId, bridgeType, nodeId) {
        var newType = jquery__WEBPACK_IMPORTED_MODULE_4__("#mNodeSelectType_" + nodeId + " option:selected").text();
        var node = {
            branchAddress: this.selectedBranch.ip_address,
            bridgeId: bridgeId,
            bridgeType: bridgeType,
            nodeId: nodeId,
            newType: newType
        };
        this.dataService.branch_editNodeType(node);
    };
    SettingsComponent.prototype.getElemValue = function (elemId) {
        return new Promise(function (resolve, reject) {
            var result = jquery__WEBPACK_IMPORTED_MODULE_4__(elemId).val();
            resolve(result);
            // while (result == "" || result == undefined) {
            //   result = $(elemId).val();
            //   if (result != "" && result != undefined) {
            //     resolve(result);
            //     return;
            //   }
            // }
        });
    };
    SettingsComponent.prototype.sendActionToNode = function (bridgeId, bridgeType, nodeId, action, actionType, data) {
        var node = {
            branchAddress: this.selectedBranch.ip_address,
            bridgeId: bridgeId,
            bridgeType: bridgeType,
            nodeId: nodeId,
            action: action,
            actionType: actionType,
            data: data
        };
        this.dataService.branch_sendNodeAction(node);
    };
    SettingsComponent.prototype.getMeshNodeToEdit = function (hardwareId, cb) {
        for (var i = 0; i < this.selectedBranchMeshNodes.length; i++) {
            var node = this.selectedBranchMeshNodes[i];
            if (node.hardwareId === hardwareId) {
                cb(node);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("newBranchModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingsComponent.prototype, "newBranchModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("branchConfigModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingsComponent.prototype, "branchConfigModal", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], SettingsComponent);
    return SettingsComponent;
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
    /** Send a message over sockets */
    // sendMessage(channel_id, message, user, user_id, image = "") {
    //   console.log("MEssage sending :", message);
    //   const msg = {
    //     message: message,
    //     user: user,
    //     user_id: user_id,
    //     image: image
    //   };
    //   this.socket.emit("message", {
    //     room: channel_id,
    //     message: msg
    //   });
    // }
    SocketsService.prototype.sendForcedEvent = function (scriptName, eventName) {
        var msg = "{\"name\": \"" + scriptName + "\", \"forceEvent\": \"true\", \"eventName\":\"" + eventName + "\"}";
        this.socket.emit("message", msg);
    };
    SocketsService.prototype.sendForcedAction = function (scriptName, actionName) {
        var msg = "{\"name\": \"" + scriptName + "\", \"forceAction\": true, \"actionName\":\"" + actionName + "\"}";
        this.socket.emit("message", msg);
    };
    /** Join a channel */
    SocketsService.prototype.join_channel = function (channel_id, username) {
        var data = {
            id: channel_id,
            username: username
        };
        this.socket.emit("subscribe", data, function (dat) {
            console.log("JOINING CHANNEL");
            console.log(dat);
        });
    };
    /** Leave a channel */
    SocketsService.prototype.leave_channel = function (channel_id, username) {
        var data = {
            id: channel_id,
            username: username
        };
        this.socket.emit("unsubscribe", data, function (dat) {
            console.log(dat);
        });
    };
    /** Get all messages for the channel */
    SocketsService.prototype.getMessages = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on("message", function (message) {
                // console.log("Socket", message);
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

module.exports = __webpack_require__(/*! C:\Users\SeraphimEscape\Desktop\DEV\SeraphimRootServerFrontEnd\SeraphimFrontEnd\src\main.ts */"./src/main.ts");


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