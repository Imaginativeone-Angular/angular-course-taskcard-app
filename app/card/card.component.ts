import { Component } from '@angular/core';

@Component({

    moduleId: module.id, // from commonjs

    // specify "selector"
    selector: 'app-card',

    // template (html element)
    // Inline templates? No IDE Help
    // template: '<h1></h1>'
    // We need the path to the template file, the paths are relative to the ROOT of the project, not based
    //   on where the current file resides.
    // templateUrl: './card.component.html'
    templateUrl: 'card.component.html', // from commonjs, using the moduleId

    // Very rarely use an inline styleSheet
    // You can have multiple styleSheets for each Component
    styleUrls: ['card.component.css']

})

export class CardComponent{ }

// We now need to add this CardComponent into our Root Module
// app.module.ts