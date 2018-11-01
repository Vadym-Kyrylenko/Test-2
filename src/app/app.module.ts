import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommunicationService} from './communication-module/communication.service';
import {HttpClientModule} from '@angular/common/http';
import {ModelModule} from './store/model.module';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  // { path: 'home', component: AppComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'invoices', component: InvoicesComponent},
  // { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProductsComponent,
    InvoicesComponent,
    HeaderComponent,
    MainComponent,
    InvoiceItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    ModelModule,
    FormsModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
