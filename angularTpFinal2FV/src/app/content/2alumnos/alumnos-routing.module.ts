import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosTableComponent } from './pages/alumnos-table/alumnos-table.component';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent,
    children: [
      {
        path: '',
        component: AlumnosTableComponent,
        data: { name: 'Tabla de Alumnos' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
