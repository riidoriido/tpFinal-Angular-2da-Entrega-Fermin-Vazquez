import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosTableComponent } from './cursos-table/cursos-table.component';

@NgModule({
  declarations: [CursosTableComponent],
  imports: [CommonModule, CursosRoutingModule, SharedModule],
})
export class CursosModule {}
