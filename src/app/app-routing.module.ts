import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CompareComponent} from "./compare/compare.component";

const routes: Routes = [
  { path: 'compare', component: CompareComponent },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'Pokemons List' }
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
