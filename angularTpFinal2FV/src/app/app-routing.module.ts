import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './layout/pages/notfound/notfound.component';
import { MainComponent } from './layout/pages/main/main.component';
import { UsersComponent } from './content/1users/users/users.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        data: {
          name: 'Home',
        },
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          name: 'Usuarios',
        },
      },
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./content/2alumnos/alumnos.module').then(
            (m) => m.AlumnosModule
          ),
        data: {
          name: 'Alumnos',
        },
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./content/3cursos/cursos.module').then((m) => m.CursosModule),
        data: {
          name: 'Cursos',
        },
      },
      { path: '', redirectTo: '/app', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
