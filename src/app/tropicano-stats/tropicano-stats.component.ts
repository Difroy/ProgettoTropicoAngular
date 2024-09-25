import { Component, OnInit } from '@angular/core';
import { TropicanoService } from '../tropicano.service';
import { Tropicano } from '../model/Tropicano';

interface EducationLevel
{
    none:number,
    hs:number,
    college:number
}

@Component({
  selector: 'app-tropicano-stats',
  standalone: true,
  imports: [],
  templateUrl: './tropicano-stats.component.html',
  styleUrl: './tropicano-stats.component.css'
})
export class TropicanoStatsComponent {


  ngOnInit():void
  {
  }

  constructor(private tropicanoService:TropicanoService){}

  education():EducationLevel
  
  {
    let res:EducationLevel = {none:0, hs:0, college:0};

    let tropicanos:Tropicano[] = this.tropicanoService.getTropicanos();

    if(!this.tropicanoService.tropicanos)
      return res;

    for(let i=0;i<tropicanos.length;i++)
      switch(tropicanos[i].education)
      {
          case "NONE":
            res.none++;
          break;
          case "HS":
            res.hs++;
          break;
          default:
            res.college++;
      }
      return res;
}


}
