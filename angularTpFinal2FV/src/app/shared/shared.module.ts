import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from './components/curso-card/curso-card.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [CursoCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CursoCardComponent],
})
export class SharedModule {}
