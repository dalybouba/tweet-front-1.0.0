import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url = 'http://localhost:3000'

  constructor(
    private httpclient: HttpClient,
  ) {
  }

  user(form: User) {
    console.log(form)
    return this.httpclient.post<User>(`${this.Url}/users`, form)
  }


  getuser(form: User): Observable<User> {
    return this.httpclient.get<User>(`${this.Url}/users`)
  }
  getuserById(id: number): Observable<User> {
    return this.httpclient.get<User>(`${this.Url}/users/${id}`)
  }
  updateuser(id: number, form: User): Observable<User> {
    return this.httpclient.put<User>(`${this.Url}/users/${id}`, form)
  }
  deleteTweet(id: number): Observable<User> {
    return this.httpclient.delete<User>(`${this.Url}/users/${id}`)
  }
}
