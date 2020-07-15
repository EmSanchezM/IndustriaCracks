import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ComprasComponent } from './pages/compras/compras.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'registro', component: RegisterComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'compras',  component: ComprasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
