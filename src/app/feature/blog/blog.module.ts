import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    PostCardComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PostCardComponent,
    CommentComponent
  ]
})
export class BlogModule { }
