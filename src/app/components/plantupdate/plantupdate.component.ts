import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../model/plant.model';

@Component({
  selector: 'app-plantupdate',
  standalone: false,
  
  templateUrl: './plantupdate.component.html',
  styleUrl: './plantupdate.component.css'
})
export class PlantupdateComponent implements OnInit{
  plant: Plant | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const plantCode = this.route.snapshot.paramMap.get('plantCode');
    if (plantCode) {
      this.plantService.getPlantByCode(plantCode).subscribe(
        (data) => (this.plant = data),
        (error) => (this.errorMessage = 'Failed to fetch plant data.')
      );
    }
  }
  goBacktoPrevious(): void {
    this.router.navigate(['/plantsearch']);
  }

  onUpdate(): void {
    if (this.plant) {
      this.plantService.updatePlant(this.plant.plantCode, this.plant).subscribe({
        next: () => {
          alert('Plant updated successfully!');
          this.router.navigate(['/plantsearch']); // Redirect to search page
        },
        error: (err) => {
          this.errorMessage = 'Failed to update plant. Please try again.';
          console.error(err);
        }
      });
    }
  }

}
