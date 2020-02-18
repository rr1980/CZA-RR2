import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../service/language/language.service';

@Component({
  selector: 'cza-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedLangauge: Observable<string>;

  constructor(public ls: LanguageService) {
    this.selectedLangauge = ls.get_selectedLangaugeObservable
  }

  ngOnInit() {
  }
}
