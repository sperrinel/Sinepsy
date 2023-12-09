import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {
    $(this.elementRef.nativeElement).hide().fadeIn(1500);
  }

  goTo() {
    setTimeout(() => {
      this.router.navigate(['outils']);
    }, 1000);
  }

  ngOnDestroy() {}
}
