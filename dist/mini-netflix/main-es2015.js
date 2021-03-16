(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed\">\r\n  <a [routerLink]=\"['/']\">\r\n    <img class=\"logo\" src=\"../assets/images/logo.gif\" alt=\"{{ title }}\">\r\n  </a>\r\n  <nav class=\"topnav\">\r\n    <ul class=\"left\">\r\n      <li><a [routerLink]=\"['/movies']\">MOVIES</a></li>\r\n      <li><a [routerLink]=\"['/favourites']\">MY FAVOURITES</a></li>\r\n    </ul>\r\n\r\n    <div class=\"right\" *ngIf=\"!auth.loggedIn\">\r\n      <a class=\"btn\" [routerLink]=\"['/signin']\">SIGN IN</a>\r\n    </div>\r\n    <div class=\"right\" *ngIf=\"auth.loggedIn\">\r\n      <a class=\"btn\" (click)=\"logout()\">SIGN OUT</a>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<div class='container main-content'>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer class=\"footer\">\r\n  Designed and Developed By <cite>Odinaka Joy</cite> - ALCWithGoogle\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/favourite-movies/favourite-movies.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/favourite-movies/favourite-movies.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"heading\">\r\n  <h2 class=\"title\">All My Favourite Movies...</h2>\r\n</div>\r\n\r\n<section *ngIf=\"localMovies && localMovies.length\">\r\n  <div class=\"alert alert-warning alert-dismissible fade show\" *ngIf=\"deleteMessage\" role=\"alert\">\r\n    <strong>{{ deleteMessage }}</strong>\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"row wrapper mb-5 mt-5\" *ngFor=\"let movie of localMovies | paginate: config\">\r\n    <div class='col-md-4'>\r\n      <img src=\"{{ movie.image.url }}\" alt=\"{{ movie.image.name }}\" title=\"{{ movie.title }}\" class=\"grid-img\">\r\n    </div>\r\n    <div class='col-md-8 left'>\r\n      <div class=\"crop\" title=\"rating\">\r\n        <div>\r\n          <span class=\"fa fa-star\"></span>\r\n          <span class=\"fa fa-star\"></span>\r\n          <span class=\"fa fa-star\"></span>\r\n          <span class=\"fa fa-star\"></span>\r\n          <span class=\"fa fa-star\"></span>\r\n        </div>\r\n      </div>\r\n      <h3><span class=\"red\">Title:</span> {{ movie.title | uppercase }}</h3>\r\n      <p><span class=\"red\">RELEASED IN:</span> {{ movie.releaseYear }}</p>\r\n      <p><span class=\"red\">PRODUCED IN:</span> {{ movie.createdAt }} | Full Episode</p>\r\n      <p><span class=\"red\">AUDIO:</span> English</p>\r\n      <p><span class=\"red\">SUBTITLE:</span> English</p>\r\n      <p><span class=\"red\">GENRE:</span>\r\n        <span class=\"badge badge-pill badge-secondary\" *ngFor=\"let gen of movie.genre\"> {{ gen }} </span>\r\n      </p>\r\n      <div class=\"details\">\r\n        In This Episode: {{ movie.description }}\r\n      </div><br>\r\n      <button class='btn btn-danger' id=\"{{ movie.objectId }}\" (click)='removeFavourite($event)'>\r\n        Remove\r\n      </button>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</section>\r\n\r\n<div *ngIf = \"!localMovies.length\" class='alert alert-danger'>\r\n    Sorry: You Have No Favourite Movie. <br>\r\n    But Does It Infer That Our Movies Don't Interest You Enough???\r\n    <p><a [routerLink]=\"['/movies']\" style=\"color:#000\">Ok, Let Me Add Favourite Movies</a></p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-detail/movie-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-detail/movie-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"heading\">\r\n  <h1 class=\"title\">{{movie.title}}</h1>\r\n</div>\r\n\r\n<div class=\"row wrapper\">\r\n  <div class='col-md-8 mt-3 left'>\r\n    <p><span class=\"red\">RELEASED IN:</span> {{ movie.releaseYear }}</p>\r\n    <p><span class=\"red\">PRODUCED IN:</span> {{ movie.createdAt }} | Full Episode</p>\r\n    <p><span class=\"red\">AUDIO:</span> English</p>\r\n    <p><span class=\"red\">SUBTITLE:</span> English</p>\r\n    <p><span class=\"red\">>GENRE:</span>\r\n      <span class=\"badge badge-pill badge-secondary\" *ngFor=\"let gen of movie.genre\"> {{ gen }} </span>\r\n    </p>\r\n    <div class=\"details\">\r\n      In This Episode: {{ movie.description }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class='col-md-4 right'>\r\n    <img src=\"{{ movie.image.url }}\" alt=\"{{ movie.image.name }}\" title=\"{{ movie.title }}\" class=\"grid-img\">\r\n    <br><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"crop\" title=\"rating\">\r\n          <div>\r\n            <span class=\"fa fa-star\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"favourite\">\r\n          <i class=\"fa fa-heart\" *ngIf=\"!isFavourite\" (click)=\"addToFavourite()\" title=\"Add To Favourite\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br><br>\r\n<div *ngIf='errorMessage' class='alert alert-danger'>\r\n    {{ errorMessage }}\r\n</div>\r\n\r\n<div class='card-footer'>\r\n  <button class='btn' (click)='onBack()'>\r\n    <i class='fa fa-chevron-left'></i> Go Back\r\n  </button>\r\n</div>\r\n\r\n<section class=\"related\">\r\n  <h3>TO BE RELEASED SOON: </h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n      <img src=\"https://peruzal-parse-media.s3.amazonaws.com/eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n      <img src=\"https://peruzal-parse-media.s3.amazonaws.com/b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n      <img src=\"https://peruzal-parse-media.s3.amazonaws.com/db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n      <img src=\"https://peruzal-parse-media.s3.amazonaws.com/fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-list/movie-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-list/movie-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"heading\">\r\n  <h1 class=\"title\">{{ pageTitle }}</h1>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"search col-md-8\">\r\n    <input [(ngModel)]='movieFilter' type=\"search\" placeholder=\"Search\">\r\n  </div>\r\n  <div class=\"sort col-md-4\">\r\n    Sort By Title:\r\n    <i class=\"fa fa-sort-alpha-asc fa-1.5x\" (click) = \"sortAsc()\"> </i>\r\n    <i class=\"fa fa-sort-alpha-desc fa-1.5x\" (click) = \"sortDesc()\"> </i>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf='errorMessage' class='alert alert-danger'>\r\n  Error: {{ errorMessage }}\r\n</div>\r\n\r\n<section *ngIf=\"movies && movies.length\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let movie of filteredMovies | paginate: config\">\r\n        <div class=\"wrapper mt-3\">\r\n          <a [routerLink]=\"['/movies', movie.objectId]\">\r\n            <img src=\"{{ movie.image.url }}\" alt=\"{{ movie.image.name }}\" title=\"{{ movie.title }}\" class=\"grid-img\">\r\n            <div class=\"favourite\" *ngFor=\"let ob of obj\"><i class=\"fa fa-heart\" title=\"My Favourite\"  *ngIf=\"ob.movieId === movie.objectId\"></i></div>\r\n            <div class=\"overlay\">\r\n              <h5 class=\"top\">{{ movie.title }}</h5>\r\n              <small class=\"bottom\">Year: {{ movie.releaseYear }}</small>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n<pagination-template #p=\"paginationApi\" (pageChange)=\"config.currentPage = $event\">\r\n    <div class=\"custom-pagination\">\r\n      <div class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\r\n        <span *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\">\r\n          <i class=\"fa fa-angle-double-left\"> </i>\r\n        </span>\r\n      </div>\r\n      <div class=\"page-number\" *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\r\n        <span (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">{{ page.label }}</span>\r\n        <div *ngIf=\"p.getCurrent() === page.value\">\r\n          <span>{{ page.label }}</span>\r\n        </div>\r\n      </div>\r\n        <div class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\">\r\n          <span *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\">\r\n            <i class=\"fa fa-angle-double-right\"> </i>\r\n          </span>\r\n        </div>\r\n    </div>\r\n</pagination-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row bg\">\r\n    <div class=\"col-md-6\">\r\n        <img src=\"assets/images/404.jpg\" alt=\"Page Not Found\">\r\n    </div>\r\n    <div class=\"col-md-6 mt-4\">\r\n        <h3> Please Check The Link Address.\r\n        <br>You Are Certainly On The Wrong Page.</h3>\r\n        <img class=\"sm-img\" src=\"assets/images/notFound.png\" alt=\"Page Not Found Too\">\r\n        <p>Sorry, No Hard Feelings. <br><a [routerLink]=\"['/movies']\">\r\n            Check Out Amazing Movies Then</a></p>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signin/signin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signin/signin.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #projectForm=\"ngForm\" (ngSubmit)=\"signin(projectForm)\">\r\n    <div *ngIf='errorMessage' class='alert alert-danger'>\r\n      Error: {{ errorMessage }}\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" required  name=\"email\" placeholder=\"Enter email\" #emailField = \"ngModel\"\r\n      [(ngModel)]=\"user_data.email\" [class.invalid-field] = \"projectForm.submitted && emailField.invalid\">\r\n      <div [hidden]=\"!projectForm.submitted || emailField.valid\" class=\"alert alert-danger\">\r\n        Enter your Email Please\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" required name=\"password\" placeholder=\"Password\" #passwordField = \"ngModel\"\r\n      [(ngModel)]=\"user_data.password\"  [class.invalid-field] = \"projectForm.submitted && passwordField.invalid\">\r\n      <div [hidden]=\"!projectForm.submitted || passwordField.valid\" class=\"alert alert-danger\">\r\n        You Do Need A Password\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-danger lg\">Signin</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Don't Have An Account? <a [routerLink]=\"['/signup']\" type=\"submit\" class=\"btn btn-secondary lg\">Sign Up</a>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #projectForm=\"ngForm\" (ngSubmit)=\"signup(projectForm)\">\r\n    <div *ngIf='errorMessage' class='alert alert-danger'>\r\n      Error: {{ errorMessage }}\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Full name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"name\" required placeholder=\"Enter your name\" #nameField = \"ngModel\" \r\n      [(ngModel)]=\"userData.name\" [class.invalid-field] = \"projectForm.submitted && nameField.invalid\">\r\n      <div [hidden]=\"!projectForm.submitted || nameField.valid\" class=\"alert alert-danger\">\r\n        Enter A Name Please\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" required  name=\"email\" placeholder=\"Enter email\" #emailField = \"ngModel\"\r\n      [(ngModel)]=\"userData.email\" [class.invalid-field] = \"projectForm.submitted && emailField.invalid\">\r\n      <div [hidden]=\"!projectForm.submitted || emailField.valid\" class=\"alert alert-danger\">\r\n        Enter your Email Please\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" required name=\"password\" placeholder=\"Password\" #passwordField = \"ngModel\"\r\n      [(ngModel)]=\"userData.password\"  [class.invalid-field] = \"projectForm.submitted && passwordField.invalid\">\r\n      <div [hidden]=\"!projectForm.submitted || passwordField.valid\" class=\"alert alert-danger\">\r\n        You Do Need A Password\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-danger lg\">Signup</button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie/movie-list/movie-list.component */ "./src/app/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/movie-detail/movie-detail.component */ "./src/app/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _movie_favourite_movies_favourite_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/favourite-movies/favourite-movies.component */ "./src/app/movie/favourite-movies/favourite-movies.component.ts");
/* harmony import */ var _user_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/auth.guard */ "./src/app/user/auth.guard.ts");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _movie_resolver_movie_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie/resolver/movie.resolver.service */ "./src/app/movie/resolver/movie.resolver.service.ts");
/* harmony import */ var _movie_resolver_favourite_movies_resolver_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie/resolver/favourite-movies.resolver.services */ "./src/app/movie/resolver/favourite-movies.resolver.services.ts");












