import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-invoices-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './invoices-add.component.html',
  styleUrl: './invoices-add.component.scss',
})
export class InvoicesAddComponent implements OnInit, OnDestroy {
  invoiceForm: FormGroup;
  private destroy$ = new Subject<void>();

  invoicesOptions = {
    ivaPercentage: 10,
    paymentModes: [
      {
        code: 'bonifico',
        label: 'Bonifico bancario',
      },
      {
        code: 'credit-card',
        label: 'Carta di credito',
      },
    ],
    paymentSolutions: [
      {
        code: 'unica',
        label: 'Soluzione unica',
      },
      {
        code: 'rate',
        label: 'Rate',
      },
    ],
  };

  get products(): FormArray {
    return this.invoiceForm.controls['products'] as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.invoiceForm = this.fb.group({
      number: ['', { validators: [Validators.required], asyncValidators: null }],
      year: [new Date().getFullYear(), { validators: [Validators.required], asyncValidators: null }],
      date: [new Date().toISOString().split('T')[0], { validators: [Validators.required], asyncValidators: null }],
      clientName: ['', { validators: [Validators.required], asyncValidators: null }],
      clientVAT: [
        '',
        {
          validators: [Validators.required, Validators.pattern(/^\d{11}$/), Validators.maxLength(11)],
          asyncValidators: null,
        },
      ],
      products: this.fb.array([]),
      total: ['', { validators: [Validators.required, Validators.min(0)], asyncValidators: null }],
    });

    this.invoiceForm.patchValue({
      number: 1,
    });
  }

  ngOnInit(): void {
    this.addProductOrService(); // Add first product
  }

  addProductOrService() {
    const soldProductOrService = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      paymentSolution: ['', Validators.required],
      paymentMode: ['', Validators.required],
    });

    soldProductOrService.valueChanges.subscribe(() => {
      const total = this.getTotal();
      this.invoiceForm.get('total')?.setValue(total, { emitEvent: false });
    });

    this.products.push(soldProductOrService);
  }

  saveInvoice() {
    if (this.invoiceForm.valid && this.products.length > 0) {
      const invoices = JSON.parse(sessionStorage.getItem('invoices') || '[]');
      invoices.push(this.invoiceForm.value);
      sessionStorage.setItem('invoices', JSON.stringify(invoices));
      this.router.navigate(['/']);
    }
  }

  onRemoveProduct(i: number) {
    this.products.removeAt(i);
  }

  getTotal() {
    let tot = 0;
    for (let i = 0; i < this.products.length; i++) {
      const currentProductForm = this.products.at(i) as FormGroup;
      tot = tot + Number(currentProductForm.controls['amount'].value);
    }
    return tot + tot * 0.2; // TODO: add IVA %
  }

  onUndo() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
