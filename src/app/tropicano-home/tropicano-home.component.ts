import { Component } from '@angular/core';
import { ListTropicanosComponent } from '../list-tropicanos/list-tropicanos.component';
import { TropicanoStatsComponent } from "../tropicano-stats/tropicano-stats.component";

interface EducationLevel
{
  none:number,
  hs:number,
  college:number
}

@Component({
  selector: 'app-tropicano-home',
  standalone: true,
  imports: [ListTropicanosComponent, TropicanoStatsComponent],
  templateUrl: './tropicano-home.component.html',
  styleUrl: './tropicano-home.component.css'
})
export class TropicanoHomeComponent {


}
