import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TropicanoService {

  constructor(private http:HttpClient) {}

APIURL: string = 'http://localhost:8080/tropico/api/tropicanos';






}
