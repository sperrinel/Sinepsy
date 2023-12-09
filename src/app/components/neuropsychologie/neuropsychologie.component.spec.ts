import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsychologieComponent } from './neuropsychologie.component';

describe('NeuripsychologieComponent', () => {
  let component: NeuropsychologieComponent;
  let fixture: ComponentFixture<NeuropsychologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeuropsychologieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropsychologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
