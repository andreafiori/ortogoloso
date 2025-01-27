import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoicesAddComponent } from './invoices-add.component';
import { provideRouter, Router } from '@angular/router';
import { appRoutes } from '../../app.routes';

describe('InvoicesAddComponent', () => {
  let component: InvoicesAddComponent;
  let fixture: ComponentFixture<InvoicesAddComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InvoicesAddComponent
      ],
      providers: [
        provideRouter(appRoutes), // Provide the app routes
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicesAddComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the Router
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});