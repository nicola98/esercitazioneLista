import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: GameItem [];

  constructor(private router: Router, private listService: ListService)
  {

  }

  ngOnInit() {
    this.items = this.listService.getCharactersList();
  }

  si(item: GameItem)
  {
      this.router.navigate(['/detail/'+item.id]);
  }
  
}
