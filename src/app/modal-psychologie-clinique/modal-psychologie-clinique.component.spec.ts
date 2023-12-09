import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPsychologieCliniqueComponent } from './modal-psychologie-clinique.component';

describe('ModalPsychologieCliniqueComponent', () => {
  let component: ModalPsychologieCliniqueComponent;
  let fixture: ComponentFixture<ModalPsychologieCliniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPsychologieCliniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPsychologieCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
