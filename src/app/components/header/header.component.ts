import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../app/beans/menuItem';
import { HeaderService } from '../../../app/services/header.service';
import { MenuEnum } from '../../../app/beans/menuEnum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    new MenuItem(MenuEnum.Home, 'Home', true),
    new MenuItem(MenuEnum.List, 'Lista'),
    new MenuItem(MenuEnum.Detail, 'Dettaglio'),
    new MenuItem(MenuEnum.Edit, 'Modifica')
  ];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  selectSection(id:string){

    this.menuItems.forEach(item => {
      if(id == item.id){
        item.selected = true;
      }else{
        item.selected = false;
      }
    });

    this.headerService.setSelection(id);
  }

}
