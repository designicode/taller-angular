import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent {
  @Input() title = '';
  public isShow = false;

  showModal() {
    this.isShow = true;
  }

  hideModal() {
    this.isShow = false;
  }
}
