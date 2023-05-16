import { Component } from '@angular/core';
import { PageFooter } from 'src/app/data/page-footer';
import { Footer } from 'src/app/model/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public footerModel: Footer = PageFooter; // model
}
