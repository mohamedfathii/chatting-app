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
    },
    {
      id: 5,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 6,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 7,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 8,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 9,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 10,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 11,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 12,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 4,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 13,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 14,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 15,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 4,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 16,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 17,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 18,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 19,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 20,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 21,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 22,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 23,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 24,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 25,
      name: 'mahmoud',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
  ];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // this.message();
  }
  message() {
    this.chatService.getMessageList().subscribe(response => {
      response = response;
    });
  }
}
