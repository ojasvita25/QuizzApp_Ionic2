import { Component } from '@angular/core';
import { NavController, LoadingController, 
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
/*
  Generated class for the ResetPasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reset-password-page',
  templateUrl: 'reset-password-page.html'
})
export class ResetPasswordPage {

public resetPasswordForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;


  constructor(public nav: NavController,public authData: AuthService, public formBuilder: FormBuilder,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController  ) {

    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
    })
  }
  
 elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

resetPassword(){
  this.submitAttempt = true;

  if (!this.resetPasswordForm.valid){
    console.log(this.resetPasswordForm.value);
  } else {
    this.authData.resetPassword(this.resetPasswordForm.value.email).then((user) => {
      let alert = this.alertCtrl.create({
        message: "We just sent you a reset link to your email",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            handler: () => {
              this.nav.pop();
            }
          }
        ]
      });
      alert.present();

    }, (error) => {
      var errorMessage: string = error.message;
      let errorAlert = this.alertCtrl.create({
        message: errorMessage,
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });

      errorAlert.present();
    });
  }
}

    }

  