const routes = [
    { path: 'movies', component: _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"] },
    { path: 'movies/:objectId', component: _movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailComponent"], resolve: { movieResolved: _movie_resolver_movie_resolver_service__WEBPACK_IMPORTED_MODULE_10__["MovieResolver"] } },
    { path: 'signup', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'signin', component: _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'favourites', canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], component: _movie_favourite_movies_favourite_movies_component__WEBPACK_IMPORTED_MODULE_6__["FavouriteMoviesComponent"], resolve: { favouriteMovieResolved: _movie_resolver_favourite_movies_resolver_services__WEBPACK_IMPORTED_MODULE_11__["FavouriteMovieResolver"] } },
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'notFound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 100;\r\n  border-bottom: 5px solid #ddd;\r\n  background-color: #000;\r\n}\r\n.logo {\r\n  width: 50px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.topnav {\r\n  color: rgb(117, 3, 3);\r\n  width: 100%;\r\n}\r\nul {\r\n  list-style-type: none;\r\n}\r\n.left li {\r\n  display: inline-block;\r\n  margin: 10px auto;\r\n}\r\n.left a {\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  color: #ddd;\r\n}\r\n.left a:hover {\r\n  background-color: #ddd;\r\n  color: rgb(117, 3, 3);\r\n}\r\n.right {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px;\r\n}\r\n.topnav .btn {\r\n  width: 80%;\r\n  background-color: rgb(117, 3, 3);\r\n  color: #ddd;\r\n  border: none;\r\n  padding: 5px 15px;\r\n  border-radius: 10px 30px;\r\n  cursor: pointer;\r\n}\r\n.main-content {\r\n  margin-top: 150px;\r\n}\r\n.footer {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n  background-color: rgb(22, 22, 22);\r\n  color: #ddd;\r\n}\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {\r\n  .fixed {\r\n    display: inline-flex;\r\n    padding: 0 100px;\r\n  }\r\n  .logo {\r\n    width: 100%;\r\n  }\r\n  .topnav {\r\n    display: inline-flex;\r\n    padding: 20px;\r\n  }\r\n  .left {\r\n    text-align: left;\r\n    display: inline-block;\r\n    width: 70%;\r\n  }\r\n  .right {\r\n    width: 29%;\r\n    margin: 0px;\r\n  }\r\n  .topnav button {\r\n    padding: 10px 15px;\r\n  }\r\n  .main-content {\r\n    margin-top: 130px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50b3BuYXYge1xyXG4gIGNvbG9yOiByZ2IoMTE3LCAzLCAzKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5sZWZ0IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLmxlZnQgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbn1cclxuLmxlZnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogcmdiKDExNywgMywgMyk7XHJcbn1cclxuLnJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi50b3BuYXYgLmJ0biB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAzLCAzKTtcclxuICBjb2xvcjogI2RkZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFpbi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjIsIDIyKTtcclxuICBjb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZml4ZWQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xyXG4gIH1cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRvcG5hdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC5sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDI5JTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICAudG9wbmF2IGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.title = 'Mini-Netflix';
    }
    ngOnInit() { }
    logout() {
        this.auth.logout();
        this.router.navigate(['signin']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie/movie-list/movie-list.component */ "./src/app/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie/movie-detail/movie-detail.component */ "./src/app/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _movie_favourite_movies_favourite_movies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie/favourite-movies/favourite-movies.component */ "./src/app/movie/favourite-movies/favourite-movies.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_9__["MovieListComponent"],
            _movie_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"],
            _movie_favourite_movies_favourite_movies_component__WEBPACK_IMPORTED_MODULE_12__["FavouriteMoviesComponent"],
            _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
            _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/movie/favourite-movies/favourite-movies.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/movie/favourite-movies/favourite-movies.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n  .title {\r\n    width: 100%;\r\n    background-color: rgba(58, 56, 56, 0.685);\r\n    color: #ddd;\r\n    padding: 10px;\r\n  }\r\n  .red {\r\n    font-weight: bolder;\r\n    color: rgb(117, 3, 3);\r\n  }\r\n  .grid-img {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    border: 3px solid rgb(117, 3, 3);\r\n    position: relative;\r\n  }\r\n  .favourite {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n  .favourite i {\r\n    color: #ddd;\r\n    background-color: rgb(117, 3, 3);\r\n    padding: 5px;\r\n  }\r\n  hr {\r\n  width: 100%;\r\n  border: 2px solid #fff !important;\r\n}\r\n  .custom-pagination {\r\n    text-align: center;\r\n    width: 100%;\r\n    margin: 20px auto 5px auto;\r\n    background-color: rgba(58, 56, 56, 0.685);\r\n    padding: 10px;\r\n  }\r\n  .custom-pagination .page-number {\r\n    display: inline-block;\r\n    margin: 0px 4px;\r\n    border-radius: 25px;\r\n  }\r\n  .page-number.current {\r\n    color: red;\r\n  }\r\n  .page-number span {\r\n    display: block;\r\n    width: 28px;\r\n    height: 28px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n  }\r\n  .pagination-previous,.pagination-next{\r\n    display: inline-block;\r\n    font-weight: bold;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvZmF2b3VyaXRlLW1vdmllcy9mYXZvdXJpdGUtbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFlBQVk7RUFDZDtFQUNGO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztBQUNuQztFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIseUNBQXlDO0lBQ3pDLGFBQWE7RUFDZjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7RUFDakI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS9mYXZvdXJpdGUtbW92aWVzL2Zhdm91cml0ZS1tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuICAudGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1NiwgNTYsIDAuNjg1KTtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLnJlZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDMsIDMpO1xyXG4gIH1cclxuICAuZ3JpZC1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMTcsIDMsIDMpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZmF2b3VyaXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZmF2b3VyaXRlIGkge1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAzLCAzKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbmhyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuICAuY3VzdG9tLXBhZ2luYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byA1cHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDU2LCA1NiwgMC42ODUpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuICAucGFnZS1udW1iZXIuY3VycmVudCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAucGFnZS1udW1iZXIgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucGFnaW5hdGlvbi1wcmV2aW91cywucGFnaW5hdGlvbi1uZXh0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/movie/favourite-movies/favourite-movies.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/movie/favourite-movies/favourite-movies.component.ts ***!
  \**********************************************************************/
/*! exports provided: FavouriteMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteMoviesComponent", function() { return FavouriteMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/favourite-movies.service */ "./src/app/movie/services/favourite-movies.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movie/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FavouriteMoviesComponent = class FavouriteMoviesComponent {
    constructor(favouriteMoviesService, movieService, router) {
        this.favouriteMoviesService = favouriteMoviesService;
        this.movieService = movieService;
        this.router = router;
        this.errorMessage = '';
        this.deleteMessage = '';
        this.movies = [];
        this.localMovies = [];
        this.userId = localStorage.getItem('userId');
        // These are settings for pagination
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.responsive = true;
        this.labels = {
            previousLabel: '<',
            nextLabel: '>',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
        this.config = {
            itemsPerPage: 12,
            currentPage: 1,
            totalItems: this.movies.length
        };
    }
    // These is settings for pagination
    onPageChange(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        this.favouriteMoviesService.getFavMovies(this.userId).subscribe(res => {
            this.movies = res;
            for (let movie of this.movies) {
                this.getLocalMovie(movie.movieId);
            }
        }, err => {
            err: err => this.errorMessage = err;
        });
    }
    getLocalMovie(objectId) {
        this.movieService.getFavMovie(objectId).subscribe({
            next: movies => {
                this.localMovies.push(movies);
            },
            error: err => this.errorMessage = err
        });
    }
    removeFavourite(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        let value = idAttr.nodeValue;
        this.favouriteMoviesService.deleteFavMovies(value, this.userId).subscribe({
            next: movies => {
                alert('Successfully Deleted');
                this.localMovies = movies;
            },
            error: err => this.errorMessage = err
        });
    }
};
FavouriteMoviesComponent.ctorParameters = () => [
    { type: _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteMoviesService"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FavouriteMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourite-movies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favourite-movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/favourite-movies/favourite-movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favourite-movies.component.css */ "./src/app/movie/favourite-movies/favourite-movies.component.css")).default]
    })
], FavouriteMoviesComponent);



/***/ }),

