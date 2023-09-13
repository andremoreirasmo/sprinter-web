import { Injectable } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { settings_icon } from './svg/settings_icon';
import { sprint_icon } from './svg/sprint_icon';

@Injectable({
  providedIn: 'root',
})
export class CustomIconsService {
  constructor(private iconService: NzIconService) {}
  public importCustomIcons() {
    this.iconService.addIconLiteral('sprinter:sprint', sprint_icon);
    this.iconService.addIconLiteral('sprinter:settings', settings_icon);
  }
}
