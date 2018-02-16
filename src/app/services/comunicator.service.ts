import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GameItem } from "../GameItem";

@Injectable()
export class ComunicatorService {
  private mySubject = new Subject<number>();
  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value:number){
    this.mySubject.next(value);
  }

}
