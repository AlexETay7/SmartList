import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MygrocerylistsPageRoutingModule } from './mygrocerylists-routing.module';

import { MygrocerylistsPage } from './mygrocerylists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MygrocerylistsPageRoutingModule
  ],
  declarations: [MygrocerylistsPage]
})
export class MygrocerylistsPageModule {}
