import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home-component/home.component";
import {PaymentResultEmptyComponent} from "./payment-result-empty/payment-result-empty.component";
import {PaymentResultComponent} from "./payment-result/payment-result.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'payment',
    component: PaymentResultEmptyComponent,
    children: [
      {path: 'success', component: PaymentResultComponent},
      {path: 'fail', component: PaymentResultComponent},
      {path: 'error', component: PaymentResultComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
