import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { RoomComponent } from './room/room.component';


   const routes: Routes = [{path:'', component: NavBarComponent ,children :[{path :'', component: LoginComponent},
                                                                            {path :'menu', component: MenuComponent},
                                                                            {path :'register', component: RegisterComponent},
                                                                            {path : 'room', component: RoomComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
