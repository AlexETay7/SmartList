import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MytodosPageRoutingModule } from './mytodos-routing.module';

import { MytodosPage } from './mytodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MytodosPageRoutingModule
  ],
  declarations: [MytodosPage]
})
export class MytodosPageModule {}
