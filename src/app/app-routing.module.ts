import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MutantIndexComponent } from './components/mutant-index/mutant-index.component';
import { AddMutantComponent } from './components/add-mutant/add-mutant.component';
import { EditMutantComponent } from './components/edit-mutant/edit-mutant.component';
import { ListMutantComponent } from './components/list-mutant/list-mutant.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  { path: 'add-mutant', component: AddMutantComponent },
  { path: 'edit-mutant/:id', component: EditMutantComponent },
  { path: 'list-mutant', component: ListMutantComponent },
  { path: 'mutant-index', component: MutantIndexComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'mutant-index' },
  { path: '**', pathMatch: 'full', redirectTo: 'mutant-index' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
