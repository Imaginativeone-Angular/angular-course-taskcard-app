// Generic change to this file in order to see it on GitHub
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Provides the ability to utilize Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Import the Root Component
var app_component_1 = require('./app.component'); // Same folder as the Root Module
var card_component_1 = require('./card/card.component'); // also declare this
// Decorator - takes the instance of the Service, Directive, etc
// and modifies it in some way before it is used
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        // also declare this
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent,
                card_component_1.CardComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map