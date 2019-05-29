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

/***/ "./src/app/_components/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_components/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\n     [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_components/alert.component.html")
        }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/api-token-auth/", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                console.log(user.token);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/image.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/image.service.ts ***!
  \********************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
    }
    return ImageService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/_services/image.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]; });







/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/albums/");
    };
    UserService.prototype.getPrivateAlbums = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/album/");
    };
    UserService.prototype.createAlbum = function (album) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/album/", album);
    };
    UserService.prototype.editAlbum = function (album) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/album/", album);
    };
    UserService.prototype.shareAlbum = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/sharealbum/" + id);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/deletealbum/" + id);
    };
    UserService.prototype.getPic = function (picture_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/pic/" + picture_id);
    };
    UserService.prototype.addPic = function (album, album_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/photo/" + album_id, album);
    };
    UserService.prototype.editPic = function (album) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/photo/0", album);
    };
    UserService.prototype.sharePic = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/sharepic/" + id);
    };
    UserService.prototype.getAlbumPics = function (album_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/photo/" + album_id);
    };
    UserService.prototype.deletePic = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/deletepic/" + id);
    };
    UserService.prototype.like = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/like/", data);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/register/", user);
    };
    UserService.prototype.deleteUser = function () {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/deleteuser/");
    };
    UserService.prototype.getProfile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/user/");
    };
    UserService.prototype.editProfile = function (album) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/user/", album);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/addpic/addpic.component.html":
/*!**********************************************!*\
  !*** ./src/app/addpic/addpic.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Picture</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" formControlName=\"description\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"/>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"picture\">Select Picture: </label>\n            <input formControlName=\"picture\" #name\n                   type=\"file\"\n                   accept=\"image/*\"\n                   name=\"picture\"\n                   (change)=\"processFile(name)\" [ngClass]=\"{ 'is-invalid': submitted && !picUpload }\" class=\"form-control\"/>\n            <div *ngIf=\" !picUpload \" class=\"invalid-feedback\">\n                Picture is required\n            </div>\n\n\n    </div>\n    <div class=\"form-group\">\n        <label for=\"privacy\">Privacy </label><br/>\n        <input type=\"radio\" value=\"public\" name=\"privacy\" formControlName=\"privacy\"> Public\n        <input type=\"radio\" value=\"link_sharing\" name=\"privacy\" formControlName=\"privacy\"> Link Sharing\n        <input type=\"radio\" value=\"private\" name=\"privacy\" formControlName=\"privacy\" checked=\"true\"> Private\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Add</button>\n        <img *ngIf=\"loading\" class=\"pl-3\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n    <!--  <div *ngIf=\"selectedFile\" class=\"img-preview-container\">-->\n\n    <!--    <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"-->\n    <!--         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">-->\n    <!--      <div class=\"img-spinning-circle\"></div>-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>-->\n    <!--    <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>-->\n    <!--  </div>-->\n</form>\n"

/***/ }),

/***/ "./src/app/addpic/addpic.component.ts":
/*!********************************************!*\
  !*** ./src/app/addpic/addpic.component.ts ***!
  \********************************************/
/*! exports provided: AddpicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpicComponent", function() { return AddpicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var AddpicComponent = /** @class */ (function () {
    function AddpicComponent(formBuilder, router, authenticationService, userService, alertService, route
    // private imageService: ImageService
    ) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.picUpload = false;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    AddpicComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    AddpicComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    AddpicComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        console.log(imageInput.files[0]);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picUpload = true;
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(_this.selectedFile.file);
            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    };
    AddpicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.registerForm = this.formBuilder.group({
            description: [''],
            privacy: ['private'],
            picture: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(AddpicComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddpicComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.id);
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('picture', this.selectedFile.file);
        }
        else {
            return;
        }
        formData.append('description', this.registerForm.value['description']);
        formData.append('privacy', this.registerForm.value['privacy']);
        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)
        this.userService.addPic(formData, this.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Photo Added', true);
            history.back();
            // this.submitted=false;
            // this.picUpload=false;
            // this.loading=false;
            // this.registerForm['description'].reset()
        }, function (error) {
            if (error == 'Forbidden') {
                _this.authenticationService.logout();
            }
            else {
                _this.alertService.error(error);
                _this.loading = false;
            }
        });
    };
    AddpicComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    AddpicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./addpic.component.html */ "./src/app/addpic/addpic.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
            // private imageService: ImageService
        ])
    ], AddpicComponent);
    return AddpicComponent;
}());



/***/ }),

/***/ "./src/app/addpic/index.ts":
/*!*********************************!*\
  !*** ./src/app/addpic/index.ts ***!
  \*********************************/
/*! exports provided: AddpicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addpic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addpic.component */ "./src/app/addpic/addpic.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddpicComponent", function() { return _addpic_component__WEBPACK_IMPORTED_MODULE_0__["AddpicComponent"]; });




/***/ }),

