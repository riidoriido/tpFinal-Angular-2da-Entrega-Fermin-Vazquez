import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ElementoMenu } from 'src/app/core/models/elemento-menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  public elementosMenu: ElementoMenu[] = [
    { enlace: 'main', nombre: 'Inicio' },
    { enlace: 'users', nombre: 'Usuarios' },
    { enlace: 'alumnos', nombre: 'Alumnos' },
    { enlace: 'cursos', nombre: 'Cursos' },
  ];

  private _mobileQueryListener: () => void;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {}
}