/***/ "./src/app/movie/movie-detail/movie-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/movie/movie-detail/movie-detail.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.title {\r\n  width: 100%;\r\n  background-color: rgba(58, 56, 56, 0.685);\r\n  color: #ddd;\r\n  padding: 10px;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n.left {\r\n  width: 100%;\r\n}\r\n.right {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.right img {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.crop {\r\n  overflow: hidden;\r\n}\r\n.crop span.fa {\r\n  color: #f8ce0b;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .details {\r\n    width: 80%;\r\n  }\r\n  .related {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.related {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.related img {\r\n  width: 100%;\r\n}\r\n.red {\r\n  font-weight: bolder;\r\n  color: rgb(117, 3, 3);\r\n}\r\n.btn {\r\n  background-color: rgb(117, 3, 3);\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  color: #ddd;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1NiwgNTYsIDAuNjg1KTtcclxuICBjb2xvcjogI2RkZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGVmdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJpZ2h0IGltZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jcm9wIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jcm9wIHNwYW4uZmEge1xyXG4gIGNvbG9yOiAjZjhjZTBiO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5yZWxhdGVkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuLnJlbGF0ZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVsYXRlZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZWQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHJnYigxMTcsIDMsIDMpO1xyXG59XHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDMsIDMpO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/movie/movie-detail/movie-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/movie/movie-detail/movie-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movie/services/movie.service.ts");
/* harmony import */ var _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/favourite-movies.service */ "./src/app/movie/services/favourite-movies.service.ts");





