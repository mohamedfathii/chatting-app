import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
@NgModule({
  imports: [HttpClientModule, PerfectScrollbarModule],
  declarations: [CardComponent],
  exports: [CardComponent, HttpClientModule, PerfectScrollbarModule]
})
export class SharedModule { }
