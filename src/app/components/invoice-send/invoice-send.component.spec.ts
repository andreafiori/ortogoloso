import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceSendComponent } from './invoice-send.component';

describe('InvoiceSendComponent', () => {
  let component: InvoiceSendComponent;
  let fixture: ComponentFixture<InvoiceSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceSendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
