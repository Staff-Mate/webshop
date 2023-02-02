import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.css']
})
export class PaymentResultComponent {
  result: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.result = this.route.snapshot.routeConfig?.path;
  }

}
