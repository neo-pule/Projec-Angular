import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [{path:'', component: MenuComponent,
                       children:[{path:'about', component:AboutComponent},
                      {path:'content', component:ContentComponent},
                      {path:'', component: HomeComponent},
                      {path:'feedback', component: FeedbackComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
