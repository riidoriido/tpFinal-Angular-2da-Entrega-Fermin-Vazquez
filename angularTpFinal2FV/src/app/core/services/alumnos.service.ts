import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Alumno } from '../models/alumno-model';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  public alumnos$: Observable<Alumno[]>;
  private alumnos = new BehaviorSubject<Alumno[]>([]);
  constructor() {
    this.alumnos$ = this.alumnos.asObservable();
    this.getAlumnosFromAPI().subscribe((alumn) => {
      this.alumnos.next(alumn);
    });
  }

  agregarAlumno(alumno: Alumno) {
    let nuevaLista = this.alumnos.getValue();
    nuevaLista.push(alumno);
    this.alumnos.next(nuevaLista);
  }

  borrarAlumno(alumno: Alumno) {
    let nuevaLista = this.alumnos
      .getValue()
      .filter((a) => a.nombre !== alumno.nombre);
    this.alumnos.next(nuevaLista);
  }

  getAlumnosFromAPI(): Observable<Alumno[]> {
    return of([
      {
        nombre: 'Matias',
        apellido: 'Canedo',
        email: 'matiasc98@gmail.com',
        genero: 'M',
        inscripciones: [],
        esRegular: true,
      },
      {
        nombre: 'Jimena',
        apellido: 'Gomez',
        email: 'jimegomez.cba@hotmail.com',
        genero: 'F',
        inscripciones: [],
        esRegular: true,
      },
      {
        nombre: 'Camila',
        apellido: 'Thompson',
        email: 'c.thompson@gmail.com',
        genero: 'F',
        inscripciones: [],
        esRegular: false,
      },
      {
        nombre: 'Juan Martin',
        apellido: 'Lopez',
        email: 'lopez1994@yahoo.com.ar',
        genero: 'M',
        inscripciones: [],
        esRegular: true,
      },
      {
        nombre: 'Jose',
        apellido: 'Holman',
        email: 'holman.contacto@gmail.com',
        genero: 'M',
        inscripciones: [],
        esRegular: true,
      },
      {
        nombre: 'Nicole',
        apellido: 'Chavez',
        email: 'nickynicky@gmail.com',
        genero: 'F',
        inscripciones: [],
        esRegular: false,
      },
      {
        nombre: 'Cristian',
        apellido: 'Schaldan',
        email: '',
        genero: 'M',
        inscripciones: [],
        esRegular: false,
      },
      {
        nombre: 'Andrea Eva',
        apellido: 'Iriarte',
        email: 'soyandrea678@live.com.ar',
        genero: 'F',
        inscripciones: [],
        esRegular: true,
      },
    ]);
  }
}