let MovieDetailComponent = class MovieDetailComponent {
    constructor(route, router, movieService, favouriteMovieService) {
        this.route = route;
        this.router = router;
        this.movieService = movieService;
        this.favouriteMovieService = favouriteMovieService;
        this.obj = [];
        this.movId = [];
        this.pageTitle = '';
        this.userId = localStorage.getItem('userId');
        this.errorMessage = '';
        this.allMovieId = [];
        this.data = {
            movieId: this.route.snapshot.paramMap.get('objectId'),
            userId: localStorage.getItem('userId')
        };
        this.movie = this.route.snapshot.data['movieResolved'];
    }
    ngOnInit() {
        // const movieResolved = this.route.snapshot.data['movieResolved'];
        const param = this.route.snapshot.paramMap.get('objectId');
        if (param) {
            this.movieService.getMovies().subscribe({
                next: movies => {
                    movies.forEach((movie) => {
                        this.allMovieId.push(movie.objectId);
                    });
                    if (this.allMovieId.indexOf(param) === -1) {
                        this.router.navigate(['/notFound']);
                    }
                    else {
                        this.getMovie(param);
                    }
                }
            });
        }
        if (!this.userId) {
            this.errorMessage = 'Please Login To Add Movie To Favourite';
        }
    }
    getMovie(objectId) {
        this.movieService.getMovie(objectId).subscribe({
            next: movie => {
                this.favouriteMovieService.getFavMovies(this.userId).subscribe((favMovies) => {
                    favMovies.forEach((favMovie) => {
                        this.movId.push(favMovie.movieId);
                    });
                    if (this.movId.indexOf(movie.objectId) === -1) {
                        this.isFavourite = false;
                        this.movie = movie;
                    }
                    else {
                        this.isFavourite = true;
                        this.errorMessage = "This Is One Of Your Favourite Movies";
                        this.movie = movie;
                    }
                });
                this.movie = movie;
            },
            error: err => this.errorMessage = err
        });
        this.pageTitle = this.movie.title;
    }
    addToFavourite() {
        this.favouriteMovieService.addFavMovies(this.data).subscribe(result => {
            this.errorMessage = 'Yeeeeee, Movie Has Been Added To Favourite';
        }, error => {
            if (localStorage.getItem('userId')) {
                this.errorMessage = 'Yeeeeee, Movie Has Been Added To Favourite';
            }
            else {
                this.errorMessage = 'Sorry, An Error Occured Adding To Favourite Movie. Ensure You Are Logged In and Try again. \n' + error;
            }
        });
    }
    onBack() {
        this.router.navigate(['/movies']);
    }
};
MovieDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteMoviesService"] }
];
MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-detail/movie-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie/movie-detail/movie-detail.component.css")).default]
    })
], MovieDetailComponent);



