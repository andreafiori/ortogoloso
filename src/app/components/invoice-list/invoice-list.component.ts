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
  invoiceIdToDelete = -1;

  get hasInvoices() {
    return this.getInvoicesLength() > 0;
  }

  constructor(private router: Router) {}

  addInvoice() {
    const invoiceId = this.getInvoicesLength() + 1;

    this.router.navigate(['/add-invoice'], { state: { invoiceId } });
  }

  viewInvoice(invoiceId: number) {
    this.router.navigate(['/view-invoice'], { state: { invoiceId } });
  }

  deleteInvoiceConfirm(index: number) {
    this.invoiceIdToDelete = index;
  }

  deleteInvoice() {
    this.invoices.splice(this.invoiceIdToDelete, 1);
    sessionStorage.setItem('invoices', JSON.stringify(this.invoices));
  }

  private getInvoicesLength() {
    return Object.keys(this.invoices).length;
  }

}
