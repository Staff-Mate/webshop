import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiKey: FormControl = new FormControl<string>('');
  billingCycle: FormControl = new FormControl<any>('ONE_TIME');

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
  }

  onBuy(amount: number, billingCycle: string) {
    if(this.apiKey.value){
      this.http.post("http://192.168.43.124:9000/auth-service/payment-attempts/", {apiKey: this.apiKey.value ,amount: amount, billingCycle: billingCycle}, { responseType: 'text' as const}).subscribe(response =>{
        window.location.href = response;
      })
    }else{
      this._snackBar.open("Please fill out your API Key!", "",{duration: 2000})
    }
  }
}
