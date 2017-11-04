import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RecSenhaPage } from './../rec-senha/rec-senha';

@NgModule({
  declarations: [
    LoginPage,
    RecSenhaPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
