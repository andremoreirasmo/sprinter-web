import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sprints' },
  {
    path: 'sprints',
    loadChildren: () =>
      import('./pages/sprints/sprints.module').then((m) => m.SprintsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'settings/workspace',
    loadChildren: () =>
      import('./pages/workspace/workspace.module').then(
        (m) => m.WorkspaceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
