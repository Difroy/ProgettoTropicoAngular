import { Component, Input } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
import { TropicanoService } from '../tropicano.service'; 
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
//Questo componente renderizza un tropicano.




@Component({
  selector: 'app-tropicano',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './tropicano.component.html',
  styleUrl: './tropicano.component.css'
})



export class TropicanoComponent
{
//io non ti fornisco un valore di default, se non ricevi nulla dal padre, vai in crash
  @Input() tropicano!: Tropicano;


  constructor(public tropicanoService:TropicanoService){}

  imageUrl():string
  {
    return "assets/images/people/"+this.tropicano.gender+"/"+this.tropicano.image;
  } 


}
