import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-send',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './invoice-send.component.html',
  styleUrl: './invoice-send.component.scss',
})
export class InvoiceSendComponent {

  isSendNotificationVisible = false;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', { validators: [Validators.required, Validators.email] }],
    });
  }

  sendInvoice() {
    this.isSendNotificationVisible = true;

    this.form.reset();

    setTimeout(() => {
      this.isSendNotificationVisible = false;
    }, 3000);
  }

  onBackToList() {
    this.router.navigate(['/']);
  }
}
