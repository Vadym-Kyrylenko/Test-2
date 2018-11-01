import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CommunicationService {

  constructor(private http: HttpClient) {
  }

  getProducts(): any {
    return this.http.get(environment.backurl + '/products');
  }

  postProduct(products: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.post(environment.backurl + '/products',  products,  httpOptions);
  }

  putProduct(product: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.put(environment.backurl + '/products', product, httpOptions);
  }

  deleteProduct(product: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.delete(environment.backurl + '/products/' + product, httpOptions);
  }

  getCustomers(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.get(environment.backurl + '/customers', httpOptions);
  }

  postCustomer(customer: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.post(environment.backurl + '/customers', customer, httpOptions);
  }

  putCustomer(customer: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.put(environment.backurl + '/customers', customer, httpOptions);
  }

  deleteCustomer(customer: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.delete(environment.backurl + '/customers/' + customer, httpOptions);
  }

  getInvoices(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.get(environment.backurl + '/invoices', httpOptions);
  }

  postInvoice(invoice: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.post(environment.backurl + '/invoices', invoice, httpOptions);
  }

  putInvoice(invoice: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.put(environment.backurl + '/invoices', invoice, httpOptions);
  }

  deleteInvoice(invoice: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.delete(environment.backurl + '/invoices/' + invoice, httpOptions);
  }

  getInvoice(id: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.delete(`${environment.backurl}/invoices/${id}`, httpOptions);
  }

  getInvoiceItems(id): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.get(`${environment.backurl}/invoices/${id}/items`, httpOptions);
  }

  postInvoiceItems(item): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.post(`${environment.backurl}/invoices/${item.id}/items`, JSON.stringify([item]), httpOptions);
  }

  putInvoiceItem(invoice: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.put(environment.backurl + '/invoices/{invoice.id}/items/{id}', invoice, httpOptions);
  }

  deleteInvoiceItem(invoice: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      })
    };
    return this.http.delete(environment.backurl + '/invoices/{invoice.id}/items/{id}' + invoice, httpOptions);
  }
}

