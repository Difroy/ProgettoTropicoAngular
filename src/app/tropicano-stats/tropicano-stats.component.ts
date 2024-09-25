import { Component, OnInit } from '@angular/core';
import { TropicanoService } from '../tropicano.service';
import { Tropicano } from '../model/Tropicano';

interface EducationLevel
{
    none:number,
    hs:number,
    college:number
}

interface Statistics
{
  adults:number,
  avgage:number;
  agemedian:number;
  avgsatisfaction:number,
  leftpeople:number,
  rightpeople:number
}

@Component({
  selector: 'app-tropicano-stats',
  standalone: true,
  imports: [],
  templateUrl: './tropicano-stats.component.html',
  styleUrl: './tropicano-stats.component.css'
})
export class TropicanoStatsComponent 
{

  statistics: Statistics = {adults: 0, avgage: 0, agemedian: 0, avgsatisfaction: 0, leftpeople: 0, rightpeople: 0};

    ngOnInit():void
    {
      
    }

    ngDoCheck():void
    {
      this.statistics = {adults: 0, avgage: 0, agemedian: 0, avgsatisfaction: 0, leftpeople: 0, rightpeople: 0};
      this.getStatistics();
    }

    constructor(public tropicanoService:TropicanoService){}

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

    /**
         * durante il ciclo mi salvo l'età della persona che sta ciclando
         * metto l'età della persona dentro una lista delle età delle persone
         * controllo se ha più di 18 anni, in quel caso aumento il numero totale di adulti
         * e aggiungo il valore della satisfaction alla somma totale
         * controllo il suo party, se è left aumento la statistica della sinistra, oppure di destra
         * una volta finito il for, faccio un sorting sulla lista delle età ordinandole in modo crescente
         * e trovo la mediana, calcolandomi con Math.floor l'indice medio arrotondato per difetto
         * se la lunghezza è dispari, aggiungo 1 all'indice medio
         * se la lunghezza è pari prenderò il valore dell'indice medio stesso e il valore dopo e farò la media
         */
    getStatistics():void
    {
      let ageList: number[] = [];
      let totalSatisfaction = 0;
      let currentAge: number = 0;
      let totalAge: number = 0;
      let numeroTropicani = this.tropicanoService.getTropicanos().length;
      
      for(let i=0; i<numeroTropicani;i++)
      {
        currentAge = (2024 - this.tropicanoService.getTropicanos()[i].birthyear);
        totalAge += currentAge;
        
        ageList.push(currentAge);

        if(currentAge >= 18)
        {
          this.statistics.adults++;
          totalSatisfaction += this.tropicanoService.getTropicanos()[i].satisfaction;
        }

        if(this.tropicanoService.getTropicanos()[i].party.includes("LEFT"))         
          this.statistics.leftpeople++;
        else if(this.tropicanoService.getTropicanos()[i].party.includes("RIGHT"))
          this.statistics.rightpeople++;
      }

      this.statistics.avgsatisfaction = parseFloat((totalSatisfaction/numeroTropicani).toFixed(2));
      this.statistics.avgage = parseFloat((totalAge/numeroTropicani).toFixed(2));


      ageList.sort((a, b) => a - b);

      const middle = Math.floor(numeroTropicani / 2);

      console.log(middle);

      if(ageList.length / 2 % 1)
      {
        this.statistics.agemedian = ageList[middle+1];
      }
      else
      {
        this.statistics.agemedian = ageList[middle + 1] + ageList[middle] / 2;
      }

      console.log(this.statistics);
    }

}