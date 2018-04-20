import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponentComponent } from './chat-component/chat-component.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ChatComponentComponent,
                pathMatch: 'full'
              },
            {
                path: 'chatting',
                component: ChatComponentComponent,
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]
})
export class ChattingRoutingModule { }