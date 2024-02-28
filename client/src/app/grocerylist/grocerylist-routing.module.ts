import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrocerylistPage } from './grocerylist.page';

const routes: Routes = [
  {
    path: '',
    component: GrocerylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrocerylistPageRoutingModule {}
