import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() created_at:string = '';
  @Input() postId:string = '';
  @Input() imgUrl:string = '';
  @Input() title:string = '';
  @Input() category:string = '';
  @Input() content:string = '';

  display_date:any = ''

  constructor() { 
  }

  ngOnInit(): void {
    this.display_date = new Date(this.created_at);
  }

}
