import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CursosTableComponent } from './cursos-table/cursos-table.component';

const routes: Routes = [
  {
    path: '',
    component: CursosTableComponent,
    data: { name: 'Información de Cursos' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
