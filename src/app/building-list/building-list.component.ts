import { Component } from '@angular/core';
import { Building } from '../model/Building';
import { BuildingService } from '../building.service';
import { BuildingInfoComponent } from '../building-info/building-info.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [BuildingInfoComponent, NgFor],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {

  buildings: Building[] = [];
  filteredBuildings: Building[] = [];

  constructor(private buildingService: BuildingService) {}

  ngOnInit(): void {
    this.loadBuildings();
  }

  loadBuildings(): void {
    this.buildingService.getAllBuildings().subscribe(data => {
      this.buildings = data;
      this.filteredBuildings = this.getFilteredBuildings(); // Call method to get filtered buildings if needed
    });
  }

  getFilteredBuildings(): Building[] {
    // Implement your filtering logic here. 
    // For example, you might want to filter by type, capacity, etc.
    return this.buildings; // Return all buildings as a placeholder
  }

}
