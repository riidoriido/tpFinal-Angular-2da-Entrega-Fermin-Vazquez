import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno-model';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss'],
})
export class AlumnosTableComponent implements OnInit {
  public alumnos$: Observable<Alumno[]>;

  displayedColumns = [
    'nombre',
    'apellido',
    'email',
    'genero',
    'inscripciones',
    'esRegular',
  ];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos$ = this.alumnosService.alumnos$;
  }
  //   agregarAlumno(){
  // const dialog = this.dialogService.open(NewDialogComponent);
  // dialog.afterClosed().subscribe((value) =>{
  //   if (value){
  //     const
  //   }
  // }))
  //  }

  // delete(alumno: Alumno) {
  //   this.alumnos = this.alumnos.filter(
  //     (alumn) => alumn.nombre !== alumno.nombre
  //   );
  // }

  // edit(alumno: Alumno) {
  //   const dialog = this.dialogService.open(EditDialogComponent, {
  //     data: alumno,
  //   });

  //   dialog.afterClosed().subscribe((data) => {
  //     if (data) {
  //       this.alumnos = this.alumnos.map((alumn) =>
  //         alumn.nombre === alumno.nombre ? { ...alumn, ...data } : alumn
  //       );
  //     }
  //   });
  // }
}
