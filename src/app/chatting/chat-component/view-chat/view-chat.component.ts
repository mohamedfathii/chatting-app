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
      name: 'Ahmed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN',
      last_message: 'good night ahmed see u tomorrow morning',
      time_stamp: '8 min ago',
      notification_number: 66
    },
    {
      id: 2,
      name: 'Mohamed',
      avatar: 'http://2.bp.blogspot.com/-E7bOSegzlC0/VNWWnOwLn_I/AAAAAAAAE1k/BpXLXY5O_2c/s1600/men%2Bhairstyle%2B(2).jpg',
      last_message: 'hello',
      time_stamp: '4 min ago',
      notification_number: 5
    },
    {
      id: 3,
      name: 'Fathy',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxnnOu1rNzVuX58tblCKrBJLbZZR_ok1Xotj3_RsKP2sz2G-b',
      last_message: 'where are you',
      time_stamp: '1 hour ago',
      notification_number: 6
    },
    {
      id: 4,
      name: 'Mohamed',
      avatar: 'http://www.understandingrelationships.com/wp-content/uploads/Fotolia_56809123_Subscription_Monthly_M.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 5,
      name: 'Mohamed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j4oUh2F5EW6qpPLFPi_pA-fbdAfOK3u0jRCBqjhvdLXeA3PH',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 6,
      name: 'Sara',
      avatar: 'https://ia.media-imdb.com/images/M/MV5BMzYxMzMxNDQzNl5BMl5BanBnXkFtZTgwMTg0NDEzMjE@._V1_UY268_CR87,0,182,268_AL_.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 7,
      name: 'Nada',
      avatar: 'https://media4.s-nbcnews.com/j/newscms/2016_05/958051/ashley-graham-today-160202-tease_b5b451c508bd6472192d740149c689f8.today-inline-large.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 8,
      name: 'Monica',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhjQkVnBh0q50K5kGFjIPDjYrRcMvfSOs2VuO_qpW-6KvijuAwQ',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 9,
      name: 'juliana',
      avatar: 'http://static.businessinsider.com/image/513a35d76bb3f74c70000006-750.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 10,
      name: 'Hadeer',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxntp60IRi4yVJWdphAx9-SbqZvD7nKh9m4GqBEtWD5V3sP14W',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 11,
      name: 'Emma',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTS6CL2lsXvsBgmJnqghrFo6iFHJoMwwPSJxJpHUjZ7OAc5z3y',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 12,
      name: 'heidi',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nodsIe7jr5FsWu0-zY2BDTUTtYuymMkQFefHkuZcM-fsTr1V',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 13,
      name: 'lola',
      avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ashley-graham-index-1-1521564714.jpg?resize=768:*',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 14,
      name: 'Mohamed',
      avatar: 'https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365_960_720.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 15,
      name: 'Mohamed',
      avatar: 'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 16,
      name: 'Mohamed',
      avatar: 'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 17,
      name: 'Mohamed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRms3WfDQtfyFID81sg1gCZAF8FYERx_4sZUdHMOEh9vU1HPEfzqA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 18,
      name: 'Mohamed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3e3o2_392GisWBSVLR3zZO4Wpz754NRRnmRRDohtaTKJi8pOUQ',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 19,
      name: 'Mohamed',
      avatar: 'https://s3.envato.com/files/193234021/Suit%20mockup.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 20,
      name: 'Mohamed',
      avatar: 'https://www.mockupworld.co/wp-content/uploads/edd/2015/08/free-book-mock-up-man-reading-hardbound-book.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 21,
      name: 'Mohamed',
      avatar: 'https://img1-placeit-net.s3.amazonaws.com/uploads/stage/stage_image/4060/large_thumb_base_image.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 22,
      name: 'Mohamed',
      avatar: 'https://www.mockupworld.co/wp-content/uploads/edd/2016/07/free-mens-t-shirt-mockup-psd-1000x683.jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 23,
      name: 'Mohamed',
      avatar: 'http://2.bp.blogspot.com/-E7bOSegzlC0/VNWWnOwLn_I/AAAAAAAAE1k/BpXLXY5O_2c/s1600/men%2Bhairstyle%2B(2).jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 24,
      name: 'Mohamed',
      avatar: 'http://2.bp.blogspot.com/-E7bOSegzlC0/VNWWnOwLn_I/AAAAAAAAE1k/BpXLXY5O_2c/s1600/men%2Bhairstyle%2B(2).jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 25,
      name: 'Mohamed',
      avatar: 'http://2.bp.blogspot.com/-E7bOSegzlC0/VNWWnOwLn_I/AAAAAAAAE1k/BpXLXY5O_2c/s1600/men%2Bhairstyle%2B(2).jpg',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 26,
      name: 'Mohamed',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
    {
      id: 27,
      name: 'Sarah',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJQEjauVlN2mxWDq9UlVVZw2I6xYjS-oQ5NKo70v3nGddiGDKlA',
      last_message: 'lool',
      time_stamp: '1 day',
      notification_number: 2
    },
  ];
  chat: Array<any> = [
    {
      id: 1,
      my_message: ' go to hell',
      other: ' hhahahahahha',
      user: {
        name: 'Ahmed',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN',
      }
    },
    {
      id: 2,
      my_message: 'hello dear',
      other: 'hello ahmed',
      user: {
        name: 'Mohamed',
        avatar: 'http://2.bp.blogspot.com/-E7bOSegzlC0/VNWWnOwLn_I/AAAAAAAAE1k/BpXLXY5O_2c/s1600/men%2Bhairstyle%2B(2).jpg',
      }
    },
    {
      id: 3,
      my_message: 'mmmmm',
      other: 'yes dear',
      user: {
        name: 'Fathy',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxnnOu1rNzVuX58tblCKrBJLbZZR_ok1Xotj3_RsKP2sz2G-b',
      }
    },
    {
      id: 4,
      my_message: 'hahahahahah',
      other: 'let me help',
      user: {
        name: 'Mohamed',
        avatar: 'http://www.understandingrelationships.com/wp-content/uploads/Fotolia_56809123_Subscription_Monthly_M.jpg',
      },
    }
  ];
  holdCurrentView: any;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.loadChat(this.data.filter(x => x.id)[0].id);
  }
  loadChat(itemId: number) {
    this.holdCurrentView = this.chat.filter(x => x.id === itemId);
  }
}
