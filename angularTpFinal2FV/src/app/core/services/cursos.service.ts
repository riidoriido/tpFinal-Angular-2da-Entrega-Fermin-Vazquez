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
    this.getCursosFromAPI().subscribe((curso) => {
      this.cursos.next(curso);
    });
  }

  getCursosFromAPI(): Observable<Curso[]> {
    return of([
      {
        titulo: 'Diseño Web',
        duracion: '2 meses',
        nivel: 'inicial',
        tieneFinal: true,
      },
      {
        titulo: 'JavaScript',
        duracion: '2 meses',
        nivel: 'inicial',
        tieneFinal: false,
      },
      {
        titulo: 'Python',
        duracion: '3 meses',
        nivel: 'avanzado',
        tieneFinal: true,
      },
      {
        titulo: 'UX/UI',
        duracion: '3 meses',
        nivel: 'avanzado',
        tieneFinal: false,
      },
      {
        titulo: 'SEO',
        duracion: '1 mes',
        nivel: 'extra',
        tieneFinal: true,
      },
    ]);
  }
}
