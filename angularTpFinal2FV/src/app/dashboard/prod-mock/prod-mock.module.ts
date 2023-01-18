import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdMockRoutingModule } from './prod-mock-routing.module';
import { ProdMockPageComponent } from './pages/prod-mock-page/prod-mock-page.component';


@NgModule({
  declarations: [
    ProdMockPageComponent
  ],
  imports: [
    CommonModule,
    ProdMockRoutingModule
  ]
})
export class ProdMockModule { }
