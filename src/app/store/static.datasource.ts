import { Injectable } from '@angular/core';
import { Product } from './product.model';


@Injectable()
export class StaticDataSource {
  private products: Product[];

  constructor() {
    this.products = [
      new Product(1, 'Джордж', 12),
      new Product(2, 'Билли', 14),
      new Product(3, 'Семен', 16),
      new Product(4, 'Николас', 17),
      new Product(5, 'Дональд', 44),
    ];
  }

  getProducts(): Product[] {
      return this.products;
  }
}
