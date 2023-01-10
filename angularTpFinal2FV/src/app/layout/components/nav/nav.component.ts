import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  @Input() sidenav: MatSidenav;
  ngOnInit(): void {}
}