/***/ "./src/app/albumpics/albumpics.component.html":
/*!****************************************************!*\
  !*** ./src/app/albumpics/albumpics.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    div.gallery {\n        margin: 5px;\n        border: 2px solid #ccc;\n        float: left;\n        width: 256px;\n    }\n\n    div.gallery:hover {\n        border: 2px solid #777;\n        text-underline-mode: false;\n    }\n\n    div.gallery img {\n        width: 100%;\n        height: auto;\n    }\n\n    a:hover {\n        text-decoration: none;\n        font-weight: bold;\n        background-color: blue;\n        color: #fff;\n    }\n\n    div.name {\n        padding: 2px;\n        text-align: center;\n        color: #111111;\n        font-size: x-large;\n    }\n\n    div.created {\n        padding: 2px;\n        text-align: center;\n        font-size: small;\n        color: #555555;\n\n    }\n\n    div.desc {\n        padding: 8px;\n        text-align: center;\n        font-size: medium;\n        color: #333333;\n    }\n\n    div.likes {\n        padding: 4px;\n        text-align: center;\n        font-size: small;\n        color: #CC0000;\n    }\n\n    div.like {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #FF0000;\n        border: 1px solid #ccc;\n    }\n\n    div.unlike {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n\n    div.delete {\n        padding: 4px;\n        text-align: center;\n        font-size: Large;\n        color: #550000;\n        border: 2px solid #ccc;\n    }\n\n    div.add {\n        padding: 4px;\n        text-align: center;\n        font-size: large;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n</style>\n\n<h1>Hi {{currentUser.firstName}}!</h1>\n<h3>Here is your album:</h3>\n<br>\n\n\n<div *ngFor=\"let picture of pictures\" class=\"gallery\">\n\n    <a target=\"_blank\">\n        <div *ngIf=\"picture.picture\" class=\"like\">\n            <img src={{picture.picture}} width=\"600\" height=\"400\">\n        </div>\n        <div class=\"created\">{{picture.createdAt}}</div>\n        <div class=\"desc\">{{picture.description}}</div>\n        <div class=\"likes\">{{picture.likes}} likes</div>\n    </a>\n    <a target=\"_blank\" (click)=\"likePicture(picture)\">\n        <div *ngIf=\"picture.liked\" class=\"like\">Unlike!</div>\n        <div *ngIf=\"!picture.liked\" class=\"unlike\">Like!</div>\n    </a>\n\n    <a (click)=\"editPicture(picture.id)\">\n        <div *ngIf=\"picture.mine\" class=\"delete\">Edit Picture</div>\n    </a>\n\n\n    <a *ngIf=\"!picture.shared\" (click)=\"sharePicture(picture)\">\n        <div class=\"delete\">Share Picture</div>\n    </a>\n    <div *ngIf=\"picture.shared\" class=\"delete\">localhost:4200/pic/{{picture.id}}</div>\n\n\n    <a (click)=\"deletePicture(picture.id)\">\n        <div *ngIf=\"picture.mine\" class=\"delete\">Delete</div>\n    </a>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/albumpics/albumpics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/albumpics/albumpics.component.ts ***!
  \**************************************************/
/*! exports provided: AlbumpicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumpicsComponent", function() { return AlbumpicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumpicsComponent = /** @class */ (function () {
    function AlbumpicsComponent(authenticationService, userService, router, route) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.pictures = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    AlbumpicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.loadAllAlbums();
        console.log('here1');
    };
    AlbumpicsComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    AlbumpicsComponent.prototype.openPicture = function (picId) {
        console.log(picId);
        this.router.navigate(['/pic/' + picId]);
    };
    AlbumpicsComponent.prototype.likePicture = function (picId) {
        var _this = this;
        var formData = new FormData();
        formData.append('pid', picId.id);
        formData.append('is_photo', 'true');
        this.userService.like(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (data) {
            var index = _this.pictures.indexOf(picId);
            _this.pictures[index].liked = !_this.pictures[index].liked;
            if (_this.pictures[index].liked) {
                _this.pictures[index].likes++;
            }
            else {
                _this.pictures[index].likes--;
            }
            console.log(_this.pictures[index].likes);
        }, function (error) {
            console.log('error');
        });
    };
    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllAlbums();
    //     });
    // }
    AlbumpicsComponent.prototype.deletePicture = function (id) {
        var _this = this;
        this.userService.deletePic(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllAlbums();
        });
    };
    AlbumpicsComponent.prototype.editPicture = function (id) {
        this.router.navigate(['/editpicture/' + id]);
    };
    AlbumpicsComponent.prototype.sharePicture = function (alb) {
        this.userService.sharePic(alb.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (albums) {
            alb.shared = true;
        });
    };
    AlbumpicsComponent.prototype.loadAllAlbums = function () {
        var _this = this;
        this.userService.getAlbumPics(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (pictures) {
            _this.pictures = pictures;
            console.log(pictures);
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    AlbumpicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./albumpics.component.html */ "./src/app/albumpics/albumpics.component.html") }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AlbumpicsComponent);
    return AlbumpicsComponent;
}());



/***/ }),

/***/ "./src/app/albumpics/index.ts":
/*!************************************!*\
  !*** ./src/app/albumpics/index.ts ***!
  \************************************/
/*! exports provided: AlbumpicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _albumpics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albumpics.component */ "./src/app/albumpics/albumpics.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlbumpicsComponent", function() { return _albumpics_component__WEBPACK_IMPORTED_MODULE_0__["AlbumpicsComponent"]; });




/***/ }),

