import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  localStorage = localStorage;

  constructor(public http: HttpClient) { }

  public getAllPosts(): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Posts', { headers: environment.requestHeaders });
  }

  public getCurrentPosts(postId: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Posts/' + postId, { headers: environment.requestHeaders });
  }

  public postComments(commentData: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/classes/Comments', commentData, { headers: environment.requestHeaders })
  }

  public getComments(postId: string): Observable<any> {
    const postData = {
      'where': {
        'postId': { '$regex': `^${postId}$` }
      },
      '_method': 'GET'
    }
    return this.http.post(environment.apiUrl + '/classes/Comments', postData, { headers: environment.requestHeaders })
  }

  public createPost(postData: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/classes/Posts/', postData, { headers: environment.requestHeaders })
  }
}
