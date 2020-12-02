import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gifts', component: GiftGivingComponent },
  { path: 'counter', component: CounterComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
