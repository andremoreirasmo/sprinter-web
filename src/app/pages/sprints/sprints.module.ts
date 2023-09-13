import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintsComponent } from './sprints.component';

@NgModule({
  declarations: [SprintsComponent],
  imports: [CommonModule, SprintsRoutingModule, NzCardModule, NzGridModule],
})
export class SprintsModule {}
