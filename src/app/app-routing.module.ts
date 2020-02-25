import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BitacoraComponent } from './bitacora/bitacora.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bitacora', component: BitacoraComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
