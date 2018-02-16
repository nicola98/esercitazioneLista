import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';
import { ComunicatorService } from '../../services/comunicator.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output() open: EventEmitter <number> = new EventEmitter();

  items: GameItem []=[];

  constructor()
  {
    let servicePerLista: ListService=new ListService();
    this.items = servicePerLista.getCharactersList();
  }

  si(id: number){
    this.open.emit(id);
  }
  
}
