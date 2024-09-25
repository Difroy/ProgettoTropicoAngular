import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TropicanoComponent } from "./tropicano/tropicano.component";
import { TropicanoHomeComponent } from "./tropicano-home/tropicano-home.component";
import { ListTropicanosComponent } from './list-tropicanos/list-tropicanos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TropicanoComponent, TropicanoComponent, TropicanoHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'tropicoFinale';
}
