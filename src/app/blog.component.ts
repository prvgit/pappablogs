import { Component } from '@angular/core';

@Component({
  selector: 'blogApp',
  //templateUrl: './blog.component.html',
  template: "<h1>Lets write blogs!!</h1>",
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  title = 'Pappa Blogs';
}
