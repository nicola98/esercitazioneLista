import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: GameItem []=[];

  constructor()
  {
    let servicePerLista: ListService=new ListService();
    this.items = servicePerLista.getCharactersList();
  }

  ngOnInit() {
  }

}
