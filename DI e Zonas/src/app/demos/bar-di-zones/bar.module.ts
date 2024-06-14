import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, HttpClientModule],
})
export class BarModule {
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_CONFIG, useValue: config },
      ],
    };
  }

  static forChild() {}
}
