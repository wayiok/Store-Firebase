import { Component, OnInit } from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items =[
      {
        label: 'HOME',
        url: 'home'
      },
      {
        label: 'ITEMS',
        url: 'items'
      },
      {
        label: 'ABOUT US',
        url: 'about'
      }
    ]
  }

}
