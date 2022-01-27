import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosFormComponent } from './amigos/amigos-form/amigos-form.component';
import { AmigosListComponent } from './amigos/amigos-list/amigos-list.component';

const routes: Routes = [
  {path: '', component: AmigosListComponent},
  {path: 'new', component: AmigosFormComponent},
  {path: 'edit/:id', component: AmigosFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
