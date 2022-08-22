import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';

const routes: Routes = [
  { path: 'order', component: PizzaOrderComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
