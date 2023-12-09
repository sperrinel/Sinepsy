import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titre = 'Sinepsy';

  //mdp santy
  password: string = '';
  correctPassword: string = 'santiagosain44';
  showError: boolean = false;
  gothrough = false;

  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAobEjktxUL1q25Ex_ODBSKfwljvk-7MeY',
      authDomain: 'sinepsy-33e55.firebaseapp.com',
      databaseURL:
        'https://sinepsy-33e55-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'sinepsy-33e55',
      storageBucket: 'sinepsy-33e55.appspot.com',
      messagingSenderId: '562195588247',
      appId: '1:562195588247:web:bff84a85affa655aaaf5d2',
      measurementId: 'G-S67JPZTV4Q',
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  //mdp santy
  validatePassword() {
    if (this.password !== this.correctPassword) {
      this.showError = true;
    } else {
      this.showError = false;
      this.gothrough = true;
    }
  }
}
