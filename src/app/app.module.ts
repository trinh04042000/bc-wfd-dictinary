import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryService} from './dictionary.service';
import {ReactiveFormsModule} from '@angular/forms';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        DictionaryComponent,
        DictionaryPageComponent,
        DictionaryDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [DictionaryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