/***/ }),

/***/ "./src/app/movie/movie-list/movie-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/movie/movie-list/movie-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.title {\r\n  width: 100%;\r\n  background-color: rgba(58, 56, 56, 0.685);\r\n  color: #ddd;\r\n  padding: 10px;\r\n}\r\n.search {\r\n  width: 100%;\r\n}\r\n.search input {\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid #ddd;\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  color: #ddd;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n.search input:focus {\r\n  border: none;\r\n  outline: none;\r\n  border-bottom: 2px solid#ddd;\r\n  border-left: 2px solid#ddd;\r\n  background-color: rgb(36, 35, 35);\r\n}\r\n.sort i {\r\n  cursor: pointer;\r\n  margin: 0 10px;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n  grid-gap: 20px;\r\n}\r\n.grid-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  border: 3px solid rgb(117, 3, 3);\r\n  position: relative;\r\n}\r\n.favourite {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n}\r\n.favourite i {\r\n  color: rgb(255, 251, 251);\r\n  font-size: 18px;\r\n  background-color: rgb(117, 3, 3);\r\n  padding: 5px;\r\n}\r\n.overlay {\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  bottom: 3px;\r\n  width: 93%;\r\n  padding: 20px 0;\r\n  margin: 0 auto;\r\n  background: rgba(0, 0, 0, 0.924);\r\n  color: #ddd;\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n.custom-pagination {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 20px auto 5px auto;\r\n  background-color: rgba(58, 56, 56, 0.685);\r\n  padding: 10px;\r\n}\r\n.custom-pagination .page-number {\r\n  display: inline-block;\r\n  margin: 0px 4px;\r\n  border-radius: 25px;\r\n}\r\n.page-number.current {\r\n  color: red;\r\n}\r\n.page-number span {\r\n  display: block;\r\n  width: 28px;\r\n  height: 28px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n.pagination-previous,.pagination-next{\r\n  display: inline-block;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHlDQUF5QztFQUN6QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW92aWUvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1NiwgNTYsIDAuNjg1KTtcclxuICBjb2xvcjogI2RkZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zZWFyY2ggaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2RkZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCNkZGQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCNkZGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNSwgMzUpO1xyXG59XHJcbi5zb3J0IGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbn1cclxuLmdyaWQtaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDExNywgMywgMyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mYXZvdXJpdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmZhdm91cml0ZSBpIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjUxLCAyNTEpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAzLCAzKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDNweDtcclxuICB3aWR0aDogOTMlO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTI0KTtcclxuICBjb2xvcjogI2RkZDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY3VzdG9tLXBhZ2luYXRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHggYXV0byA1cHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1NiwgNTYsIDAuNjg1KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jdXN0b20tcGFnaW5hdGlvbiAucGFnZS1udW1iZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4ucGFnZS1udW1iZXIuY3VycmVudCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ucGFnZS1udW1iZXIgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBhZ2luYXRpb24tcHJldmlvdXMsLnBhZ2luYXRpb24tbmV4dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/movie/movie-list/movie-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie/movie-list/movie-list.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movie/services/movie.service.ts");
/* harmony import */ var _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/favourite-movies.service */ "./src/app/movie/services/favourite-movies.service.ts");




