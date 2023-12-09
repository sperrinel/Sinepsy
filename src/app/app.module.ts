import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { PsychologieCliniqueComponent } from './components/psychologie-clinique/psychologie-clinique.component';
import { NeuropsychologieComponent } from './components/neuropsychologie/neuropsychologie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalNeuropsychologieComponent } from './modal-neuropsychologie/modal-neuropsychologie.component';
import { ModalPsychologieCliniqueComponent } from './modal-psychologie-clinique/modal-psychologie-clinique.component';
import { ModalRendezVousComponent } from './modal-rendez-vous/modal-rendez-vous.component';

import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'psychologie-clinique', component: PsychologieCliniqueComponent },
  { path: 'neuropsychologie', component: NeuropsychologieComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '', component: AccueilComponent },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
];
// const appRoutes: Routes = [
//   { path: 'accueil', component: ComingSoonComponent },
//   { path: 'a-propos', component: ComingSoonComponent },
//   { path: 'services', component: ComingSoonComponent },
//   { path: 'outils', component: ComingSoonComponent },
//   { path: 'psychologie-clinique', component: ComingSoonComponent },
//   { path: 'neuropsychologie', component: ComingSoonComponent },
//   { path: 'adulte', component: ComingSoonComponent },
//   { path: 'enfant', component: ComingSoonComponent },
//   { path: 'contact', component: ComingSoonComponent },
//   { path: 'notfound', component: NotfoundComponent },
//   { path: '', component: ComingSoonComponent },
//   { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    NotfoundComponent,
    AProposComponent,
    PsychologieCliniqueComponent,
    NeuropsychologieComponent,
    ModalNeuropsychologieComponent,
    ModalPsychologieCliniqueComponent,
    ModalRendezVousComponent,
    MentionsLegalesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
