import { Component, Input } from '@angular/core';
import { Building } from '../model/Building';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-building-info',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './building-info.component.html',
  styleUrl: './building-info.component.css'
})
export class BuildingInfoComponent {

// versione ridotta di building da usare in buildinglist...
 

@Input()
  building!:Building;




}
