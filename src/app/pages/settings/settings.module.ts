import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, SettingsRoutingModule, NzIconModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
