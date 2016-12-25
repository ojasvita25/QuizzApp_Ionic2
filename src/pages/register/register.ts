import { Component } from '@angular/core';
import { NavController, LoadingController, 
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
 public signupForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public nav: NavController,public authData: AuthService, public formBuilder: FormBuilder,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController ) {

this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }

 elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }
    
    signupUser(){
  this.submitAttempt = true;

  if (!this.signupForm.valid){
    console.log(this.signupForm.value);
  } else {
    this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
      this.nav.setRoot(HomePage);
    }, (error) => {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        message: error.message,
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
}


  
}
