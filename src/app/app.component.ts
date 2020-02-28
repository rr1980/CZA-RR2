import { Component } from '@angular/core';
import { LanguageService } from './service/language/language.service';
import DateBox from "devextreme/ui/date_box";
import TextBox from "devextreme/ui/text_box";
import config from 'devextreme/core/config';

@Component({
  selector: 'cza-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(languageService: LanguageService) {
    languageService.init();
    this.setGlobalConfig();
  }

  
  setGlobalConfig() {
    config({ 
      editorStylingMode: 'filled', // or 'outlined' | 'underlined'
      defaultCurrency: 'EUR'
    });

    TextBox.defaultOptions({
        options: {
            showClearButton: true,
            maxLength: 3999
        }
    });

  
    DateBox.defaultOptions({
        options: {
            showClearButton: true,
            displayFormat: "dd.MM.yyyy",
            type: "date",
            pickerType: 'calendar',
            min: '1900/1/1',
            max: '2099/12/31',
            useMaskBehavior: true,
        }
    });
}
}
