import { Component,OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service'; // Adjust the path
import { Plant } from '../../model/plant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantsearch',
  standalone: false,
  
  templateUrl: './plantsearch.component.html',
  styleUrl: './plantsearch.component.css'
})
export class PlantsearchComponent implements OnInit {
  searchTerm: string = '';  // To store the plant code input
  plant: Plant | null = null;  // To store the plant data when found
  errorMessage: string = '';  // To store error message

  constructor(private plantService: PlantService, private router: Router) {}

  ngOnInit(): void {
    // On init, no data is shown.
  }
  goBack(): void {
    this.router.navigate(['/plant']);
  }
  onSearch(): void {
    if (this.searchTerm) {
      this.plantService.getPlantByCode(this.searchTerm).subscribe(
        (data) => {
          this.plant = data;  // Store the plant if found
          this.errorMessage = '';  // Clear error message
        },
        (error) => {
          this.plant = null;  // Clear plant data if error
          this.errorMessage = 'No plant found with the provided code.';  // Show error message
        }
      );
    }
  }
  onSearchChange(): void {
    if (!this.searchTerm) {
      this.plant = null;  // Reset plant data when input is cleared
      this.errorMessage = '';
    }
  }
  
  editPlant(plant: Plant): void {
    // Logic for editing plant
    // You can implement routing here to an edit component if needed
    console.log('Edit plant:', plant);
  }
  deletePlant(plantCode: string): void {
    if (confirm('Are you sure you want to delete this plant?')) {
      this.plantService.deletePlant(plantCode).subscribe(
        () => {
          this.plant = null;  // Reset the plant data
          this.errorMessage = '';  // Clear any error message
          alert('Plant deleted successfully!');
        },
        (error) => {
          this.errorMessage = 'An error occurred while deleting the plant.';
        }
      );
    }
  }

}
