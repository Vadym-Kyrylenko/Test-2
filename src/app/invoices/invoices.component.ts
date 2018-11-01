import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication-module/communication.service';
import {Router} from '@angular/router';
import {StoreModel} from '../store/store.model';
import {Invoice} from '../store/invoice.model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[] = [];
  invoiceDetail = {
    customer_id: null,
    discount: 0,
    total: 0
  };
  invoiceItem = {
    invoice_id: null,
    product_id: null,
    quantity: 1
  };
  customers = [];
  products = [];
  product = {};

  constructor(private httpService: CommunicationService, private router: Router,
              private storeModel: StoreModel) {
  }

  ngOnInit() {
    this.getInvoices();
    this.httpService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
    this.httpService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  countTotal() {
    const {discount} = this.invoiceDetail;
    const {quantity} = this.invoiceItem;
    const {price = 0} = this.product;
    this.invoiceDetail.total = (quantity * price) - (quantity * price) * (discount / 100);
  }

  selectProduct() {
      this.product = this.products.find(p => p.id === +this.invoiceItem.product_id);
      this.countTotal();
  }

  getInvoices() {
    this.storeModel.getInvoices().subscribe((data: Invoice[]) => {
      this.invoices = [];
      this.invoices = data;
    });
  }

  getCustomerById(id) {
    return this.customers.find(c => c.id === +id) || {};
  }

  postInvoice() {
    this.httpService.postInvoice(this.invoiceDetail).subscribe((data: any) => {
        this.getInvoices();
        this.invoiceItem.invoice_id = data.id;
        this.postInvoiceItems();
    });
  }

  putInvoice(invoice) {
    this.httpService.putInvoice(invoice).subscribe((data: any) => {
    });
  }

  deleteInvoice(invoice) {
    this.httpService.deleteInvoice(invoice).subscribe((data: any) => {
      this.getInvoices();
    });
  }

  onInvoiceClick(id) {
    this.getInvoiceDetail(id);
    this.getInvoiceItem(id);
  }

  getInvoiceDetail(id) {
    this.httpService.getInvoice(id).subscribe(res => {
      console.log(res);
      this.invoiceDetail = res;
    });
  }

  getInvoiceItem(id) {
    this.httpService.getInvoiceItems(id).subscribe(res => {
      console.log(res);
    });
  }

  postInvoiceItems() {
    this.httpService.postInvoiceItems(this.invoiceItem).subscribe((data: any) => {
      this.getInvoices();
      this.resetForm();
    });
  }

  resetForm() {
    this.invoiceDetail = {
      customer_id: null,
      discount: 0,
      total: 0
    };
    this.invoiceItem = {
      invoice_id: null,
      product_id: null,
      quantity: 1
    };
    this.product = {};
  }


  plusQuantity() {
    this.invoiceItem.quantity = this.invoiceItem.quantity + 1;
    this.countTotal();
  }
  minusQuantity() {
    this.invoiceItem.quantity = this.invoiceItem.quantity - 1;
    this.countTotal();
  }
}
