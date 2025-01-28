import { Route } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceAddComponent } from './components/invoice-add/invoice-add.component';
import { InvoiceViewComponent } from './components/invoice-view/invoice-view.component';
import { InvoiceSendComponent } from './components/invoice-send/invoice-send.component';

export const appRoutes: Route[] = [
  { path: '', component: InvoiceListComponent },
  { path: 'add-invoice', component: InvoiceAddComponent },
  { path: 'view-invoice', component: InvoiceViewComponent },
  { path: 'send-invoice', component: InvoiceSendComponent },
];
