import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { BlogService } from 'src/app/feature/blog/blog.service';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css']
})
export class EditBlogPostComponent implements OnInit {

  @ViewChild('editForm') form!: NgForm
  post!: IBlogPost
  errors: string = ''

  constructor(private blogService: BlogService, private activateRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    const postId = this.activateRoute.snapshot.params['postId'];

    this.blogService.getCurrentPosts(postId).subscribe(
      response => {
        this.post = response
        if (this.authService.hasUser()) {
          if (this.post.authorId == this.authService.getUserId()) {
            this.form.setValue({
              'title': response.title,
              'category': response.category,
              'imgUrl': response.imgUrl,
              'tags': response.tags,
              'content': response.content
            })
          }
        }
      }
    )
  }

  onSubmit(): void {
    const userId = this.authService.getUserId();
    const postId = this.post.objectId;
    if (userId !== 'Invalid user id') {
      const postData = {
        title: this.form.value.title.trim(),
        imgUrl: this.form.value.imgUrl.trim(),
        category: this.form.value.category.trim(),
        content: this.form.value.content.trim(),
        tags: this.form.value.tags
      }
      this.blogService.editPost(postData, postId).subscribe();
    }
    this.router.navigate(['/blog'])
  }
}
