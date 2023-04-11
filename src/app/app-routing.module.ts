import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppComponent } from './app.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './users/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path : '',component:WelcomeComponent},
  {path : 'payment',component:PaymentComponent},
  {path : 'employee',component:EmpAddEditComponent},
  {path : 'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
