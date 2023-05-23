import { Component } from '@angular/core';
import { PageContent } from 'src/app/data/page-content';
import { PageData } from 'src/app/model/page-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public contentModel?: PageData = PageContent; // model
}