let MovieListComponent = class MovieListComponent {
    constructor(movieService, favouriteMoviesService) {
        this.movieService = movieService;
        this.favouriteMoviesService = favouriteMoviesService;
        this.pageTitle = "Latest Movies and More...";
        this.errorMessage = '';
        this.userId = localStorage.getItem('userId');
        this.obj = [];
        this.filteredMovies = [];
        this.movies = [];
        // These are settings for pagination
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.responsive = true;
        this.labels = {
            previousLabel: '<--',
            nextLabel: '-->',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
        this.config = {
            itemsPerPage: 12,
            currentPage: 1,
            totalItems: this.filteredMovies.length
        };
        this.filteredMovies = this.movies;
        this.movieFilter = '';
    }
    get movieFilter() {
        return this._movieFilter;
    }
    set movieFilter(value) {
        this._movieFilter = value;
        this.filteredMovies = this.movieFilter ? this.performFilter(this.movieFilter) : this.movies;
    }
    // These is settings for pagination
    onPageChange(event) {
        this.config.currentPage = event;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((movie) => movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.movieService.getMovies().subscribe({
            next: movies => {
                this.movies = movies;
                this.filteredMovies = movies;
            },
            error: err => this.errorMessage = err
        });
        this.favouriteMoviesService.getFavMovies(this.userId).subscribe(res => {
            this.obj = res;
        }, err => {
            err: err => this.errorMessage = err;
        });
    }
    sortAsc() {
        this.filteredMovies.sort((a, b) => a.title < b.title ? -1 : 1);
        return this.filteredMovies;
    }
    sortDesc() {
        this.filteredMovies.sort((a, b) => a.title > b.title ? -1 : 1);
        return this.filteredMovies;
    }
};
MovieListComponent.ctorParameters = () => [
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_3__["FavouriteMoviesService"] }
];
MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-list/movie-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list.component.css */ "./src/app/movie/movie-list/movie-list.component.css")).default]
    })
], MovieListComponent);



