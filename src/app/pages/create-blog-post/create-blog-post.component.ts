import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { BlogService } from 'src/app/feature/blog/blog.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.css']
})
export class CreateBlogPostComponent implements OnInit {

  @ViewChild('postForm') form!: NgForm

  errors: string = ''

  constructor(private blogService: BlogService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    const userId = this.authService.getUserId();
    if (userId !== 'Invalid user id') {
      const postData = {
        authorId: userId,
        title: this.form.value.title.trim(),
        imgUrl: this.form.value.imgUrl.trim(),
        category: this.form.value.category.trim(),
        content: this.form.value.content.trim(),
        tags: this.form.value.tags.split(',').map((el: string) => el.trim())
      }
      this.blogService.createPost(postData).subscribe(
        response => {
          this.router.navigate(['blog'])
        }
      )
    } else {
      this.errors = "Invalid user - please try signing in again";
    }
  }
}
