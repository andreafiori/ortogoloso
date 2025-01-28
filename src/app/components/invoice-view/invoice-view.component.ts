import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Invoice } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice-view',
  imports: [CommonModule],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.scss',
})
export class InvoiceViewComponent {

  invoice: Invoice;

  constructor(
    private route: Router,
  ) {

    this.invoice = this.route.getCurrentNavigation()?.extras?.state?.['invoice'];
    if (!this.invoice) {
      this.goBack();
    }

    // TODO merge product data

  }

  goBack() {
    this.route.navigate(['/']);
  }
}
