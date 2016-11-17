import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VISUAL_COMPONENTS } from './visuals';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, VISUAL_COMPONENTS],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent, VISUAL_COMPONENTS]
})
export class AppModule { }
