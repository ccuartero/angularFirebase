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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/news-list/news-list.component */ "./src/app/component/news-list/news-list.component.ts");
/* harmony import */ var _component_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/archive-list/archive-list.component */ "./src/app/component/archive-list/archive-list.component.ts");



// Use RouterModule, Routes for activating routing in angular

// Include components for in which router service to be used



// Routes array define component along with the path name for url
var routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'news-list', component: _component_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__["NewsListComponent"] },
    { path: 'archive-list', component: _component_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_6__["ArchiveListComponent"] },
];
// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
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

module.exports = "<mat-toolbar color=\"primary\">\n\n  <div fxFlex fxLayout=\"row\">\n    <button routerLink=\"/\" mat-icon-button>\n      <mat-icon>home</mat-icon>\n    </button>\n    <div fxFlex></div>\n  </div>\n\n  <span>News App</span>\n\n  <div fxFlex fxLayout=\"row\">\n    <div fxFlex></div>\n\n    <div class=\"px-5\">\n      <button mat-raised-button color=\"accent\" routerLink=\"/news-list\">News</button>\n    </div>\n    <div class=\"px-5\">\n      <button mat-raised-button color=\"accent\" routerLink=\"/archive-list\">Archive</button>\n    </div>\n  </div>\n</mat-toolbar>\n\n\n<!-- Main content -->\n<main role=\"main\">\n  <!-- Use router template to show the components for which router service is activated -->\n  <router-outlet></router-outlet>\n</main>\n"

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
        this.title = 'newsFront';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/news-list/news-list.component */ "./src/app/component/news-list/news-list.component.ts");
/* harmony import */ var _component_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/archive-list/archive-list.component */ "./src/app/component/archive-list/archive-list.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");




// Firebase Modules



// Externar resources



