import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  year = new Date().getFullYear();
    profile = PROFILE;

}
