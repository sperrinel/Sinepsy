import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNeuropsychologieComponent } from './modal-neuropsychologie.component';

describe('ModalNeuropsychologieComponent', () => {
  let component: ModalNeuropsychologieComponent;
  let fixture: ComponentFixture<ModalNeuropsychologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNeuropsychologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNeuropsychologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
