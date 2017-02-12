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
var core_1 = require('@angular/core');
var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            // specify "selector"
            selector: 'app-card',
            // template (html element)
            // Inline templates? No IDE Help
            // template: '<h1></h1>'
            // We need the path to the template file, the paths are relative to the ROOT of the project, not based
            //   on where the current file resides.
            // templateUrl: './card.component.html'
            templateUrl: 'card.component.html',
            // Very rarely use an inline styleSheet
            // You can have multiple styleSheets for each Component
            styleUrls: ['card.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
// We now need to add this CardComponent into our Root Module
// app.module.ts 
//# sourceMappingURL=card.component.js.map