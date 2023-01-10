import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Curso } from '../models/curso-model';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  public cursos$: Observable<Curso[]>;
  private cursos = new BehaviorSubject<Curso[]>([]);

  constructor() {
    this.cursos$ = this.cursos.asObservable();
    this.getCursosFromAPI().subscribe((course) => {
      this.cursos.next(course);
    });
  }

  getCursosFromAPI(): Observable<Curso[]> {
    return of([
      {
        id: 1,
        titulo: 'Diseño Web',
        duracion: '2 meses',
        nivel: 'inicial',
        tieneFinal: true,
      },
      {
        id: 2,
        titulo: 'JavaScript',
        duracion: '2 meses',
        nivel: 'inicial',
        tieneFinal: false,
      },
      {
        id: 3,
        titulo: 'Python',
        duracion: '3 meses',
        nivel: 'avanzado',
        tieneFinal: true,
      },
      {
        id: 4,
        titulo: 'UX/UI',
        duracion: '3 meses',
        nivel: 'avanzado',
        tieneFinal: false,
      },
      {
        id: 5,
        titulo: 'SEO',
        duracion: '1 mes',
        nivel: 'extra',
        tieneFinal: true,
      },
    ]);
  }
}
