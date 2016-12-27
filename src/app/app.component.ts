import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { ProfilePage } from '../pages/profile-page/profile-page';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage :any = HomePage;
firebase: any;

  constructor(platform: Platform) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt9ZnNqRiStJCGsqQlqV8U6cdUGAyd_90",
    authDomain: "quizapp-c8a40.firebaseapp.com",
    databaseURL: "https://quizapp-c8a40.firebaseio.com",
    storageBucket: "quizapp-c8a40.appspot.com",
    messagingSenderId: "865085624387"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    this.rootPage = LoginPage;
  }
});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
