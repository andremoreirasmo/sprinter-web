import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SprintDetailComponent } from './sprint-detail/sprint-detail.component';
import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintsComponent } from './sprints.component';

@NgModule({
  declarations: [SprintsComponent, SprintDetailComponent],
  imports: [
    CommonModule,
    SprintsRoutingModule,
    NzCardModule,
    NzGridModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
  ],
})
export class SprintsModule {}
