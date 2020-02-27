import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../../service/language/language.service';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'cza-citizen-header',
  templateUrl: './citizen-header.component.html',
  styleUrls: ['./citizen-header.component.scss']
})
export class CitizenHeaderComponent {

  selectedLangauge: Observable<string>;

  constructor(public ls: LanguageService, private apiService: ApiService) {
    this.selectedLangauge = ls.get_selectedLangaugeObservable
  }

  onClickTest() {
    this.apiService.onTest();
  }
}
