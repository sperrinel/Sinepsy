import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-psychologie-clinique',
  templateUrl: './psychologie-clinique.component.html',
  styleUrls: ['./psychologie-clinique.component.css'],
})
export class PsychologieCliniqueComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    $(this.elementRef.nativeElement).hide().fadeIn(1500);
  }
}
