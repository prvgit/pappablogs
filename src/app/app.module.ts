import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BlogComponent]
})
export class AppModule { }
