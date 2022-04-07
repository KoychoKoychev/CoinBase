import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  localStorage = localStorage;

  constructor(public http: HttpClient) { }

  public getAllPosts(): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Posts', {headers: environment.requestHeaders});
  }

  public getCurrentPosts(postId:string): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Posts/' + postId, {headers: environment.requestHeaders});
  }
}