// Components




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _component_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_11__["NewsListComponent"],
                _component_archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_12__["ArchiveListComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/archive-list/archive-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/archive-list/archive-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hcmNoaXZlLWxpc3QvYXJjaGl2ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/archive-list/archive-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/archive-list/archive-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-20\">\n\n  <mat-card-title>\n    <div fxLayout=\"row\" *ngIf=\"Archived\">\n      List of Archived ({{Archived.length}})\n    </div>\n  </mat-card-title>\n\n  <mat-divider></mat-divider>\n\n  <mat-card-content>\n    <mat-list>\n      <div *ngFor=\"let item of Archived\">\n        <mat-list-item>\n          <span>\n            <span class=\"fwb\">{{item.title}}</span> - {{item.body}}\n          </span>\n\n          <div fxFlex></div>\n\n          <mat-chip-list>\n            <mat-chip>{{ item.date | date:\"dd/MM/yyyy\" }}</mat-chip>\n          </mat-chip-list>\n\n          <button mat-icon-button color=\"primary\" matTooltip=\"Delete\" (click)=\"DeleteArchived(item.$key)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n      </div>\n    </mat-list>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/component/archive-list/archive-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/archive-list/archive-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ArchiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveListComponent", function() { return ArchiveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/news.service */ "./src/app/service/news.service.ts");



var ArchiveListComponent = /** @class */ (function () {
    function ArchiveListComponent(newsApi) {
        this.newsApi = newsApi;
    }
    ArchiveListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var s = this.newsApi.GetNewList();
        s.snapshotChanges().subscribe(function (data) {
            _this.Archived = [];
            data.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                // if(a.archived && a.archived != false) { // Filter news archived
                //   this.Archived.push(a as News); // Insert news
                // }
            });
            // Order items by date
            _this.OrderNewsByDate();
        });
    };
    ArchiveListComponent.prototype.DeleteArchived = function (id) {
        this.newsApi.DeleteNew(id);
    };
    ArchiveListComponent.prototype.OrderNewsByDate = function () {
        this.Archived = this.Archived.sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    };
    ArchiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archive-list',
            template: __webpack_require__(/*! ./archive-list.component.html */ "./src/app/component/archive-list/archive-list.component.html"),
            styles: [__webpack_require__(/*! ./archive-list.component.css */ "./src/app/component/archive-list/archive-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], ArchiveListComponent);
    return ArchiveListComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeCard {\r\n  min-height: 20vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVDYXJkIHtcclxuICBtaW4taGVpZ2h0OiAyMHZoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"margin-20\">\n  <div fxFlex class=\"px-5 clickable\" routerLink=\"/news-list\">\n    <mat-card class=\"homeCard\" fxLayoutAlign=\"center center\">\n      <mat-card-title>News</mat-card-title>\n    </mat-card>\n  </div>\n\n  <div fxFlex class=\"px-5 clickable\" routerLink=\"/archive-list\">\n    <mat-card class=\"homeCard\" fxLayoutAlign=\"center center\">\n      <mat-card-title>Archived</mat-card-title>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/news-list/news-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/news-list/news-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/news-list/news-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/news-list/news-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"margin-20\">\n\n  <mat-card-title>\n    <div fxLayout=\"row\" *ngIf=\"News\">\n      List of News ({{News.length}})\n    </div>\n  </mat-card-title>\n\n  <mat-divider></mat-divider>\n\n  <mat-card-content>\n    <mat-list>\n      <div *ngFor=\"let item of News\">\n        <mat-list-item>\n          <span>\n            <span class=\"fwb\">{{item.title}}</span> - {{item.body}}\n          </span>\n\n          <div fxFlex></div>\n\n          <mat-chip-list>\n            <mat-chip>{{ item.date | date:\"dd/MM/yyyy\" }}</mat-chip>\n          </mat-chip-list>\n\n          <button mat-icon-button color=\"primary\" matTooltip=\"Archive\" (click)=\"ArchiveNew(item.$key)\">\n            <mat-icon>archive</mat-icon>\n          </button>\n\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n      </div>\n    </mat-list>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/component/news-list/news-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/news-list/news-list.component.ts ***!
  \************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/news.service */ "./src/app/service/news.service.ts");



var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(newsApi) {
        this.newsApi = newsApi;
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var s = this.newsApi.GetNewList();
        s.snapshotChanges().subscribe(function (data) {
            _this.News = [];
            data.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                if (!a['archived'] || a['archived'] == false) { // Filter news not archived
                    _this.News.push(a); // Insert news
                }
            });
            // Order items by date
            _this.OrderNewsByDate();
        });
    };
    NewsListComponent.prototype.ArchiveNew = function (id) {
        this.newsApi.ArchiveNew(id);
    };
    NewsListComponent.prototype.OrderNewsByDate = function () {
        this.News = this.News.sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    };
    NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/component/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.css */ "./src/app/component/news-list/news-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/service/news.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/news.service.ts ***!
  \*****************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");


 // Firebase modules for Database, Data list and Single object
var NewsService = /** @class */ (function () {
    function NewsService(db) {
        this.db = db;
    }
    // Fetch News List
    NewsService.prototype.GetNewList = function () {
        this.newsRef = this.db.list('News-list');
        return this.newsRef;
    };
    // Update New Object
    NewsService.prototype.ArchiveNew = function (id) {
        this.newRef = this.db.object('News-list/' + id);
        this.newRef.update({
            archived: true
        });
    };
    // Delete News Object
    NewsService.prototype.DeleteNew = function (id) {
        this.newRef = this.db.object('News-list/' + id);
        this.newRef.remove();
    };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], NewsService);
    return NewsService;
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBbKChl53Zn0Af_0onaUn0lnKQ5m2rMttg",
        authDomain: "news-c1eed.firebaseapp.com",
        databaseURL: "https://news-c1eed.firebaseio.com",
        projectId: "news-c1eed",
        storageBucket: "news-c1eed.appspot.com",
        messagingSenderId: "614472918609"
    }
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

module.exports = __webpack_require__(/*! D:\Proyectos\newsFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map