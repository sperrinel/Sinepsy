import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-psychologie-clinique',
  templateUrl: './modal-psychologie-clinique.component.html',
  styleUrls: ['./modal-psychologie-clinique.component.css'],
})
export class ModalPsychologieCliniqueComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToContinue() {
    const url =
      'https://www.doctolib.fr/psychologue/saint-nazaire/santiago-sain/booking/motives?profile_skipped=true&specialityId=14&isNewPatient=true&isNewPatientBlocked=false&telehealth=false&placeId=practice-206065&profileSkipped=true&motiveCategoryIds%5B%5D=154114';
    window.open(url, '_blank');
  }

  goToHelp() {
    this.router.navigate(['psychologie-clinique']);
  }
}