/***/ }),

/***/ "./src/app/movie/resolver/favourite-movies.resolver.services.ts":
/*!**********************************************************************!*\
  !*** ./src/app/movie/resolver/favourite-movies.resolver.services.ts ***!
  \**********************************************************************/
/*! exports provided: FavouriteMovieResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteMovieResolver", function() { return FavouriteMovieResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movie/services/movie.service.ts");
/* harmony import */ var _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/favourite-movies.service */ "./src/app/movie/services/favourite-movies.service.ts");






let FavouriteMovieResolver = class FavouriteMovieResolver {
    constructor(movieService, favouriteMoviesService) {
        this.movieService = movieService;
        this.favouriteMoviesService = favouriteMoviesService;
        this.errorMessage = '';
        this.localMovies = [];
        this.movies = [];
    }
    resolve(route, state) {
        const userId = localStorage.getItem('userId');
        return this.favouriteMoviesService.getFavMovies(userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(movies => {
            this.movies = movies;
            for (let movie of this.movies) {
                this.getLocalMovie(movie.movieId);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            this.errorMessage = `Retrieval error: ${error}`;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ movies: null, error: this.errorMessage });
        }));
    }
    getLocalMovie(objectId) {
        this.movieService.getFavMovie(objectId).subscribe({
            next: movies => {
                this.localMovies.push(movies);
            },
            error: err => this.errorMessage = err
        });
    }
};
FavouriteMovieResolver.ctorParameters = () => [
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] },
    { type: _services_favourite_movies_service__WEBPACK_IMPORTED_MODULE_5__["FavouriteMoviesService"] }
];
FavouriteMovieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FavouriteMovieResolver);



/***/ }),

/***/ "./src/app/movie/resolver/movie.resolver.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie/resolver/movie.resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: MovieResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieResolver", function() { return MovieResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movie/services/movie.service.ts");





let MovieResolver = class MovieResolver {
    constructor(movieService) {
        this.movieService = movieService;
        this.errorMessage = '';
    }
    resolve(route, state) {
        const objectId = route.paramMap.get('objectId');
        return this.movieService.getMovie(objectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(movie => ({ movie })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            this.errorMessage = `Retrieval error: ${error}`;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ movie: null, error: this.errorMessage });
        }));
    }
};
MovieResolver.ctorParameters = () => [
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] }
];
MovieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieResolver);



