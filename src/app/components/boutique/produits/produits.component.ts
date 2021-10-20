import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit, OnDestroy {

  produits: any[] = [];
  prodSub : Subscription;
  constructor(private produitsService : ProduitsService) { }


  ngOnInit(): void {
    this.prodSub = this.produitsService.produitsSubject.subscribe(
      (data) => {
        this.produits = data;
      });
     this.produitsService.emitProduitsSubject();
  }

  ngOnDestroy(): void {
    this.prodSub.unsubscribe();
  }

}
