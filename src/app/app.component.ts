import { Component } from '@angular/core';
import { CustomIconsService } from './shared/icons/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(private customIconsService: CustomIconsService) {
    this.customIconsService.importCustomIcons();
  }
}
