import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css'],
})
export class AProposComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    $(this.elementRef.nativeElement).hide().fadeIn(1500);
  }
}
