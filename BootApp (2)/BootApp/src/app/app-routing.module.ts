import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { PaymentComponent } from './payment/payment.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{path:'', component: HomeComponent ,children :[ {path :'' , component : MenuComponent},
                                                                        {path :'page' , component : PageComponent},
                                                                        {path :'payment' , component : PaymentComponent},
                                                                        {path :'book' , component : BookComponent},
                                                                        {path :'form' , component : FormComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
