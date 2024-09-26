import { Component } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
import { TropicanoService } from '../tropicano.service';
import { TropicanoComponent } from "../tropicano/tropicano.component";
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Filter
{
    adults:boolean,
    children:boolean,
    none:boolean,
    hs:boolean,
    college:boolean
}



@Component({
  selector: 'app-tropicano-list',
  standalone: true,
  imports: [TropicanoComponent, NgIf, NgFor, FormsModule],
  templateUrl: './tropicano-list.component.html',
  styleUrl: './tropicano-list.component.css'
})
export class TropicanoListComponent {

  tropicanos:Tropicano[] = [];
    
  filter:Filter = {adults:true, children:true, none:true, hs:true, college:true};
  
  constructor(public tropicanoService:TropicanoService){}

  ngOnInit():void
  {
      this.tropicanoService.getTropicanos().subscribe(records=>this.tropicanos=records);
  }

  getFilteredTropicanos():Tropicano[]
  {
      return this.tropicanos.filter(x=>this.matches(x));
  }

  getVotes():number
  {
    return this.getFilteredTropicanos().filter(x=>x.satisfaction>=50 && x.birthyear<=2006).length;        
  }

  matches(t:Tropicano):boolean
  {
      let adult:boolean = t.birthyear <=2006;
      let child:boolean = !adult;

      if(adult && !this.filter.adults)
        return false;

      if(child && !this.filter.children)
        return false;

      if(!this.filter.college && t.education=='COLLEGE')
        return false;
      
      if(!this.filter.hs && t.education=='HS')
        return false;

      if(!this.filter.none && t.education=='NONE')
        return false;


      return true;
  }

}
