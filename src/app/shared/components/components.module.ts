import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { WorkspaceSelectComponent } from './workspace-select/workspace-select.component';

@NgModule({
  declarations: [WorkspaceSelectComponent],
  imports: [CommonModule, NzSelectModule, FormsModule],
  exports: [WorkspaceSelectComponent],
})
export class ComponentsModule {}
