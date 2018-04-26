import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { AddChatComponent } from './chat-component/add-chat/add-chat.component';
import { ViewChatComponent } from './chat-component/view-chat/view-chat.component';
import { ChattingRoutingModule } from './chatting-routing.module';
import { ChatService } from './chat-component/chat.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChattingRoutingModule
  ],
  declarations: [ChatComponentComponent, AddChatComponent, ViewChatComponent],
  providers: [ChatService]
})
export class ChattingModule { }
