import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrecipesPageRoutingModule } from './myrecipes-routing.module';

import { MyrecipesPage } from './myrecipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrecipesPageRoutingModule
  ],
  declarations: [MyrecipesPage]
})
export class MyrecipesPageModule {}
