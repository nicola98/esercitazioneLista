import { Component } from '@angular/core';
import { MenuEnum } from '../app/beans/menuEnum';
import { HeaderService } from '../app/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = MenuEnum.Home;
  gameIdSelected: number=0;

  constructor(private headerService: HeaderService){
    this.headerService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });
  }

  showDetail(id: number){
    this.gameIdSelected = id;
    this.currentSection = 'detail';
  }
}
