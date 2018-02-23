import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { GameItem } from '../../GameItem';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 
  giocoCorrente: GameItem;
  constructor(private router: ActivatedRoute, private listService: ListService, private location: Location){
    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null)
        this.giocoCorrente = this.listService.getGameById(params['id']);
    });
  }

  torna(){
    this.location.back();
  }

}
