import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-neuropsychologie',
  templateUrl: './neuropsychologie.component.html',
  styleUrls: ['./neuropsychologie.component.css'],
})
export class NeuropsychologieComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    $(this.elementRef.nativeElement).hide().fadeIn(1500);
  }
}
