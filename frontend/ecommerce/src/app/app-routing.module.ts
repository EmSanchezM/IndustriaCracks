import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ComprasComponent } from './compras/compras.component';
import{ InicioComponent } from './inicio/inicio.component';
import {FooterComponent} from './footer/footer.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'compras',  component: ComprasComponent },
  { path:'inicio',component:InicioComponent },
  { path:'footer',component:FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
