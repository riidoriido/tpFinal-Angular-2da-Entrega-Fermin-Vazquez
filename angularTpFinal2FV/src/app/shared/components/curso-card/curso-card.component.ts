import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/curso-model';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss'],
})
export class CursoCardComponent implements OnInit {
  @Input() curso: Curso;
  constructor() {}

  ngOnInit(): void {}
}
