import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-rendez-vous',
  templateUrl: './modal-rendez-vous.component.html',
  styleUrls: ['./modal-rendez-vous.component.css'],
})
export class ModalRendezVousComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToContinue() {
    const url =
      'https://www.doctolib.fr/psychologue/saint-nazaire/santiago-sain/booking/motive-categories?profile_skipped=true&specialityId=14&isNewPatient=true&isNewPatientBlocked=false&telehealth=false&placeId=practice-206065&profileSkipped=true';
    window.open(url, '_blank');
  }

  goToHelp(): void {
    this.router.navigate(['/accueil']);
    this.flashItem();
  }

  flashItem() {
    setTimeout(() => {
      $('.title-accueil-flash')
        .fadeOut(400)
        .fadeIn(400)
        .fadeOut(400)
        .fadeIn(400)
        .fadeOut(400)
        .fadeIn(400);
    }, 500);
  }
}