/***/ "./src/app/albums/albums.component.html":
/*!**********************************************!*\
  !*** ./src/app/albums/albums.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    div.gallery {\n        margin: 5px;\n        border: 2px solid #ccc;\n        float: left;\n        width: 256px;\n    }\n\n    div.gallery:hover {\n        border: 2px solid #777;\n        text-underline-mode: false;\n    }\n\n    div.gallery img {\n        width: 100%;\n        height: auto;\n    }\n\n    a:hover {\n        text-decoration: none;\n        font-weight: bold;\n        background-color: blue;\n        color: #fff;\n    }\n\n    div.name {\n        padding: 2px;\n        text-align: center;\n        color: #111111;\n        font-size: x-large;\n    }\n\n    div.created {\n        padding: 2px;\n        text-align: center;\n        font-size: small;\n        color: #555555;\n\n    }\n\n    div.desc {\n        padding: 8px;\n        text-align: center;\n        font-size: medium;\n        color: #333333;\n    }\n\n    div.likes {\n        padding: 4px;\n        text-align: center;\n        font-size: small;\n        color: #CC0000;\n    }\n\n    div.like {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #FF0000;\n        border: 1px solid #ccc;\n    }\n\n    div.unlike {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n\n    div.delete {\n        padding: 4px;\n        text-align: center;\n        font-size: Large;\n        color: #550000;\n        border: 2px solid #ccc;\n    }\n\n    div.add {\n        padding: 4px;\n        text-align: center;\n        font-size: large;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n</style>\n\n<h1>Hi {{currentUser.firstName}}!</h1>\n<h3>My Private Albums (Tap to see contents):</h3>\n<br>\n\n\n<div *ngFor=\"let album of albums\" class=\"gallery\">\n\n    <a target=\"_blank\" (click)=\"openAlbum(album.id)\">\n        <div *ngIf=\"album.coverPic\" class=\"like\">\n            <img src={{album.coverPic}} width=\"600\" height=\"400\">\n        </div>\n        <div *ngIf=\"!album.coverPic\" class=\"like\">\n            <img src=\"assets/img/default_image.jpg\" width=\"600\" height=\"400\">\n        </div>\n        <div class=\"name\">{{album.name}}</div>\n        <div class=\"created\">{{album.createdAt}}</div>\n        <div class=\"desc\">{{album.description}}</div>\n        <div class=\"likes\">{{album.likes}} likes</div>\n    </a>\n    <a target=\"_blank\" (click)=\"likeAlbum(album)\">\n        <div *ngIf=\"album.liked\" class=\"like\">Unlike!</div>\n        <div *ngIf=\"!album.liked\" class=\"unlike\">Like!</div>\n    </a>\n    <a (click)=\"addPhoto(album.id)\">\n        <div class=\"add\">Add Photo</div>\n    </a>\n\n    <a (click)=\"editAlbum(album.id)\">\n        <div class=\"delete\">Edit Album</div>\n    </a>\n\n\n    <a *ngIf=\"!album.shared\" (click)=\"shareAlbum(album)\">\n        <div class=\"delete\">Share Album</div>\n    </a>\n    <div *ngIf=\"album.shared\" class=\"delete\">localhost:4200/album/{{album.id}}/pics</div>\n\n    <a (click)=\"deleteAlbum(album.id)\">\n        <div class=\"delete\">Delete</div>\n    </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/albums/albums.component.ts":
/*!********************************************!*\
  !*** ./src/app/albums/albums.component.ts ***!
  \********************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(authenticationService, userService, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.albums = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        this.loadAllAlbums();
        console.log('here1');
    };
    AlbumsComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    AlbumsComponent.prototype.addPhoto = function (albumId) {
        console.log(albumId);
        this.router.navigate(['/addpic/' + albumId]);
    };
    AlbumsComponent.prototype.likeAlbum = function (picId) {
        var _this = this;
        var formData = new FormData();
        formData.append('pid', picId.id);
        formData.append('is_photo', 'false');
        this.userService.like(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (data) {
            var index = _this.albums.indexOf(picId);
            _this.albums[index].liked = !_this.albums[index].liked;
            if (_this.albums[index].liked) {
                _this.albums[index].likes++;
            }
            else {
                _this.albums[index].likes--;
            }
            console.log(_this.albums[index].likes);
        }, function (error) {
            console.log('error');
        });
    };
    AlbumsComponent.prototype.deleteAlbum = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllAlbums();
        });
    };
    AlbumsComponent.prototype.editAlbum = function (id) {
        this.router.navigate(['/editalbum/' + id]);
    };
    AlbumsComponent.prototype.openAlbum = function (albumId) {
        console.log(albumId);
        this.router.navigate(['/album/' + albumId + '/pics']);
    };
    AlbumsComponent.prototype.shareAlbum = function (alb) {
        this.userService.shareAlbum(alb.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (albums) {
            alb.shared = true;
        });
    };
    AlbumsComponent.prototype.loadAllAlbums = function () {
        var _this = this;
        this.userService.getPrivateAlbums().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (albums) {
            _this.albums = albums;
            console.log(albums);
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    AlbumsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./albums.component.html */ "./src/app/albums/albums.component.html") }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/albums/index.ts":
/*!*********************************!*\
  !*** ./src/app/albums/index.ts ***!
  \*********************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums.component */ "./src/app/albums/albums.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return _albums_component__WEBPACK_IMPORTED_MODULE_0__["AlbumsComponent"]; });




/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Public Albums</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/myalbums\">My Albums</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/addalbum\">Add Album</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/editprofile\">Profile</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 offset-sm-3\">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app', template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html") }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _createalbum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./createalbum */ "./src/app/createalbum/index.ts");
/* harmony import */ var _albums_albums_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./albums/albums.component */ "./src/app/albums/albums.component.ts");
/* harmony import */ var _addpic_addpic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addpic/addpic.component */ "./src/app/addpic/addpic.component.ts");
/* harmony import */ var _albumpics_albumpics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./albumpics/albumpics.component */ "./src/app/albumpics/albumpics.component.ts");
/* harmony import */ var _picture_picture_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./picture/picture.component */ "./src/app/picture/picture.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _editalbum_editalbum_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editalbum/editalbum.component */ "./src/app/editalbum/editalbum.component.ts");
/* harmony import */ var _editpicture_editpicture_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editpicture/editpicture.component */ "./src/app/editpicture/editpicture.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _albums_albums_component__WEBPACK_IMPORTED_MODULE_12__["AlbumsComponent"],
                _createalbum__WEBPACK_IMPORTED_MODULE_11__["CreatealbumComponent"],
                _addpic_addpic_component__WEBPACK_IMPORTED_MODULE_13__["AddpicComponent"],
                _albumpics_albumpics_component__WEBPACK_IMPORTED_MODULE_14__["AlbumpicsComponent"],
                _picture_picture_component__WEBPACK_IMPORTED_MODULE_15__["PictureComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_16__["EditprofileComponent"],
                _editalbum_editalbum_component__WEBPACK_IMPORTED_MODULE_17__["EditalbumComponent"],
                _editpicture_editpicture_component__WEBPACK_IMPORTED_MODULE_18__["EditpictureComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albums */ "./src/app/albums/index.ts");
/* harmony import */ var _createalbum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createalbum */ "./src/app/createalbum/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _addpic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addpic */ "./src/app/addpic/index.ts");
/* harmony import */ var _albumpics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./albumpics */ "./src/app/albumpics/index.ts");
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./picture */ "./src/app/picture/index.ts");
/* harmony import */ var _editprofile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editprofile */ "./src/app/editprofile/index.ts");
/* harmony import */ var _editalbum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editalbum */ "./src/app/editalbum/index.ts");
/* harmony import */ var _editpicture__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editpicture */ "./src/app/editpicture/index.ts");













