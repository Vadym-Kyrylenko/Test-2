import { Component, OnInit } from '@angular/core';
import {Product} from '../store/product.model';
import {CommunicationService} from '../communication-module/communication.service';
import {Router} from '@angular/router';
import {StoreModel} from '../store/store.model';
import {Customer} from '../store/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  newCustomer: Customer | any;

  constructor(private httpService: CommunicationService, private router: Router,
              private storeModel: StoreModel) {
    this.newCustomer = {
      name: 'name',
      address: 'address',
      phone: 'phone'
    };
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.storeModel.getCustomers().subscribe((data: Customer[]) => {
      this.customers = [];
      this.customers = data;
    });
  }

  deleteCustomer(customer) {
    this.httpService.deleteCustomer(customer).subscribe((data: any) => {
      this.getCustomers();
    });
  }
}
