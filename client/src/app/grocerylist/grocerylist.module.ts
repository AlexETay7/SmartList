import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrocerylistPageRoutingModule } from './grocerylist-routing.module';

import { GrocerylistPage } from './grocerylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrocerylistPageRoutingModule
  ],
  declarations: [GrocerylistPage]
})
export class GrocerylistPageModule {}
