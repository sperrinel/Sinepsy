import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Rdv } from './models/rdv';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private dataSubject = new BehaviorSubject<any>({});
  public data$ = this.dataSubject.asObservable();

  updateData(newData: Rdv) {
    this.dataSubject.next(newData);
  }
}
