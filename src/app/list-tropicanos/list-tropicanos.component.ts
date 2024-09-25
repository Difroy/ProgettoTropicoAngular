import { Component, OnInit } from '@angular/core';
import { Tropicano } from '../model/Tropicano';
import { TropicanoService } from '../tropicano.service';
import { TropicanoComponent } from '../tropicano/tropicano.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Filter {
  adults: boolean;
  children: boolean;
  none: boolean;
  hs: boolean;
  college: boolean;
  name: string;
  surname: string;
  party: string;
  satisfaction: string;
}

@Component({
  selector: 'app-list-tropicanos',
  standalone: true,
  imports: [TropicanoComponent, NgIf, NgFor, FormsModule],
  templateUrl: './list-tropicanos.component.html',
  styleUrl: './list-tropicanos.component.css',
})
export class ListTropicanosComponent {
    filter: Filter = {
    adults: true,
    children: true,
    none: true,
    hs: true,
    college: true,
    name: '',
    surname: '',
    party: '',
    satisfaction: 'default',
  };

  constructor(public tropicanoService: TropicanoService) {}

  getFilteredTropicanos(): Tropicano[] {
    return this.tropicanoService.getTropicanos().filter((x) => this.matches(x));
  }

  getVotes(): number {
    return this.getFilteredTropicanos().filter(
      (x) => x.satisfaction >= 50 && x.birthyear <= 2006
    ).length;
  }

  matches(t: Tropicano): boolean {
    let adult: boolean = t.birthyear <= 2006;
    let child: boolean = !adult;

    if (adult && !this.filter.adults) return false;

    if (child && !this.filter.children) return false;

    if (!this.filter.college && t.education == 'COLLEGE') return false;

    if (!this.filter.hs && t.education == 'HS') return false;

    if (!this.filter.none && t.education == 'NONE') return false;

    if (!t.name.toLocaleLowerCase().includes(this.filter.name.toLowerCase()))
      return false;

    if (
      !t.surname
        .toLocaleLowerCase()
        .includes(this.filter.surname.toLocaleLowerCase())
    )
      return false;

    if (!t.party.includes(this.filter.party)) return false;

    if (!this.filter.satisfaction.includes('default')) {
      if (!this.filter.satisfaction.includes('LOW') && t.satisfaction <= 33)
        return false;

      if (
        !this.filter.satisfaction.includes('MEDIUM') &&
        t.satisfaction <= 66 &&
        t.satisfaction > 33
      )
        return false;

      if (!this.filter.satisfaction.includes('HIGH') && t.satisfaction > 66)
        return false;
    }
    return true;
  }
}
