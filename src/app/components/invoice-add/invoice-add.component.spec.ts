import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceAddComponent } from './invoice-add.component';
import { provideRouter, Router } from '@angular/router';
import { appRoutes } from '../../app.routes';

describe('InvoiceAddComponent', () => {
  let component: InvoiceAddComponent;
  let fixture: ComponentFixture<InvoiceAddComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InvoiceAddComponent
      ],
      providers: [
        provideRouter(appRoutes), // Provide the app routes
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceAddComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the Router
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});