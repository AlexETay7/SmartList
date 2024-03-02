import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyrecipesPage } from './myrecipes.page';

const routes: Routes = [
  {
    path: '',
    component: MyrecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrecipesPageRoutingModule {}
