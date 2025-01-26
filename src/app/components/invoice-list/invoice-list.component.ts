import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss',
})
export class InvoiceListComponent {
  
  invoices = JSON.parse(sessionStorage.getItem('invoices') || '[]');

  get hasInvoices() {
    return Object.keys(this.invoices).length > 0;
  }

  constructor(private router: Router) {}

  addInvoice() {
    this.router.navigate(['/add-invoice']);
  }

  deleteInvoice(index: number) {
    this.invoices.splice(index, 1);
    sessionStorage.setItem('invoices', JSON.stringify(this.invoices));
  }

}
