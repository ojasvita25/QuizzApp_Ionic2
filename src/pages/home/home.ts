import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProfilePage } from '../profile-page/profile-page';
import { LoginPage } from '../login/login';

export function getRootNav(nav: NavController) : NavController {
    let root = nav;
    while(root.parent != null){
        root = root.parent;
    }
    return root;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController,public authData: AuthService) {
    
  }

 logOut(){
  this.authData.logoutUser().then(() => {
    let rootNav = getRootNav(this.nav);
rootNav.setRoot(LoginPage);
  });
}

goToProfile(){
  this.nav.push(ProfilePage);
}

}
