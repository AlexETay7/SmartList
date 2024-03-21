import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { HomePageModule } from "../home/home.module";

@NgModule({
    declarations: [SignupPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignupPageRoutingModule,
        HomePageModule
    ]
})
export class SignupPageModule {}
