import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from '../../models/language.model';
import { customMessages, languages } from './langusage.dictionary';

import Globalize from "globalize";

import deMessages from "devextreme/localization/messages/de.json";
import enMessages from "devextreme/localization/messages/en.json";

import supplemental from "devextreme-cldr-data/supplemental.json";
import deCldrData from "devextreme-cldr-data/de.json";
import enCldrData from "devextreme-cldr-data/en.json";

import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";

import { refreshTheme } from 'devextreme/viz/themes';

@Injectable()
export class LanguageService {

  private _blackListWarnings: string[] = [];
  private _selectedLangauge: BehaviorSubject<string> = new BehaviorSubject(navigator.language);

  public get get_selectedLangaugeObservable(): Observable<string> {
    return this._selectedLangauge.asObservable();
  }

  public get get_allLanguages(): Language[] {
    return languages;
  }

  constructor(private router: Router) {
    Globalize.load(
      supplemental, deCldrData, enCldrData
    );

    this.loadMessages(deMessages);
    this.loadMessages(enMessages);
    this.loadMessages(customMessages);
  }

  public init() {
    this.get_selectedLangaugeObservable.subscribe(lang => {
      Globalize.locale(lang);
    });
  }

  public translate(data: string, params: string[] = []): string {
    return this.formatMessage(data, params) || '***' + data + '***';
  }

  public setLanguage(lang: string) {
    if (lang && this._selectedLangauge.value !== lang) {
      this._selectedLangauge.next(lang);
      this.forcePageRepaint();
    }
  }

  private loadMessages(messages: any) {
    messages ? Globalize.loadMessages(messages) : undefined;
  }

  private formatMessage(data: string, params: string[] = []): string {
    try {
      return Globalize.formatMessage(data, params);
    }
    catch (ex) {

      const msg = ex.message;
      
      if (!this._blackListWarnings.find(x=> x === msg)) {
        this._blackListWarnings.push(msg);
        console.debug(msg);
      }
      
      return null;
    }
  }

  private forcePageRepaint() {
    refreshTheme();
    // const currentUrl = this.router.url;

    // if (currentUrl) {
    //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //     this.router.navigate([currentUrl]);
    //   });
    // }
  }
}
