import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologieCliniqueComponent } from './psychologie-clinique.component';

describe('PsychologieCliniqueComponent', () => {
  let component: PsychologieCliniqueComponent;
  let fixture: ComponentFixture<PsychologieCliniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologieCliniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologieCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
