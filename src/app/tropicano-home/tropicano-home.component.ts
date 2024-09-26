import { Component } from '@angular/core';
import { ListTropicanosComponent } from '../list-tropicanos/list-tropicanos.component';
import { TropicanoStatsComponent } from "../tropicano-stats/tropicano-stats.component";
import { TropicanoFormComponent } from "../tropicano-form/tropicano-form.component";
import { BuildingComponent } from "../building/building.component";



@Component({
  selector: 'app-tropicano-home',
  standalone: true,
  imports: [ListTropicanosComponent, TropicanoStatsComponent, TropicanoFormComponent],
  templateUrl: './tropicano-home.component.html',
  styleUrl: './tropicano-home.component.css'
})
export class TropicanoHomeComponent {


}
