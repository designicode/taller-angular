import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenu } from './imenu.metadata';
import { MENU } from './menu.const';

@Component({
  selector: 'app-sidebar, [app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public menu: IMenu[] = MENU;
  @Output() onClick = new EventEmitter();
}
