import { Routes } from '@angular/router';
import { SupersetDashboard } from './components/superset-dashboard.component';
import { SupersetChartComponent } from './components/superset-chart.component';

export const routes: Routes = [
    { path: '', component: SupersetDashboard },
    { path: 'chart', component: SupersetChartComponent }
];
