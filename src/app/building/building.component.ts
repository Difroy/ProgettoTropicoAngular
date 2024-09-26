import { Component } from '@angular/core';
import { Building } from '../model/Building';
import { Tropicano } from '../model/Tropicano';
import { BuildingService } from '../building.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {


  building: Building | null = null; // Store building data
  residents: Tropicano[] = []; // Array to hold residents data
  workers: Tropicano[] = []; // Array to hold workers data


  constructor(private buildingService: BuildingService, private route:ActivatedRoute) {}

  ngOnInit(): void 
  {
      this.route.params.subscribe(params => {
        const buildingId = +params['id']; // Get the building ID from route parameters
        this.loadBuildingData(buildingId);
      });

  }
 
  loadBuildingData(buildingId: number): void {
    this.buildingService.getBuildingById(buildingId).subscribe(data => {
      this.building = data;
      this.residents = data.residents || []; // Assuming the DTO has residents property
      this.workers = data.workers || []; // Assuming the DTO has workers property
    });
  }
}
