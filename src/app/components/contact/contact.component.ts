import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Rdv } from 'src/app/models/rdv';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  messageOk: boolean = false;
  messageErr: boolean = false;
  getDataContact: Rdv;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dataService: ContactService
  ) {}

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      this.getDataContact = data;
    });

    this.messageOk = false;
    this.messageErr = false;
    this.contactForm = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      typeRdv: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      msg: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.table(formData);

      this.http.post('https://formspree.io/f/xyyqanyj', formData).subscribe(
        (response) => {
          console.log('Formulaire envoyé avec succès', response);
          this.messageOk = true;
          this.messageErr = false;
        },
        (error) => {
          console.error("Erreur lors de l'envoi du formulaire", error);
          this.messageOk = false;
          this.messageErr = true;
        }
      );
    }
  }
  ngOnDestroy(): void {
    this.messageErr = false;
    this.messageOk = false;
  }
}
