import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosTableComponent } from './pages/alumnos-table/alumnos-table.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AlumnosComponent, AlumnosTableComponent],
  imports: [CommonModule, AlumnosRoutingModule, SharedModule],
})
export class AlumnosModule {}
