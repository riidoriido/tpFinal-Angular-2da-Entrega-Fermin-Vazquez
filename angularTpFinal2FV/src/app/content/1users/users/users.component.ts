import { Component } from '@angular/core';

export interface User {
  id: number;
  usuario: string;
  email: string;
  isAdmin: boolean;
}

const user: User[] = [
  { id: 1, usuario: 'riido', email: 'fv.shutter@gmail.com', isAdmin: true },
  {
    id: 2,
    usuario: 'nastyBomb',
    email: 'josueLaPlata2002@yahoo.com.ar',
    isAdmin: false,
  },
  {
    id: 3,
    usuario: 'Lithium',
    email: 'lithium_contact@hotmail.com',
    isAdmin: false,
  },
  {
    id: 4,
    usuario: 'jorgecabrales25',
    email: 'tasaciones_cabrales@yahoo.com',
    isAdmin: false,
  },
  {
    id: 5,
    usuario: 'xXmelissaXx',
    email: 'melimelisa@live.com.mx',
    isAdmin: false,
  },
  {
    id: 6,
    usuario: 'shureshot',
    email: 'romina250798@yahoo.mx',
    isAdmin: false,
  },
  {
    id: 7,
    usuario: 'nicolasTT',
    email: 'endurance.comercios@gmail.com',
    isAdmin: false,
  },
  {
    id: 8,
    usuario: 'cami2002',
    email: 'cami2002cba@hotmail.com',
    isAdmin: false,
  },
  { id: 9, usuario: 'soy_Poeta', email: 'jjc1998@live.com.ar', isAdmin: false },
  {
    id: 10,
    usuario: 'adminTest',
    email: 'adminTest@example.com',
    isAdmin: true,
  },
];

@Component({
  selector: 'app-users',
  styleUrls: ['users.component.scss'],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'usuario', 'email', 'isAdmin'];
  dataSource = user;
}
