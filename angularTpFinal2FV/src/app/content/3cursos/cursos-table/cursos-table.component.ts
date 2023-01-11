import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/curso-model';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.scss'],
})
export class CursosTableComponent implements OnInit {
  public cursos$: Observable<Curso[]>;
  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos$ = this.cursosService.cursos$;
  }
}
