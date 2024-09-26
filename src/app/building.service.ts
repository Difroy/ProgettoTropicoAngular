import { Injectable } from '@angular/core';
import { BasicBuildingInfo, Building } from './model/Building';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  APIURL:string = 'http://localhost:8080/tropico/api/buildings';
  constructor(private http:HttpClient) { }

  getQuickInfo():Observable<BasicBuildingInfo[]>
  {
      return this.http.get<BasicBuildingInfo[]>(this.APIURL+'/basicinfo');
  }

  getBuildingById(id:number):Observable<Building>
  {
      return this.http.get<Building>(this.APIURL+'/'+id);
  }

  getAllBuildings():Observable<Building[]> 
  {
      return this.http.get<Building[]>(this.APIURL);
  }


}
