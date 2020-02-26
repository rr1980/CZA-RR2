import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApiService } from 'src/app/service/api/api.service';

@NgModule({
    declarations: [
        LanguagePipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        MatToolbarModule,
        MatMenuModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatCheckboxModule,

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

        MatToolbarModule,
        MatMenuModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatCheckboxModule,

        DxSchedulerModule,
        DxButtonModule,
        DxFormModule,
        DxDateBoxModule,
        DxTreeListModule,
        DxToolbarModule,
        DxTextAreaModule,
        DxSelectBoxModule,

        LanguagePipe,

    ]
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