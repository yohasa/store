import { Component } from '@angular/core';
import {item} from 'src/app/data/menu-item';
import { MenuItem } from 'src/app/model/menu-item';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   public menuItemsMosdel:Array<MenuItem> = item;
}
