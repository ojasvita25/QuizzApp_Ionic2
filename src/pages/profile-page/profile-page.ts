import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { ProfileData } from '../../providers/profile-data';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';
/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export function getRootNav(nav: NavController) : NavController {
    let root = nav;
    while(root.parent != null){
        root = root.parent;
    }
    return root;
}

@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html'
})


export class ProfilePage {

 public userProfile: any;
  public birthDate: string;
public fatherName :string ;

  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthService,public alertCtrl: AlertController) {
     this.nav = nav;
    this.profileData = profileData;
this.alertCtrl = alertCtrl;
    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      this.birthDate = this.userProfile.birthDate;
      this.fatherName = this.userProfile.fatherName;
    });
    }



    logOut(){
  this.authData.logoutUser().then(() => {
    let rootNav = getRootNav(this.nav);
rootNav.setRoot(LoginPage);
  });
}
updateName(){
  let alert = this.alertCtrl.create({
    message: "Your first name & last name",
    inputs: [
      {
        name: 'firstName',
        placeholder: 'Your first name',
        value: this.userProfile.firstName
      },
      {
        name: 'lastName',
        placeholder: 'Your last name',
        value: this.userProfile.lastName
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updateName(data.firstName, data.lastName);
        }
      }
    ]
  });
  alert.present();
}

updatefatherName(fatherName){
	 let alert = this.alertCtrl.create({
    message: "Your father's name",
    inputs: [
      {
        name: 'fatherName',
        placeholder: 'Your father name',
        value: this.userProfile.fatherName,
      },
    
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updatefatherName(data.fatherName);
        }
      }
    ]
  });
  alert.present();
}

updateDOB(birthDate){
  this.profileData.updateDOB(birthDate);
} 

updateEmail(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newEmail',
        placeholder: 'Your new email',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updateEmail(data.newEmail);
        }
      }
    ]
  });
  alert.present();
}

updatePassword(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newPassword',
        placeholder: 'Your new password',
        type: 'password'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updatePassword(data.newPassword);
        }
      }
    ]
  });
  alert.present();
}

}
