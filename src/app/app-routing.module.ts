import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { RecordComponent } from './page/record/record.component';
import { OrderComponent } from './page/order/order.component';
import { SearchComponent } from './page/search/search.component';
import { FollowComponent } from './page/follow/follow.component';
import { ExampleNavbarComponent } from './theme/example-navbar/example-navbar.component';
import { Pagenotfound404Component } from './page/pagenotfound404/pagenotfound404.component';


const routes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'record', component: RecordComponent },
  { path: 'order', component: OrderComponent },
  { path: 'search', component: SearchComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'nav', component: ExampleNavbarComponent },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {path:'**',component:Pagenotfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
