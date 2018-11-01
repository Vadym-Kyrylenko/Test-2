import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {CommunicationService} from '../communication-module/communication.service';
import {Observable} from 'rxjs/Observable';
import {Customer} from './customer.model';
import {Invoice} from './invoice.model';


@Injectable()
export class StoreModel {
  private products: Product[];
  private customers: Customer [];
  private invoices: Invoice [];

  constructor(private communication: CommunicationService) {
    this.products = [];
    this.customers = [];
  }

  getProducts() {
    return this.communication.getProducts();
  }

  getCustomers() {
    return new Observable(observer => {
      this.communication.getCustomers().subscribe((data: Customer[]) => {
        this.customers = data;
        observer.next(data);
        observer.complete();
      });
    });
  }

  getInvoices() {
    return this.communication.getInvoices();
  }
}
