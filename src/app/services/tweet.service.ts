import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ListTweet, Tweet } from '../shared/models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  Url = 'http://localhost:3000'
  private _refreshNeeded$ = new Subject<void>();

  constructor(
    private httpclient: HttpClient,
  ) {
  }

  get refreshNeeded$(): Observable<any> {
    return this._refreshNeeded$;
  }





  tweet(form: Tweet) {
    return this.httpclient.post<Tweet>(`${this.Url}/tweets`, form)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );

  }


  getTweet(): Observable<ListTweet> {
    return this.httpclient.get<ListTweet>(`${this.Url}/tweets`)
  }
  getTweetById(id: number): Observable<Tweet> {
    return this.httpclient.get<Tweet>(`${this.Url}/tweets/${id}`)
  }
  updateTweet(id: number, form: Tweet): Observable<Tweet> {
    return this.httpclient.put<Tweet>(`${this.Url}/tweets/${id}`, form)
  }

  getTweetWithParam(pageSize: any, page: any): Observable<ListTweet> {
    return this.httpclient.get<ListTweet>(`${this.Url}/tweets/${page}/${pageSize}/allTweets`)
  }
  deleteTweet(id: number): Observable<Tweet> {
    return this.httpclient.delete<Tweet>(`${this.Url}/tweets/${id}`)
  }
}