var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'myalbums', component: _albums__WEBPACK_IMPORTED_MODULE_4__["AlbumsComponent"] },
    { path: 'addalbum', component: _createalbum__WEBPACK_IMPORTED_MODULE_5__["CreatealbumComponent"] },
    { path: 'editprofile', component: _editprofile__WEBPACK_IMPORTED_MODULE_10__["EditprofileComponent"] },
    { path: 'addpic/:id', component: _addpic__WEBPACK_IMPORTED_MODULE_7__["AddpicComponent"] },
    { path: 'album/:id/pics', component: _albumpics__WEBPACK_IMPORTED_MODULE_8__["AlbumpicsComponent"] },
    { path: 'pic/:id', component: _picture__WEBPACK_IMPORTED_MODULE_9__["PictureComponent"] },
    { path: 'editalbum/:id', component: _editalbum__WEBPACK_IMPORTED_MODULE_11__["EditalbumComponent"] },
    { path: 'editpicture/:id', component: _editpicture__WEBPACK_IMPORTED_MODULE_12__["EditpictureComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/createalbum/createalbum.component.html":
/*!********************************************************!*\
  !*** ./src/app/createalbum/createalbum.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Album</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"albumName\">Album Name</label>\n        <input type=\"text\" formControlName=\"albumName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.albumName.errors }\"/>\n        <div *ngIf=\"submitted && f.albumName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.albumName.errors.required\">Album Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" formControlName=\"description\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"/>\n        <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"image-upload-container btn btn-bwm\">\n            <span>Select Cover Photo: </span>\n            <input formControlName=\"coverPic\" #name\n                   type=\"file\"\n                   accept=\"image/*\"\n                   name=\"coverPic\"\n                   (change)=\"processFile(name)\"/>\n\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"privacy\">Privacy </label><br/>\n        <input type=\"radio\" value=\"public\" name=\"privacy\" formControlName=\"privacy\"> Public\n        <input type=\"radio\" value=\"link_sharing\" name=\"privacy\" formControlName=\"privacy\"> Link Sharing\n        <input type=\"radio\" value=\"private\" name=\"privacy\" formControlName=\"privacy\" [checked]=\"true\"> Private\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Add</button>\n        <img *ngIf=\"loading\" class=\"pl-3\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n    <!--  <div *ngIf=\"selectedFile\" class=\"img-preview-container\">-->\n\n    <!--    <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"-->\n    <!--         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">-->\n    <!--      <div class=\"img-spinning-circle\"></div>-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>-->\n    <!--    <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>-->\n    <!--  </div>-->\n</form>\n"

/***/ }),

/***/ "./src/app/createalbum/createalbum.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createalbum/createalbum.component.ts ***!
  \******************************************************/
/*! exports provided: CreatealbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatealbumComponent", function() { return CreatealbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var CreatealbumComponent = /** @class */ (function () {
    function CreatealbumComponent(formBuilder, router, authenticationService, userService, alertService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.picUpload = false;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    CreatealbumComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    CreatealbumComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    CreatealbumComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        console.log(imageInput.files[0]);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picUpload = true;
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(_this.selectedFile.file);
            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    };
    CreatealbumComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            albumName: ['Temp', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            privacy: ['private'],
            coverPic: [],
        });
    };
    Object.defineProperty(CreatealbumComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreatealbumComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('coverPic', this.selectedFile.file);
        }
        formData.append('albumName', this.registerForm.value['albumName']);
        formData.append('description', this.registerForm.value['description']);
        formData.append('privacy', this.registerForm.value['privacy']);
        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)
        this.userService.createAlbum(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Album Created', true);
            _this.router.navigate(['/']);
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
            else {
                _this.alertService.error(error);
                _this.loading = false;
            }
        });
    };
    CreatealbumComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    CreatealbumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./createalbum.component.html */ "./src/app/createalbum/createalbum.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], CreatealbumComponent);
    return CreatealbumComponent;
}());



/***/ }),

/***/ "./src/app/createalbum/index.ts":
/*!**************************************!*\
  !*** ./src/app/createalbum/index.ts ***!
  \**************************************/
/*! exports provided: CreatealbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createalbum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createalbum.component */ "./src/app/createalbum/createalbum.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatealbumComponent", function() { return _createalbum_component__WEBPACK_IMPORTED_MODULE_0__["CreatealbumComponent"]; });




/***/ }),

/***/ "./src/app/editalbum/editalbum.component.html":
/*!****************************************************!*\
  !*** ./src/app/editalbum/editalbum.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Album</h2>\n<img src={{album.coverPic}} width=\"540\"><br>\n<div *ngIf=\"!album.coverPic\">\n    <img src=\"assets/img/default_image.jpg\" width=\"600\" height=\"400\">\n</div>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"albumName\">Album Name</label>\n        <input type=\"text\" formControlName=\"albumName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.albumName.errors }\"/>\n        <div *ngIf=\"submitted && f.albumName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.albumName.errors.required\">Album Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" formControlName=\"description\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"/>\n        <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"image-upload-container btn btn-bwm\">\n            <span>Select Cover Photo: </span>\n            <input formControlName=\"coverPic\" #name\n                   type=\"file\"\n                   accept=\"image/*\"\n                   name=\"coverPic\"\n                   (change)=\"processFile(name)\"/>\n\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"privacy\">Privacy </label><br/>\n        <input type=\"radio\" value=\"public\" name=\"privacy\" formControlName=\"privacy\"> Public\n        <input type=\"radio\" value=\"link_sharing\" name=\"privacy\" formControlName=\"privacy\"> Link Sharing\n        <input type=\"radio\" value=\"private\" name=\"privacy\" formControlName=\"privacy\"> Private\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n        <img *ngIf=\"loading\" class=\"pl-3\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a routerLink=\"/\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n    <!--  <div *ngIf=\"selectedFile\" class=\"img-preview-container\">-->\n\n    <!--    <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"-->\n    <!--         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">-->\n    <!--      <div class=\"img-spinning-circle\"></div>-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>-->\n    <!--    <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>-->\n    <!--  </div>-->\n</form>\n"

/***/ }),

/***/ "./src/app/editalbum/editalbum.component.ts":
/*!**************************************************!*\
  !*** ./src/app/editalbum/editalbum.component.ts ***!
  \**************************************************/
/*! exports provided: EditalbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalbumComponent", function() { return EditalbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var EditalbumComponent = /** @class */ (function () {
    function EditalbumComponent(formBuilder, router, authenticationService, userService, alertService, route) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.picUpload = false;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    EditalbumComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    EditalbumComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    EditalbumComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        console.log(imageInput.files[0]);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picUpload = true;
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(_this.selectedFile.file);
            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    };
    EditalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.getData();
        this.registerForm = this.formBuilder.group({
            albumName: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [],
            privacy: [],
            coverPic: []
        });
    };
    Object.defineProperty(EditalbumComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditalbumComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('coverPic', this.selectedFile.file);
        }
        formData.append('albumId', this.id);
        formData.append('name', this.registerForm.value['albumName']);
        formData.append('privacy', this.registerForm.value['privacy']);
        formData.append('description', this.registerForm.value['description']);
        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)
        this.userService.editAlbum(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Album Saved', true);
            history.back();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EditalbumComponent.prototype.getData = function () {
        var _this = this;
        this.userService.getPrivateAlbums().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (albums) {
            albums.forEach(function (alb) {
                if (alb.id == _this.id) {
                    _this.album = alb;
                }
            });
            if (_this.album == undefined)
                _this.router.navigate(['/']);
            console.log(_this.album);
            _this.registerForm.setValue({
                'albumName': _this.album.name,
                'description': _this.album.description,
                'privacy': _this.album.privacy,
                'coverPic': ''
            });
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    EditalbumComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    EditalbumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./editalbum.component.html */ "./src/app/editalbum/editalbum.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditalbumComponent);
    return EditalbumComponent;
}());



/***/ }),

/***/ "./src/app/editalbum/index.ts":
/*!************************************!*\
  !*** ./src/app/editalbum/index.ts ***!
  \************************************/
/*! exports provided: EditalbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editalbum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editalbum.component */ "./src/app/editalbum/editalbum.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditalbumComponent", function() { return _editalbum_component__WEBPACK_IMPORTED_MODULE_0__["EditalbumComponent"]; });




/***/ }),

/***/ "./src/app/editpicture/editpicture.component.html":
/*!********************************************************!*\
  !*** ./src/app/editpicture/editpicture.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit Picture</h2>\n<img src={{pic.picture}} width=\"540\"><br>\n<div *ngIf=\"!pic.picture\">\n    <img src=\"assets/img/default_image.jpg\" width=\"600\" height=\"400\">\n</div>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" formControlName=\"description\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"/>\n        <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"image-upload-container btn btn-bwm\">\n            <span>Select Cover Photo: </span>\n            <input formControlName=\"picture\" #name\n                   type=\"file\"\n                   accept=\"image/*\"\n                   name=\"picture\"\n                   (change)=\"processFile(name)\"/>\n\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"privacy\">Privacy </label><br/>\n        <input type=\"radio\" value=\"public\" name=\"privacy\" formControlName=\"privacy\"> Public\n        <input type=\"radio\" value=\"link_sharing\" name=\"privacy\" formControlName=\"privacy\"> Link Sharing\n        <input type=\"radio\" value=\"private\" name=\"privacy\" formControlName=\"privacy\"> Private\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n        <img *ngIf=\"loading\" class=\"pl-3\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a routerLink=\"/\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n    <!--  <div *ngIf=\"selectedFile\" class=\"img-preview-container\">-->\n\n    <!--    <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"-->\n    <!--         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">-->\n    <!--      <div class=\"img-spinning-circle\"></div>-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>-->\n    <!--    <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>-->\n    <!--  </div>-->\n</form>\n"

/***/ }),

/***/ "./src/app/editpicture/editpicture.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editpicture/editpicture.component.ts ***!
  \******************************************************/
/*! exports provided: EditpictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpictureComponent", function() { return EditpictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var EditpictureComponent = /** @class */ (function () {
    function EditpictureComponent(formBuilder, router, authenticationService, userService, alertService, route) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.picUpload = false;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    EditpictureComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    EditpictureComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    EditpictureComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        console.log(imageInput.files[0]);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picUpload = true;
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(_this.selectedFile.file);
            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    };
    EditpictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.getData();
        this.registerForm = this.formBuilder.group({
            description: [],
            privacy: [],
            picture: []
        });
    };
    Object.defineProperty(EditpictureComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditpictureComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('picture', this.selectedFile.file);
        }
        formData.append('picId', this.id);
        formData.append('privacy', this.registerForm.value['privacy']);
        formData.append('description', this.registerForm.value['description']);
        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)
        this.userService.editPic(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Photo Saved', true);
            history.back();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EditpictureComponent.prototype.getData = function () {
        var _this = this;
        this.userService.getPic(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (albums) {
            _this.pic = albums;
            console.log(albums);
            _this.registerForm.setValue({
                'description': _this.pic.description,
                'privacy': _this.pic.privacy,
                'picture': ''
            });
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    EditpictureComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    EditpictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./editpicture.component.html */ "./src/app/editpicture/editpicture.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditpictureComponent);
    return EditpictureComponent;
}());



/***/ }),

/***/ "./src/app/editpicture/index.ts":
/*!**************************************!*\
  !*** ./src/app/editpicture/index.ts ***!
  \**************************************/
/*! exports provided: EditpictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editpicture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpicture.component */ "./src/app/editpicture/editpicture.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditpictureComponent", function() { return _editpicture_component__WEBPACK_IMPORTED_MODULE_0__["EditpictureComponent"]; });




/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<img src={{user.profilePic}} width=\"540\"><br>\n<div *ngIf=\"!user.profilePic\">\n    <img src=\"assets/img/default_image.jpg\" width=\"600\" height=\"400\">\n</div>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" (ngModel)=\"user.firstName\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"/>\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"/>\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/>\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"image-upload-container btn btn-bwm\">\n            <span>Select Image </span>\n            <input formControlName=\"profilePic\" #name\n                   type=\"file\"\n                   accept=\"image/*\"\n                   name=\"profilePic\"\n                   (change)=\"processFile(name)\"/>\n\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"gender\">Gender </label><br/>\n        <input type=\"radio\" value=\"male\" name=\"gender\" formControlName=\"gender\"> Male\n        <input type=\"radio\" value=\"female\" name=\"gender\" formControlName=\"gender\"> Female\n        <input type=\"radio\" value=\"undisclosed\" name=\"gender\" formControlName=\"gender\"> Prefer not to\n        tell\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n        <img *ngIf=\"loading\" class=\"pl-3\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a routerLink=\"/\" class=\"btn btn-link\">Cancel</a>\n        <a (click)=\"deleteProfile()\" class=\"btn btn-danger\">Delete Profile</a>\n    </div>\n\n    <!--  <div *ngIf=\"selectedFile\" class=\"img-preview-container\">-->\n\n    <!--    <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"-->\n    <!--         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">-->\n    <!--      <div class=\"img-spinning-circle\"></div>-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>-->\n    <!--    <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>-->\n    <!--  </div>-->\n</form>\n"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(formBuilder, router, authenticationService, userService, alertService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.picUpload = false;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    EditprofileComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    EditprofileComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    EditprofileComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        console.log(imageInput.files[0]);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picUpload = true;
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(_this.selectedFile.file);
            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    };
    EditprofileComponent.prototype.ngOnInit = function () {
        this.getData();
        this.registerForm = this.formBuilder.group({
            firstName: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [],
            password: [''],
            gender: [],
            profilePic: []
        });
    };
    Object.defineProperty(EditprofileComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditprofileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('profilePic', this.selectedFile.file);
        }
        formData.append('firstName', this.registerForm.value['firstName']);
        formData.append('gender', this.registerForm.value['gender']);
        formData.append('lastName', this.registerForm.value['lastName']);
        formData.append('password', this.registerForm.value['password']);
        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)
        this.userService.editProfile(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Profile Saved', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EditprofileComponent.prototype.getData = function () {
        var _this = this;
        this.userService.getProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user.gender);
            _this.registerForm.setValue({ 'firstName': _this.user.firstName, 'lastName': _this.user.lastName, 'password': '', gender: _this.user.gender, 'profilePic': '' });
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    EditprofileComponent.prototype.deleteProfile = function () {
        var _this = this;
        this.userService.deleteUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function () {
            _this.authenticationService.logout();
            _this.router.navigate(['/login']);
        });
    };
    EditprofileComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    EditprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/editprofile/editprofile.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/editprofile/index.ts":
/*!**************************************!*\
  !*** ./src/app/editprofile/index.ts ***!
  \**************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return _editprofile_component__WEBPACK_IMPORTED_MODULE_0__["EditprofileComponent"]; });




/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--    <div *ngFor=\"let album of albums\"style=\"overflow:auto; alignment: left\" align=\"left\">-->\n<!--        <img src= {{album.coverPic}} width=\"256\" height=\"256\" >-->\n<!--        <h3 style=\"text-align:center;float:left;\">{{album.name}}</h3>-->\n<!--        <h6 style=\"text-align:center;float:left;\"> Created at: {{album.createdAt}}</h6>-->\n<!--        <h5 style=\"text-align:center;float:left;\">{{album.description}}</h5>-->\n\n<!--        <br>-->\n<!--&lt;!&ndash;        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>&ndash;&gt;-->\n<!--    </div>-->\n\n\n<style>\n    div.gallery {\n        margin: 5px;\n        border: 2px solid #ccc;\n        float: left;\n        width: 256px;\n    }\n\n    div.gallery:hover {\n        border: 2px solid #777;\n        text-underline-mode: false;\n    }\n\n    div.gallery img {\n        width: 100%;\n        height: auto;\n    }\n\n    a:hover {\n        text-decoration: none;\n        font-weight: bold;\n        background-color: blue;\n        color: #fff;\n    }\n\n    div.name {\n        padding: 2px;\n        text-align: center;\n        color: #111111;\n        font-size: x-large;\n    }\n\n    div.created {\n        padding: 2px;\n        text-align: center;\n        font-size: small;\n        color: #555555;\n\n    }\n\n    div.desc {\n        padding: 8px;\n        text-align: center;\n        font-size: medium;\n        color: #333333;\n    }\n\n    div.likes {\n        padding: 4px;\n        text-align: center;\n        font-size: small;\n        color: #CC0000;\n    }\n\n    div.like {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #FF0000;\n        border: 1px solid #ccc;\n    }\n\n    div.unlike {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n\n    div.delete {\n        padding: 4px;\n        text-align: center;\n        font-size: Large;\n        color: #550000;\n        border: 2px solid #ccc;\n    }\n\n    div.add {\n        padding: 4px;\n        text-align: center;\n        font-size: large;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n\n</style>\n\n<h1>Hi {{currentUser.firstName}}!</h1>\n<h3>All Public Albums (Tap to see contents):</h3>\n<br>\n\n\n<div *ngFor=\"let album of albums\" class=\"gallery\">\n\n    <a target=\"_blank\" (click)=\"openAlbum(album.id)\">\n        <div *ngIf=\"album.coverPic\" class=\"like\">\n            <img src={{album.coverPic}} width=\"600\" height=\"400\">\n        </div>\n        <div *ngIf=\"!album.coverPic\" class=\"like\">\n            <img src=\"assets/img/default_image.jpg\" width=\"600\" height=\"400\">\n        </div>\n        <div class=\"name\">{{album.name}}</div>\n        <div class=\"created\">{{album.createdAt}}</div>\n        <div class=\"desc\">{{album.description}}</div>\n        <div class=\"likes\">{{album.likes}} likes</div>\n    </a>\n    <a target=\"_blank\" (click)=\"likeAlbum(album)\">\n        <div *ngIf=\"album.liked\" class=\"like\">Unlike!</div>\n        <div *ngIf=\"!album.liked\" class=\"unlike\">Like!</div>\n\n    </a>\n\n    <a (click)=\"addPhoto(album.id)\">\n        <div *ngIf=\"album.mine\" class=\"add\">Add Photo</div>\n    </a>\n\n\n    <a (click)=\"editAlbum(album.id)\">\n        <div *ngIf=\"album.mine\" class=\"delete\">Edit Album</div>\n    </a>\n\n    <a *ngIf=\"!album.shared\" (click)=\"shareAlbum(album)\">\n        <div class=\"delete\">Share Album</div>\n    </a>\n    <div *ngIf=\"album.shared\" class=\"delete\">localhost:4200/album/{{album.id}}/pics</div>\n\n\n    <a (click)=\"deleteAlbum(album.id)\">\n        <div *ngIf=\"album.mine\" class=\"delete\">Delete</div>\n    </a>\n\n</div>\n\n<!--<div class=\"gallery\">-->\n<!--    <a target=\"_blank\" href=\"img_forest.jpg\">-->\n<!--        <img src=\"img_forest.jpg\" alt=\"Forest\" width=\"600\" height=\"400\">-->\n<!--    </a>-->\n<!--    <div class=\"desc\">Add a description of the image here</div>-->\n<!--</div>-->\n\n<!--<div class=\"gallery\">-->\n<!--    <a target=\"_blank\" href=\"img_lights.jpg\">-->\n<!--        <img src=\"img_lights.jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\">-->\n<!--    </a>-->\n<!--    <div class=\"desc\">Add a description of the image here</div>-->\n<!--</div>-->\n\n<!--<div class=\"gallery\">-->\n<!--    <a target=\"_blank\" href=\"img_mountains.jpg\">-->\n<!--        <img src=\"img_mountains.jpg\" alt=\"Mountains\" width=\"600\" height=\"400\">-->\n<!--    </a>-->\n<!--    <div class=\"desc\">Add a description of the image here</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, userService, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.albums = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllAlbums();
        console.log('here1');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    HomeComponent.prototype.addPhoto = function (albumId) {
        console.log(albumId);
        this.router.navigate(['/addpic/' + albumId]);
    };
    HomeComponent.prototype.openAlbum = function (albumId) {
        console.log(albumId);
        this.router.navigate(['/album/' + albumId + '/pics']);
    };
    HomeComponent.prototype.likeAlbum = function (picId) {
        var _this = this;
        var formData = new FormData();
        formData.append('pid', picId.id);
        formData.append('is_photo', 'false');
        this.userService.like(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (data) {
            var index = _this.albums.indexOf(picId);
            _this.albums[index].liked = !_this.albums[index].liked;
            if (_this.albums[index].liked) {
                _this.albums[index].likes++;
            }
            else {
                _this.albums[index].likes--;
            }
            console.log(_this.albums[index].likes);
        }, function (error) {
            console.log('error');
        });
    };
    HomeComponent.prototype.deleteAlbum = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllAlbums();
        });
    };
    HomeComponent.prototype.editAlbum = function (id) {
        this.router.navigate(['/editalbum/' + id]);
    };
    HomeComponent.prototype.shareAlbum = function (alb) {
        this.userService.shareAlbum(alb.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (albums) {
            alb.shared = true;
        });
    };
    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllAlbums()
    //     });
    // }
    HomeComponent.prototype.loadAllAlbums = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (albums) {
            _this.albums = albums;
            console.log(albums);
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            if (error == 'Bad Request') {
                _this.alertService.error('Invalid Username or password');
            }
            else {
                _this.alertService.error(error);
            }
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/picture/index.ts":
/*!**********************************!*\
  !*** ./src/app/picture/index.ts ***!
  \**********************************/
/*! exports provided: PictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picture.component */ "./src/app/picture/picture.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PictureComponent", function() { return _picture_component__WEBPACK_IMPORTED_MODULE_0__["PictureComponent"]; });




/***/ }),

