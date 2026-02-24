import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupersetDashboard } from './components/superset-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SupersetDashboard],
  template: '<router-outlet></router-outlet>'
})
export class App {
  protected readonly title = signal('apache-superset-app');
}