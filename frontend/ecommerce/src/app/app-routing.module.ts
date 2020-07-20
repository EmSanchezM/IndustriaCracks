import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Protección de rutas*/ 
import { AuthGuard } from 'src/app/guards/auth.guard';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

import { ComprasComponent } from './pages/compras/compras.component';

//Products
import { UpdateComponent } from './pages/products/update/update.component';//Modal
import { MyproductsComponent } from './pages/products/myproducts/myproducts.component';//Modal


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'registro', component: RegisterComponent},
  {path: 'perfil', component: PerfilComponent, canActivate: [ AuthGuard ]}, /*Si quieren probar la ruta quiten el canActivate*/ 
  {path: 'compras',  component: ComprasComponent },
  {path: 'update_product',  component: UpdateComponent },
  {path: 'my_products',  component: MyproductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
