import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ApiService } from 'src/app/service/api/api.service';
import { LanguagePipe } from 'src/app/pipes/language.pipe';
import { LanguageService } from 'src/app/service/language/language.service';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxTreeListModule } from 'devextreme-angular/ui/tree-list';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';

@NgModule({
    declarations: [
        LanguagePipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        DxSchedulerModule,
        DxButtonModule,
        DxFormModule,
        DxDateBoxModule,
        DxTreeListModule,
        DxToolbarModule,
        DxTextAreaModule,
        DxSelectBoxModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        DxSchedulerModule,
        DxButtonModule,
        DxFormModule,
        DxDateBoxModule,
        DxTreeListModule,
        DxToolbarModule,
        DxTextAreaModule,
        DxSelectBoxModule,

        LanguagePipe,

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InjectorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: InjectorModule,
            providers: [
                LanguageService,
                ApiService
            ]
        };
    }
}