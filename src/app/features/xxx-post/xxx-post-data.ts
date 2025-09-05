import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { XxxPostType } from "./xxx-post-types";

@Injectable({
  providedIn: 'root'
})
export class XxxPostData {
  private http: HttpClient = inject(HttpClient);

  getPosts(userId: number): Observable<XxxPostType[]> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.http.get<XxxPostType[]>(postUrl);
  }

  updatePost(post: XxxPostType): Observable<XxxPostType> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    return this.http.put<XxxPostType>(postUrl, post);
  }
}
