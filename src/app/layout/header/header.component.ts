import { Component } from '@angular/core';
import { PageHeader } from 'src/app/data/page-header';
import { Header } from 'src/app/model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public headerModel: Header = PageHeader; // model
}
