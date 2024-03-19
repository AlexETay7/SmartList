import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'grocerylist',
    loadChildren: () => import('./grocerylist/grocerylist.module').then( m => m.GrocerylistPageModule)
  },
  {
    path: 'todolist',
    loadChildren: () => import('./todolist/todolist.module').then( m => m.TodolistPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'myrecipes',
    loadChildren: () => import('./myrecipes/myrecipes.module').then( m => m.MyrecipesPageModule)
  },
  {
    path: 'mytodos',
    loadChildren: () => import('./mytodos/mytodos.module').then( m => m.MytodosPageModule)
  },
  {
    path: 'mygrocerylists',
    loadChildren: () => import('./mygrocerylists/mygrocerylists.module').then( m => m.MygrocerylistsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