/***/ }),

/***/ "./src/app/movie/services/favourite-movies.service.ts":
/*!************************************************************!*\
  !*** ./src/app/movie/services/favourite-movies.service.ts ***!
  \************************************************************/
/*! exports provided: FavouriteMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteMoviesService", function() { return FavouriteMoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FavouriteMoviesService = class FavouriteMoviesService {
    constructor(http) {
        this.http = http;
        this.userId = localStorage.getItem('userId');
        this.token = localStorage.getItem('token');
        this.favMovieUrl = 'https://mini-netflix-by-joy.herokuapp.com/movie';
    }
    addFavMovies(data) {
        let access_token = this.token;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', `${access_token}`);
        return this.http.post(this.favMovieUrl, data, { headers: headers });
    }
    getFavMovies(userId) {
        let access_token = this.token;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', `${access_token}`);
        return this.http.get(`${this.favMovieUrl}/${userId}`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => JSON.stringify(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteFavMovies(movieId, userId) {
        let access_token = this.token;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', `${access_token}`);
        return this.http.delete(`${this.favMovieUrl}/${movieId}/${userId}`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => JSON.stringify(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
FavouriteMoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FavouriteMoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FavouriteMoviesService);



/***/ }),

/***/ "./src/app/movie/services/movie.service.ts":
/*!*************************************************!*\
  !*** ./src/app/movie/services/movie.service.ts ***!
  \*************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.movieUrl = 'api/movies.json';
    }
    getMovies() {
        return this.http.get(this.movieUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => JSON.stringify(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMovie(objectId) {
        return this.getMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((movies) => movies.find(movie => movie.objectId === objectId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getFavMovie(objectId) {
        return this.getMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((movies) => movies.find(movie => movie.objectId === objectId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `Sorry, An Error Occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server Returned Code: ${err.status}, Error Message Is: ${err.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieService);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\r\n    text-align: center;\r\n    /* background-color: #404853; */\r\n}\r\n.bg img {\r\n    width: 100%;\r\n}\r\na {\r\n    color: #ccc;\r\n    background: #666;\r\n    padding: 2px 5px;\r\n}\r\nimg.sm-img {\r\n    width: 20% !important;\r\n    text-align:center;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0ODUzOyAqL1xyXG59XHJcbi5iZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxufVxyXG5pbWcuc20taW1nIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/user/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/user/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['signin']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
        this.signupUrl = 'https://mini-netflix-by-joy.herokuapp.com/user/signup';
        this.signinUrl = 'https://mini-netflix-by-joy.herokuapp.com/user/signin';
    }
    addUser(userData) {
        return this.http.post(this.signupUrl, userData);
    }
    getUser(user_data) {
        return this.http.post(this.signinUrl, user_data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            localStorage.setItem('userId', result.userId);
            localStorage.setItem('name', result.name);
            localStorage.setItem('token', result.token);
            return true;
        }));
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('userId');
    }
    get loggedIn() {
        return (localStorage.getItem('token') !== null);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/user/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signin/signin.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-invalid:not(form).ng-touched {\r\n  border: ix solid red;\r\n}\r\n\r\n.invalid-field {\r\n  border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkOm5vdChmb3JtKS5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IGl4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmludmFsaWQtZmllbGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SigninComponent = class SigninComponent {
    constructor(route, auth, router) {
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.errorMessage = '';
        this.user_data = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    signin(projectForm) {
        this.auth.getUser(this.user_data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(result => {
            this.router.navigate(['favourites']);
        }, error => this.errorMessage = 'Sorry, Could Not Authenticate');
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/user/signin/signin.component.css")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .ng-invalid:not(form).ng-touched {\r\n  border: ix solid red;\r\n} */\r\n\r\n.invalid-field {\r\n  border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5uZy1pbnZhbGlkOm5vdChmb3JtKS5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IGl4IHNvbGlkIHJlZDtcclxufSAqL1xyXG5cclxuLmludmFsaWQtZmllbGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/user/auth.service.ts");




let SignupComponent = class SignupComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.errorMessage = '';
        this.userData = {
            name: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    signup(projectForm) {
        this.auth.addUser(this.userData).subscribe(result => this.router.navigateByUrl('/signin'), error => this.errorMessage = 'Sorry, There Was An Error. Please Try Again');
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")).default]
    })
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JOY\Desktop\My Projects\mini-netflix-movie-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map