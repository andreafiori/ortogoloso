import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-modal',
  imports: [CommonModule],
  templateUrl: './invoice-modal.component.html',
  styleUrl: './invoice-modal.component.scss',
})
export class InvoiceModalComponent {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      client: ['', Validators.required],
      date: ['', Validators.required],
      total: ['', [Validators.required, Validators.min(0)]],
      details: this.fb.array([])
    });
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      console.log('Fattura salvata:', this.invoiceForm.value);
    }
  }

}
