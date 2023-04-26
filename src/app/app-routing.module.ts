import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppComponent } from './app.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

const routes: Routes = [


  {path : 'employee',component:EmpAddEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
