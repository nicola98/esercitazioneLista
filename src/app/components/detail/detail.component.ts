import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ComunicatorService } from '../../../app/services/comunicator.service';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private _fiiiiiiiiii=0;
  @Input()  set fiiiiiiiiii(fiiiiiiiiii: number)
  {
      this._fiiiiiiiiii = (fiiiiiiiiii) || undefined;
  }

  game: GameItem;

  
  get fiiiiiiiiii(): number {return this._fiiiiiiiiii}
  constructor(private comunicatoService: ComunicatorService, private listService: ListService){
  
  }

  ngOnInit() {
    this.game = this.listService.getGameById(this._fiiiiiiiiii);
  }

}
