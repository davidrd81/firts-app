import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { BitacoraPopupComponent } from './preview/bitacora-popup/bitacora-popup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bitacora', component: BitacoraComponent },
  { path: 'updatebitacora/:id', component: BitacoraPopupComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
