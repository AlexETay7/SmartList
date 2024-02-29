import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    UserMenuComponent,
    HomeMenuComponent
  ],
  declarations: [HomePage, UserMenuComponent, HomeMenuComponent]
})
export class HomePageModule {}
