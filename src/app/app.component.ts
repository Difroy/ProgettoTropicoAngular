import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TropicanoComponent } from "./tropicano/tropicano.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TropicanoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tropicoFinale';
}
