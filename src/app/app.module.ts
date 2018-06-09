import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CompareComponent } from './compare/compare.component';
import { ListComponent } from './list/list.component';
import { APP_CONFIG, AppConfig } from './app.config';
import {CommunicationService} from "./services/communication.service";
import { CardComponent } from './list/card/card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CompareService} from "./services/compare.service";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    AppComponent,
    CompareComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    CommunicationService,
    CompareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
