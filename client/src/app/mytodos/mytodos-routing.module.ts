import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytodosPage } from './mytodos.page';

const routes: Routes = [
  {
    path: '',
    component: MytodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MytodosPageRoutingModule {}