/***/ "./src/app/picture/picture.component.html":
/*!************************************************!*\
  !*** ./src/app/picture/picture.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    div.gallery {\n        margin: 5px;\n        border: 2px solid #ccc;\n        float: left;\n        width: 256px;\n    }\n\n    div.gallery:hover {\n        border: 2px solid #777;\n        text-underline-mode: false;\n    }\n\n    div.gallery img {\n        width: 100%;\n        height: auto;\n    }\n\n    a:hover {\n        text-decoration: none;\n        font-weight: bold;\n        background-color: blue;\n        color: #fff;\n    }\n\n    div.name {\n        padding: 2px;\n        text-align: center;\n        color: #111111;\n        font-size: x-large;\n    }\n\n    div.created {\n        padding: 2px;\n        text-align: center;\n        font-size: small;\n        color: #555555;\n\n    }\n\n    div.desc {\n        padding: 8px;\n        text-align: center;\n        font-size: medium;\n        color: #333333;\n    }\n\n    div.likes {\n        padding: 4px;\n        text-align: center;\n        font-size: small;\n        color: #CC0000;\n    }\n\n    div.like {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #FF0000;\n        border: 1px solid #ccc;\n    }\n\n    div.unlike {\n        padding: 4px;\n        text-align: center;\n        font-size: medium;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n\n    div.delete {\n        padding: 4px;\n        text-align: center;\n        font-size: Large;\n        color: #550000;\n        border: 2px solid #ccc;\n    }\n\n    div.add {\n        padding: 4px;\n        text-align: center;\n        font-size: large;\n        color: #AA0000;\n        border: 1px solid #ccc;\n    }\n</style>\n\n<h1>Hi {{currentUser.firstName}}!</h1>\n<h3>Here is your picture:</h3>\n<br>\n\n\n<div class=\"gallery\">\n\n    <a target=\"_blank\">\n        <div *ngIf=\"picture.picture\" class=\"like\">\n            <img src={{picture.picture}} width=\"600\" height=\"400\">\n        </div>\n        <div class=\"created\">{{picture.createdAt}}</div>\n        <div class=\"desc\">{{picture.description}}</div>\n        <div class=\"likes\">{{picture.likes}} likes</div>\n    </a>\n    <a target=\"_blank\" (click)=\"likePicture(picture)\">\n        <div *ngIf=\"picture.liked\" class=\"like\">Unlike!</div>\n        <div *ngIf=\"!picture.liked\" class=\"unlike\">Like!</div>\n    </a>\n\n    <a (click)=\"editPicture(picture.id)\">\n        <div *ngIf=\"picture.mine\" class=\"delete\">Edit Picture</div>\n    </a>\n\n    <a *ngIf=\"!picture.shared\" (click)=\"sharePicture(picture)\">\n        <div class=\"delete\">Share Picture</div>\n    </a>\n    <div *ngIf=\"picture.shared\" class=\"delete\">localhost:4200/pic/{{picture.id}}</div>\n\n    <a (click)=\"deletePicture(picture.id)\">\n        <div *ngIf=\"picture.mine\" class=\"delete\">Delete</div>\n    </a>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/picture/picture.component.ts":
/*!**********************************************!*\
  !*** ./src/app/picture/picture.component.ts ***!
  \**********************************************/
/*! exports provided: PictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureComponent", function() { return PictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PictureComponent = /** @class */ (function () {
    function PictureComponent(authenticationService, userService, router, route) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    PictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.loadAllAlbums();
        console.log('here1');
    };
    PictureComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllAlbums();
    //     });
    // }
    PictureComponent.prototype.likePicture = function (picId) {
        var _this = this;
        var formData = new FormData();
        formData.append('pid', picId.id);
        formData.append('is_photo', 'true');
        this.userService.like(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (data) {
            _this.picture.liked = !_this.picture.liked;
            if (_this.picture.liked) {
                _this.picture.likes++;
            }
            else {
                _this.picture.likes--;
            }
            console.log(_this.picture.likes);
        }, function (error) {
            console.log('error');
        });
    };
    PictureComponent.prototype.editPicture = function (id) {
        this.router.navigate(['/editpicture/' + id]);
    };
    PictureComponent.prototype.deletePicture = function (id) {
        var _this = this;
        this.userService.deletePic(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    PictureComponent.prototype.sharePicture = function (alb) {
        this.userService.sharePic(alb.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (albums) {
            alb.shared = true;
        });
    };
    PictureComponent.prototype.loadAllAlbums = function () {
        var _this = this;
        this.userService.getPic(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (picture) {
            _this.picture = picture;
            console.log(picture);
        }, function (error) {
            if (error == 'Forbidden')
                _this.authenticationService.logout();
        });
    };
    PictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./picture.component.html */ "./src/app/picture/picture.component.html") }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PictureComponent);
    return PictureComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"/>\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"/>\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"/>\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/>\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"image-upload-container btn btn-bwm\">\n            <span>Select Image </span>\n            <input formControlName=\"profilePic\" #name\n                   type=\"file\"\n                   accept=\"image/*\"\n                   name=\"profilePic\"\n                   (change)=\"processFile(name)\"/>\n\n        </label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"gender\">Gender </label><br/>\n        <input type=\"radio\" value=\"male\" name=\"gender\" formControlName=\"gender\"> Male\n        <input type=\"radio\" value=\"female\" name=\"gender\" formControlName=\"gender\"> Female\n        <input type=\"radio\" value=\"undisclosed\" name=\"gender\" formControlName=\"gender\" [checked]=\"true\"> Prefer not to\n        tell\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" class=\"pl-3\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n    <!--  <div *ngIf=\"selectedFile\" class=\"img-preview-container\">-->\n\n    <!--    <div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"-->\n    <!--         [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">-->\n    <!--      <div class=\"img-spinning-circle\"></div>-->\n    <!--    </div>-->\n\n    <!--    <div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>-->\n    <!--    <div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>-->\n    <!--  </div>-->\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.picUpload = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    RegisterComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    RegisterComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        console.log(imageInput.files[0]);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picUpload = true;
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(_this.selectedFile.file);
            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['testing', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['testing', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [''],
            gender: ['undisclosed'],
            password: ['testing', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            profilePic: [],
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('profilePic', this.selectedFile.file);
        }
        formData.append('username', this.registerForm.value['username']);
        formData.append('firstName', this.registerForm.value['firstName']);
        formData.append('lastName', this.registerForm.value['lastName']);
        formData.append('gender', this.registerForm.value['gender']);
        formData.append('password', this.registerForm.value['password']);
        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)
        this.userService.register(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
            if (error == 'Bad Request')
                _this.alertService.error("Username already exists");
            else
                _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
    apiUrl: 'https://demo-gallery-backend.herokuapp.com/api',
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




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

module.exports = __webpack_require__(/*! /home/gkashish/WebstormProjects/photo-gallery-app-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map