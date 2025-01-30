import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Invoice } from '../../models/invoice.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-invoice-view',
  imports: [CommonModule],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.scss',
})
export class InvoiceViewComponent {

  invoice: Invoice;
  invoicesOptions = environment.invoicesOptions;

  constructor(
    private route: Router,
  ) {

    this.invoice = this.route.getCurrentNavigation()?.extras?.state?.['invoice'];
    if (!this.invoice) {
      this.goBack();
    }

    // Format date
    this.invoice.date = new Date(this.invoice.date).toLocaleString('it-IT', {  year: 'numeric', month: 'long', day: 'numeric' });

    // Replace product codes with label
    this.invoice.products.map(product => {
      const paymentMode = this.invoicesOptions.paymentModes.find(payMode => payMode.code === product.paymentMode);
      if (paymentMode) {
        product.paymentMode = paymentMode.label;
      }

      const paymentSolution = this.invoicesOptions.paymentSolutions.find(solution => solution.code === product.paymentSolution);
      if (paymentSolution) {
        product.paymentSolution = paymentSolution.label;
      }
    });

  }

  goBack() {
    this.route.navigate(['/']);
  }
}
