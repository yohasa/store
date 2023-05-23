import { Component } from '@angular/core';
import { PageHeader } from './data/page-header';
import { Header } from './model/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  public headerInput: Header = PageHeader;
}
