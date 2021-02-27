import { Component, OnInit } from '@angular/core';
import { IMenu } from './imenu.metadata';
import { MENU } from './menu.const';

@Component({
  selector: 'app-sidebar, [app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menu: IMenu[] = MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
