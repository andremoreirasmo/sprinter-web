import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintDetailComponent } from './sprint-detail/sprint-detail.component';
import { SprintsComponent } from './sprints.component';

const routes: Routes = [
  {
    path: '',
    component: SprintsComponent,
  },
  { path: ':id', component: SprintDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprintsRoutingModule {}
