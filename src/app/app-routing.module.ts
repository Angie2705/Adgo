import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pprincipal',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperacontra',
    loadChildren: () => import('./pages/recuperacontra/recuperacontra.module').then( m => m.RecuperacontraPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'addauto',
    loadChildren: () => import('./pages/addauto/addauto.module').then( m => m.AddautoPageModule)
  },
  {
    path: 'addviaje',
    loadChildren: () => import('./pages/addviaje/addviaje.module').then( m => m.AddviajePageModule)
  },
  {
    path: 'modificaruser',
    loadChildren: () => import('./pages/modificaruser/modificaruser.module').then( m => m.ModificaruserPageModule)
  },
  {
    path: 'pprincipal',
    loadChildren: () => import('./pages/pprincipal/pprincipal.module').then( m => m.PprincipalPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reclamo',
    loadChildren: () => import('./pages/reclamo/reclamo.module').then( m => m.ReclamoPageModule)
  },
  {
    path: 'infoviaje',
    loadChildren: () => import('./pages/infoviaje/infoviaje.module').then( m => m.InfoviajePageModule)
  },
  {
    path: 'infoviaje2',
    loadChildren: () => import('./pages/infoviaje2/infoviaje2.module').then( m => m.Infoviaje2PageModule)
  },
  {
    path: 'infoviaje3',
    loadChildren: () => import('./pages/infoviaje3/infoviaje3.module').then( m => m.Infoviaje3PageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
