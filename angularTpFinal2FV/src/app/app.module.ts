import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MainComponent } from './layout/pages/main/main.component';
// import { NotfoundComponent } from './layout/pages/notfound/notfound.component';
// import { NavComponent } from './layout/components/nav/nav.component';
// import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
// import { LayoutComponent } from './layout/layout.component';
// import { UsersComponent } from './content/1users/users/users.component';
// import { AlumnosComponent } from './content/2alumnos/alumnos.component';
// import { CursosTableComponent } from './content/3cursos/cursos-table/cursos-table.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    // NotfoundComponent,
    // NavComponent,
    // SidenavComponent,
    // LayoutComponent,
    // UsersComponent,
    // AlumnosComponent,
    // CursosTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
