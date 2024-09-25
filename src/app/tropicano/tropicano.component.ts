import { Component, Input } from '@angular/core';
//Questo componente renderizza un tropicano.

interface Tropicano {
  id: number;
  name: string;
  surname: string;
  birthyear: number;
  gender: 'M' | 'F';
  education: 'NONE' | 'HS' | 'COLLEGE';
  party: 'LEFT' | 'RIGHT';
  satisfaction: number;
}



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
