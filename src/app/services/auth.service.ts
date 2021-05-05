import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  //user$ = new BehaviorSubject<User[]>([])
  Url = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

   login(form: any){
    console.log(form)
    return this.httpClient.post<User>(`${this.Url}/login`, form).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
}

register(form: any): Promise<User> {
    return this.httpClient.post<User>(`${this.Url}/signup`, form).toPromise()
}

logout(): void {
    localStorage.removeItem('user')
}

setUser(user:any): void {
  localStorage.setItem('user', JSON.stringify(user))
}

loadUser(): User | undefined {
  const userJSON = localStorage.getItem('user')
  const user = userJSON ? JSON.parse(userJSON) : undefined
  return user
}
}
