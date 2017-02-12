// Generic change to this file in order to see it on GitHub

// Provides the ability to utilize Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the Root Component
import { AppComponent } from './app.component'; // Same folder as the Root Module

import { CardComponent } from './card/card.component'; // also declare this

// Decorator - takes the instance of the Service, Directive, etc
// and modifies it in some way before it is used
@NgModule ({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, 
                    CardComponent ], // html for this Component is next
    bootstrap:    [ AppComponent ]
})

export class AppModule { }