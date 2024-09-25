import { Component, Input } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
//Questo componente renderizza un tropicano.




@Component({
  selector: 'app-tropicano',
  standalone: true,
  imports: [],
  templateUrl: './tropicano.component.html',
  styleUrl: './tropicano.component.css'
})



export class TropicanoComponent
{
//io non ti fornisco un valore di default, se non ricevi nulla dal padre, vai in crash
  @Input() tropicano!: Tropicano;




}
