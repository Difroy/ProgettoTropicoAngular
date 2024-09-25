import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tropicano } from './model/Tropicano';

@Injectable({
  providedIn: 'root'
})
export class TropicanoService {

  constructor(private http:HttpClient) {}

APIURL: string = 'http://localhost:8080/tropico/api/tropicanos';



getTropicanos():Observable<Tropicano[]>
{
  return this.http.get<Tropicano[]>(this.APIURL);

}
}