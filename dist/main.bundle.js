webpackJsonp([0,3],{

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.peopleUrl = '/people';
    }
    // get("/people")
    PersonService.prototype.getPeople = function () {
        return this.http.get(this.peopleUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/people")
    PersonService.prototype.createPerson = function (newPerson) {
        return this.http.post(this.peopleUrl, newPerson)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/people/:id") endpoint not used by Angular app
    // delete("/people/:id")
    PersonService.prototype.deletePerson = function (delPersonId) {
        return this.http.delete(this.peopleUrl + '/' + delPersonId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/people/:id")
    PersonService.prototype.updatePerson = function (putPerson) {
        var putUrl = this.peopleUrl + '/' + putPerson._id;
        return this.http.put(putUrl, putPerson)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    PersonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], PersonService);
    return PersonService;
    var _a;
}());
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/person.service.js.map

/***/ },

/***/ 243:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 243;


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(351);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/main.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(360),
            styles: [__webpack_require__(357)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/app.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_person_details_person_details_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__people_person_list_person_list_component__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__people_person_details_person_details_component__["a" /* PersonDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__people_person_list_person_list_component__["a" /* PersonListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/app.module.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_service__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonDetailsComponent = (function () {
    function PersonDetailsComponent(personService) {
        this.personService = personService;
    }
    PersonDetailsComponent.prototype.createPerson = function (person) {
        var _this = this;
        this.personService.createPerson(person).then(function (newPerson) {
            _this.createHandler(newPerson);
        });
    };
    PersonDetailsComponent.prototype.updatePerson = function (person) {
        var _this = this;
        this.personService.updatePerson(person).then(function (updatedPerson) {
            _this.updateHandler(updatedPerson);
        });
    };
    PersonDetailsComponent.prototype.deletePerson = function (personId) {
        var _this = this;
        this.personService.deletePerson(personId).then(function (deletedPersonId) {
            _this.deleteHandler(deletedPersonId);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__person__["a" /* Person */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__person__["a" /* Person */]) === 'function' && _a) || Object)
    ], PersonDetailsComponent.prototype, "person", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], PersonDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], PersonDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], PersonDetailsComponent.prototype, "deleteHandler", void 0);
    PersonDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'person-details',
            template: __webpack_require__(361),
            styles: [__webpack_require__(358)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__person_service__["a" /* PersonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__person_service__["a" /* PersonService */]) === 'function' && _b) || Object])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/person-details.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_service__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PersonListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonListComponent = (function () {
    function PersonListComponent(personService) {
        var _this = this;
        this.personService = personService;
        this.getIndexOfPerson = function (personId) {
            return _this.people.findIndex(function (person) {
                return person._id === personId;
            });
        };
        this.deletePerson = function (personId) {
            var idx = _this.getIndexOfPerson(personId);
            if (idx !== -1) {
                _this.people.splice(idx, 1);
                _this.selectPerson(null);
            }
            return _this.people;
        };
        this.addPerson = function (person) {
            _this.people.push(person);
            _this.selectPerson(person);
            return _this.people;
        };
        this.updatePerson = function (person) {
            var idx = _this.getIndexOfPerson(person._id);
            if (idx !== -1) {
                _this.people[idx] = person;
                _this.selectPerson(person);
            }
            return _this.people;
        };
    }
    PersonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService
            .getPeople()
            .then(function (people) {
            _this.people = people.map(function (person) {
                return person;
            });
        });
    };
    PersonListComponent.prototype.selectPerson = function (person) {
        this.selectedPerson = person;
    };
    PersonListComponent.prototype.createNewPerson = function () {
        var person = {
            name: '',
            favoriteCity: ''
        };
        // By default, a newly-created person will have the selected state.
        this.selectPerson(person);
    };
    PersonListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'person-list',
            template: __webpack_require__(362),
            styles: [__webpack_require__(359)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */]) === 'function' && _a) || Object])
    ], PersonListComponent);
    return PersonListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/person-list.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Person; });
var Person = (function () {
    function Person() {
    }
    return Person;
}());
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/person.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/dominiquealexander/Documents/code/dev/spotifellow/src/environment.js.map

/***/ },

/***/ 357:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 358:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 359:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 360:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <person-list></person-list>\n</div>\n"

/***/ },

/***/ 361:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"person\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"person._id\">Person Details</h2>\n    <h2 *ngIf=\"!person._id\">New Person</h2>\n  </div>\n</div>\n<div *ngIf=\"person\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"person-name\">Name</label>\n      <input class=\"form-control\" name=\"person-name\" [(ngModel)]=\"person.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"person-favoriteCity\">Favorite City</label>\n      <input class=\"form-control\" name=\"person-favoriteCity\" [(ngModel)]=\"person.favoriteCity\" placeholder=\"Favorite City\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!person._id\" (click)=\"createPerson(person)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"person._id\" (click)=\"updatePerson(person)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"person._id\" (click)=\"deletePerson(person._id)\">Delete</button>\n  </form>\n</div>\n"

/***/ },

/***/ 362:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>People</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let person of people\"\n        (click)=\"selectPerson(person)\"\n        [class.active]=\"person === selectedPerson\">\n        {{person.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewPerson()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <person-details\n      [person]=\"selectedPerson\"\n      [createHandler]=\"addPerson\"\n      [updateHandler]=\"updatePerson\"\n      [deleteHandler]=\"deletePerson\">\n    </person-details>\n  </div>\n</div>\n"

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(244);


/***/ }

},[373]);
//# sourceMappingURL=main.bundle.map