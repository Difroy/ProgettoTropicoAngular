import { Injectable } from '@angular/core';
import { User } from './model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIURL:string = 'http://localhost:8080/tropico/api/login';

  constructor(private http:HttpClient) { }

login (u:User):Observable<User>
{
  return this.http.post<User>(this.APIURL, u);
}


}
