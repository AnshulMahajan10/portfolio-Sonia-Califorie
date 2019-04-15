import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
//{ path: 'home', component: ProjectsComponent},
{ path: 'p', component: HomeComponent},
{ path: 'menu', component: MenuComponent},
{ path: '**', component: HomeComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
