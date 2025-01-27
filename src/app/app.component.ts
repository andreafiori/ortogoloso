import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName = environment.company.name;

  currentYear = new Date().getFullYear();
}
