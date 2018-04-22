import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /** user name */
  @Input() name: string;

  /** user Avatar */
  @Input() avatar: string;

  /** last message of the user */
  @Input() lastMessage: string;

  /** number of unread notification */
  @Input() notificationNumber: number;

  /** last time the user was active */
  @Input() timeStamp: string;
  constructor() { }

  ngOnInit() {
  }

}
