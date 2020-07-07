import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'test', component: TestComponent },
 
  // default route
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
