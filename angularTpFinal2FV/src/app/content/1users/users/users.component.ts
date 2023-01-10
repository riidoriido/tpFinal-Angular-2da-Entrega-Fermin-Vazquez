import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [
    { id: 1, usuario: 'riido', email: 'fv.shutter@gmail.com', isAdmin: true },
    { id: 2, usuario: 'spiceFox', email: 'getonIT@gmail.com', isAdmin: false },
    {
      id: 3,
      usuario: 'Javier_95',
      email: 'javier_gutierrez02@hotmail.es',
      isAdmin: false,
    },
    {
      id: 4,
      usuario: 'melissaXx',
      email: 'ubiquitous.mel@gmail.com',
      isAdmin: false,
    },
    {
      id: 5,
      usuario: '4dcopas',
      email: 'juliancapo@live.com.ar',
      isAdmin: false,
    },
    { id: 6, usuario: 'testAdmin', email: 'testAdmin@test.com', isAdmin: true },
  ];

  displayedColumns = ['id', 'user', 'email', 'rol'];
  dataSource = this.users;

  constructor() {}

  ngOnInit(): void {}
}
