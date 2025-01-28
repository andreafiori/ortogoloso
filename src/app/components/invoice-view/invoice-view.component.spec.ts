import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceViewComponent } from './invoice-view.component';
import { provideRouter, Router } from '@angular/router';
import { appRoutes } from '../../app.routes';

describe('InvoiceViewComponent', () => {
  let component: InvoiceViewComponent;
  let fixture: ComponentFixture<InvoiceViewComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InvoiceViewComponent,
      ],
      providers: [
        provideRouter(appRoutes), // Provide the app routes
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceViewComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the Router
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});