// Provides the ability to utilize Modules
import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// Decorator - takes the instance of the Service, Directive, etc
// and modifies it in some way before it is used
@NgModule {
    imports: [ BrowserModule ]
}

export class AppModule { }