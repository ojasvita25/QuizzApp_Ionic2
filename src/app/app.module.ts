import { NgModule} from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import {ProfileData} from '../providers/profile-data';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password-page/reset-password-page';
import { ProfilePage } from '../pages/profile-page/profile-page';
import {Data} from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
     ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
     ProfilePage
  ],
  providers: [AuthService,ProfileData,Data]
})
export class AppModule {}
