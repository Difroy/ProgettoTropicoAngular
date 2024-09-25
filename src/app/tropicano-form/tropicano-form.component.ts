import { Component, Input } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
import { FormsModule } from '@angular/forms';
import { TropicanoService } from '../tropicano.service';

@Component({
  selector: 'app-tropicano-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tropicano-form.component.html',
  styleUrl: './tropicano-form.component.css'
})
export class TropicanoFormComponent {

  constructor(private tropicanoService:TropicanoService){}

  tropicano:Tropicano=
  {
      id:0,
      name:"",
      surname:"",
      birthyear:2000,
      gender:"M",
      education:"NONE",
      party:"LEFT",
      satisfaction:0
  }

  save():void
  {
      let copy:Tropicano = {...this.tropicano};
      this.tropicanoService.saveTropicano(copy);

      this.tropicano =  {
        id:0,
        name:"",
        surname:"",
        birthyear:2000,
        gender:"M",
        education:"NONE",
        party:"LEFT",
        satisfaction:0
    };
  }






}
