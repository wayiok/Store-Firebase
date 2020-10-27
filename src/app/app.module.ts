import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule } from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { HomepageComponent } from './homepage/homepage.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import { NewItemComponent } from './items/new-item/new-item.component';
import { FormsModule } from "@angular/forms";

import { CrudService } from './service/crud.service'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    ItemsComponent,
    AboutComponent,
    NewItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        FormsModule
    ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
