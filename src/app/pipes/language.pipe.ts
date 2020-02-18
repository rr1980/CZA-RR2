import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../service/language/language.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class LanguagePipe implements PipeTransform {
    constructor(private languageService: LanguageService) { }
    transform(text: string, params: string[] = []): string {
        return this.languageService.translate(text, params);
    }
}