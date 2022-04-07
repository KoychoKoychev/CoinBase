import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { BlogService } from 'src/app/feature/blog/blog.service';
declare function require(name:string):any;
const chunk = require('lodash.chunk');

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  post!: IBlogPost
  display_date: any
  postParagraphs: string[] = []


  constructor(private blogService: BlogService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.activateRoute.snapshot.params['postId'];

    this.blogService.getCurrentPosts(postId).subscribe(
      response => {
        this.post = response
        this.display_date = new Date(response.createdAt);
        this.postParagraphs = chunk(response.content.split('. ').map( (el: string) => el +'.'), 5)
                              .map((el:string[])=>el.join(' '));
      }
    )
  }

}
