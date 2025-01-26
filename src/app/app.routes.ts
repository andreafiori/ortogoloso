import { Route } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoicesAddComponent } from './components/invoices-add/invoices-add.component';

export const appRoutes: Route[] = [
  { path: '', component: InvoiceListComponent },
  { path: 'add-invoice', component: InvoicesAddComponent },
];
