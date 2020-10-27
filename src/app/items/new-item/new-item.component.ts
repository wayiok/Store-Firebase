import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../service/crud.service";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
  }

  productName: string;
  productCattegory:string;

createProduct() {

  let Record = {};
  Record['name'] = this.productName;
  Record['cattegory'] = this.productCattegory;

  this.crudService.createNewProduct(Record).then(res => {
      this.productName = "";
      this.productCattegory = "";
      console.log(res)
  }).catch(error => {console.log(error)})

  alert('Registered');
}

}
