import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../model/plant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant',
  standalone: false,
  
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent implements OnInit{

  plants: Plant[] = []; // Initialize an empty array to store plants.

  constructor(private plantService: PlantService,private router: Router) {
    this.getPlants();
  }

  ngOnInit(): void {
     // Fetch plants when the component is initialized.
  }

  getPlants(): void {
    this.plantService.getAllPlants().subscribe(
      (data) => {
        this.plants = data; // Assign the fetched plants to the array.
        console.log('Fetched plants:', this.plants); // Debugging log.
      },
      (error) => {
        console.error('Error fetching plants:', error);
      }
    );
  }

  addNewPlant(): void {
    // Navigate to the plantdetails page
    this.router.navigate(['/plantdetails']);
  }

  editPlant(plant: Plant): void {
    console.log('Edit plant:', plant);
    // Implement navigation or modal opening for editing.
  }

  deletePlant(plantCode: string): void {
    this.plantService.deletePlant(plantCode).subscribe(() => {
      console.log('Plant deleted:', plantCode);
      this.getPlants(); // Refresh the plant list.
    });
  }

}
