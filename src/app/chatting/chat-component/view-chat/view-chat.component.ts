import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.scss']
})
export class ViewChatComponent implements OnInit {
  data: Array<any> = [
    {
      id: 1,
      name: 'ahmed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'good night ahmed see u tomorrow morning',
      time_stamp: '8 min ago',
      notification_number: 66
    },
    {
      id: 2,
      name: 'Mohamed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'hello',
      time_stamp: '4 min ago',
      notification_number: 5
    },
    {
      id: 3,
      name: 'Fathy',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'where are you',
      time_stamp: '1 hour ago',
      notification_number: 6
    },
    {
      id: 4,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    }
  ];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.message();
  }
  message() {
    this.chatService.getMessageList().subscribe(response => {
      response = response;
      console.log(response);
    });
  }
}
