import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToContact(): void {
    $('html,body').animate(
      {
        scrollTop: $('footer').offset().top,
      },
      'fast'
    );
  }

  goToChoice(): void {
    $('html,body').animate(
      {
        scrollTop: $('#container-global').offset().top,
      },
      'fast'
    );

    this.flashItem();
  }

  flashItem() {
    setTimeout(() => {
      $('.title-accueil-flash')
        .fadeOut(400)
        .fadeIn(400)
        .fadeOut(400)
        .fadeIn(400)
        .fadeOut(400)
        .fadeIn(400)
        .fadeOut(400)
        .fadeIn(400);
    }, 2000);
  }
}
