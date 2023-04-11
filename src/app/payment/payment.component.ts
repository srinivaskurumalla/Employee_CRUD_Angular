import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;
  /**
   *
   */
  constructor(private _fb: FormBuilder, private router  : Router) {
  this.paymentForm=  _fb.group({
    courseName: '',
    amount : ''
})
  }

  paymentFormSubmit() {
    console.log(this.paymentForm.value)
    alert('Fee paid successfully');
    this.router.navigate(['/'])
  }
}
