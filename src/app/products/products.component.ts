import { Component, OnInit } from '@angular/core';
import {Product} from '../store/product.model';
import {StoreModel} from '../store/store.model';
import {Router} from '@angular/router';
import {CommunicationService} from '../communication-module/communication.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product | any;

  constructor(private httpService: CommunicationService, private router: Router,
              private storeModel: StoreModel) {
    this.newProduct = {
      name: 'name',
      price: null
    };
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.storeModel.getProducts().subscribe((data: Product[]) => {
      this.products = [];
      this.products = data;
    });
  }

  deleteProduct(product) {
    this.httpService.deleteProduct(product).subscribe((data: any) => {
      this.getProducts();
    });
  }
}
