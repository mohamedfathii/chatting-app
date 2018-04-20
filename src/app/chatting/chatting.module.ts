import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { AddChatComponent } from './chat-component/add-chat/add-chat.component';
import { ViewChatComponent } from './chat-component/view-chat/view-chat.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatComponentComponent, AddChatComponent, ViewChatComponent]
})
export class ChattingModule { }
