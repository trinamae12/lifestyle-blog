import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get("./assets/posts.json");
  }

  getComments(): Observable<any> {
    return this.http.get("./assets/comments.json");
  }
}
