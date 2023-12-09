import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-neuropsychologie',
  templateUrl: './modal-neuropsychologie.component.html',
  styleUrls: ['./modal-neuropsychologie.component.css'],
})
export class ModalNeuropsychologieComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHelp() {
    this.router.navigate(['neuropsychologie']);
  }
}
