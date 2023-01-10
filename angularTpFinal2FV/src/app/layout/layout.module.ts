import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './pages/main/main.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    SidenavComponent,
    MainComponent,
    NotfoundComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class LayoutModule {}
