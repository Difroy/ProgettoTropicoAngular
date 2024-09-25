import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tropicano } from './model/Tropicano';

@Injectable({
  providedIn: 'root'
})
export class TropicanoService {

  tropicanos:Tropicano[] = [];

  constructor(private http:HttpClient) {}

APIURL:string = 'http://localhost:8080/tropico/api/tropicanos';



getTropicanos():Tropicano[]
{

  if(this.tropicanos.length==0)
    this.http.get<Tropicano[]>(this.APIURL).subscribe(tropicanos=>this.tropicanos = tropicanos);

return this.tropicanos;  
}
saveTropicano(t:Tropicano):void
  {
      this              // TROPICANOSERVICE
        .http           // HTTPSERVICE
        .post<Tropicano>(this.APIURL, t)    // OBSERVABLE<Tropicano>
        .subscribe(tropicano=>this.tropicanos.push(tropicano));
        //          CALLBACK
  }


}