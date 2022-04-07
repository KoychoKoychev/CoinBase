import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() title:string = '';
  @Input() category:string = '';
  @Input() date:any = '';
  @Input() content:string = '';
  @Input() postId:string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
