import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRendezVousComponent } from './modal-rendez-vous.component';

describe('ModalRendezVousComponent', () => {
  let component: ModalRendezVousComponent;
  let fixture: ComponentFixture<ModalRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
