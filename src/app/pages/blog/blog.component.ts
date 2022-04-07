import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { BlogService } from 'src/app/feature/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  hasUser:boolean = false
  postsArr:IBlogPost[] = [];

  constructor(public authService: AuthService, private blogServise: BlogService) { }

  ngOnInit(): void {
    this.hasUser = this.authService.hasUser();
    this.blogServise.getAllPosts().subscribe(
      response => this.postsArr = response.results
    )
  }

}
