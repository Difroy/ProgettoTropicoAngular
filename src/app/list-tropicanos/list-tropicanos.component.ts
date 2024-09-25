import { Component, OnInit } from '@angular/core';
import { Tropicano } from '../model/Tropicano';

@Component({
  selector: 'app-list-tropicanos',
  standalone: true,
  imports: [],
  templateUrl: './list-tropicanos.component.html',
  styleUrl: './list-tropicanos.component.css'
})
export class ListTropicanosComponent {

tropicanos:Tropicano[] = [];

constructor(private tropicanoService:TropicanoService) {}

ngOnInit()
{
 this.tropicanoService.getTropicanos()
 .subscribe(tropicanos => console.log(tropicanos));
}
}
