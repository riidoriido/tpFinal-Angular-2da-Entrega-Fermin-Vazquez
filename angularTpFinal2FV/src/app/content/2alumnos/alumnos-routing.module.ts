import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosTableComponent } from './pages/alumnos-table/alumnos-table.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosTableComponent,
    data: { name: 'Tabla de Alumnos' },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
