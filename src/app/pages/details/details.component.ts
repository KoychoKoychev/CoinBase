import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { IPostComments } from 'src/app/core/interfaces/postComment';
import { BlogService } from 'src/app/feature/blog/blog.service';
declare function require(name: string): any;
const chunk = require('lodash.chunk');

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @ViewChild('commentsForm') form!: NgForm
  post!: IBlogPost
  display_date: any
  postParagraphs: string[] = []
  formSubmitted: boolean = false
  postComments: IPostComments[] = []
  isAuthor: boolean = false
  hasUser: boolean = false

  constructor(private blogService: BlogService, private activateRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if (this.authService.hasUser()) {
      this.hasUser = true;
    }

    const postId = this.activateRoute.snapshot.params['postId'];

    this.blogService.getCurrentPosts(postId).subscribe(
      response => {
        this.post = response
        this.display_date = new Date(response.createdAt);
        this.postParagraphs = chunk(response.content.split('. ').map((el: string) => el + '.'), 15)
          .map((el: string[]) => el.join(' '));
        if (this.authService.hasUser()) {
          console.log(this.post.authorId);
          console.log(this.authService.getUserId());

          if (this.post.authorId == this.authService.getUserId()) {
            this.isAuthor = true;
          }
        }
      }
    )

    this.blogService.getComments(postId).subscribe(
      response => {
        this.postComments = response.results
      }
    )
  }

  public onClick(): void {
    this.formSubmitted = true;
    const postId = this.post.objectId;
    const data = {
      postId: postId,
      authorName: this.form.value.name,
      authorEmail: this.form.value.email,
      content: this.form.value.text
    }
    this.blogService.postComments(data).subscribe(
      response => {
        this.blogService.getComments(postId).subscribe(
          response => {
            this.postComments = response.results
          }
        )
      }
    );
  }

  public onDelete(): void {
    const postId = this.post.objectId;
    if (confirm('Do you want to delete this post?')) {
      this.blogService.deletePost(postId).subscribe();
      this.router.navigate(['/blog'])
    }
  }
}
