import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  games: GameItem[] = [];
  inputValue: string = "";
  currentGame: GameItem;
  currentId: string;
  hasChanges: boolean = false;
  
  constructor(private listGames: ListService, private router: Router) {
    this.games = listGames.getCharactersList();
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.hasChanges = this.listGames.checkModification(this.currentGame);
        //return true;
        //this.hasChanges=true;
      }
    });
  }

  cerca() {
    if (this.inputValue && this.inputValue != "") {
      this.currentGame = this.listGames.getGameByName(this.inputValue);
    }
  }

  modifica() {
    this.listGames.changeGame(this.currentGame);
  }

  ngOnInit() {

  }

}
