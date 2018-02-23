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

 
  constructor() { 
   
  }

  ngOnInit() {

  }

}
