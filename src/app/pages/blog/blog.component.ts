import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { BlogService } from 'src/app/feature/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  hasUser: boolean = false
  postsArr: IBlogPost[] = [];

  constructor(public authService: AuthService, private blogServise: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.hasUser = this.authService.hasUser();
    this.blogServise.getAllPosts().subscribe(
      response => this.postsArr = response.results,
      err => {
        if (err.error.code === '209') {
          this.router.navigate(['/login'])
        }
      }
    )
  }

}
