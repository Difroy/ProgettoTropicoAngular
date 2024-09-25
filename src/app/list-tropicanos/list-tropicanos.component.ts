import { Component, OnInit } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
import { TropicanoService } from '../tropicano.service';
import { TropicanoComponent } from '../tropicano/tropicano.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Filter
{
  adults:boolean;
  children:boolean;
  none:boolean;
  hs:boolean;
  college:boolean;
}


@Component({
  selector: 'app-list-tropicanos',
  standalone: true,
  imports: 
  [TropicanoComponent, NgIf, NgFor, FormsModule],
  templateUrl: './list-tropicanos.component.html',
  styleUrl: './list-tropicanos.component.css'
})
export class ListTropicanosComponent {

tropicanos:Tropicano[] = [];

filter:Filter = {adults:true, children:true};


constructor(private tropicanoService:TropicanoService) {}


getFilteredTropicanos(): Tropicano[]
{
return this.tropicanoService.getTropicanos().filter(x=>this.matches(x));


}

getVotes():number
{
  return this.getFilteredTropicanos().filter(x=>x.satisfaction>=50 && x.birthyear<=2006).length;

}

matches(t:Tropicano):boolean
{



  let adult:boolean = t.birthyear <= 2006
  let child:boolean != adult;


  if(adult && !this.filter.adults)
    return false;

  if(child && )



}
