import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{path:'', component: HomeComponent ,children :[ {path :'' , component : MenuComponent},
                                                                        {path :'page' , component : PageComponent},
                                                                        {path :'home' , component : HomeComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
