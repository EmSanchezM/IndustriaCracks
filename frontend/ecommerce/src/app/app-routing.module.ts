import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';


// Products
import { UpdateComponent } from './pages/products/update/update.component'; // Modal
import { MyproductsComponent } from './pages/products/myproducts/myproducts.component'; // Modal



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'registro', component: RegisterComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'compras',  component: ComprasComponent },
  {path: 'update_product',  component: UpdateComponent },
  {path: 'my_products',  component: MyproductsComponent },
  {path: 'detalle',  component: DetalleProductoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
