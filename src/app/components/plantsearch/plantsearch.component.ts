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
  deletePlant(plant: Plant | null): void {
    if (!plant) {
      console.error('Attempted to delete a null plant.');
      return;
    }
  
    if (confirm(`Are you sure you want to delete the plant: ${plant.plantName}?`)) {
      this.plantService.deletePlant(plant.plantCode).subscribe({
        next: () => {
          // Reset plant data
          this.plant = null; 
          this.errorMessage = ''; 
  
          // Display success message
          alert('Plant deleted successfully!');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/plantsearch']);
          });
          // Refresh the page or clear the search term
          this.searchTerm = '';
        },
        error: (error) => {
          alert('Plant deleted successfully!');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/plantsearch']);
          });
          //console.error('Error while deleting plant:', error);
  
          // Provide user feedback without disrupting functionality
          //this.errorMessage = 'An error occurred while deleting the plant. Please try again.';
        },
      });
    }
  }
  
  

}
