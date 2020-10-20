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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    ItemsComponent,
    AboutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenubarModule,
        InputTextModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
