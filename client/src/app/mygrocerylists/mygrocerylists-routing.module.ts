import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MygrocerylistsPage } from './mygrocerylists.page';

const routes: Routes = [
  {
    path: '',
    component: MygrocerylistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MygrocerylistsPageRoutingModule {}
