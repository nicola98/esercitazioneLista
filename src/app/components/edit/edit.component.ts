import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{

  games: GameItem[] = [];
  inputValue: string = "";
  trovato: boolean = false;
  currentGame: GameItem;
  currentId: string
  errore: boolean = false;
  constructor(private listGames: ListService) {
    this.games = listGames.getCharactersList();
  }

  cerca()
   {
    if (this.inputValue && this.inputValue != "") {
      this.trovato = false;
      for (let game of this.games) {
        if (game.name.toLowerCase() === this.inputValue.toLocaleLowerCase()) {
          this.trovato = true;
          this.currentGame = game;
          this.errore = false;
          break;
        }
      }
      if (!this.trovato) {
        this.errore = true;
      }
    }
  }

  modifica(nome : string, descrizione : string, genere: string, rating:number, prezzo:number, anno:number)
  {
    this.currentGame.name=nome;
    this.currentGame.descrizione=descrizione;
    this.currentGame.genere=genere;
    this.currentGame.rating=rating;
    this.currentGame.prezzo=prezzo;
    this.currentGame.annoUscita=anno;
  }

  ngOnInit() {
   
  }

}
