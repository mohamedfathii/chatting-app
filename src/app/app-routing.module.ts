import { ChatComponentComponent } from './chatting/chat-component/chat-component.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/chatting/chatting.module#ChattingModule'
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

