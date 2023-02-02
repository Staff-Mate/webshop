import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home-component/home.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatRadioModule} from "@angular/material/radio";
import { PaymentResultEmptyComponent } from './payment-result-empty/payment-result-empty.component';
import { PaymentResultComponent } from './payment-result/payment-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentResultEmptyComponent,
    PaymentResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 2500}
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
