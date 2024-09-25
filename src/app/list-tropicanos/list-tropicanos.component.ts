import { Component, OnInit } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
import { TropicanoService } from '../tropicano.service';
import { TropicanoComponent } from '../tropicano/tropicano.component';
import { NgFor, NgIf } from '@angular/common';


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
 .subscribe(tropicanos => this.tropicanos = tropicanos);
}
}
