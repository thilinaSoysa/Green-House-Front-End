import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  plantForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private plantService: PlantService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.initializeForm();
    this.loadPlantData();
  }

  initializeForm(): void {
    this.plantForm = this.fb.group({
      plantCode: [{ value: '', disabled: true }],
      plantName: [''],
      plantType: [''],
      soilType: [''],
      temperatureRange: [''],
      humidityRange: [''],
      lightRequirement: [''],
      wateringFrequency: [''],
      lastUpdated: ['']
    });
  }
  loadPlantData(): void {
    const plantCode = this.route.snapshot.paramMap.get('plantCode');
    if (plantCode) {
      this.plantService.getPlantByCode(plantCode).subscribe({
        next: (plant) => {
          if (plant) {
            this.plantForm.patchValue(plant);
          }
        },
        error: (err) => {
          alert('Failed to load plant details.');
          console.error(err);
        }
      });
    }
  }
  onSubmit(): void {
    if (this.plantForm.valid) {
      const updatedPlant = {
        ...this.plantForm.getRawValue(), // Get all fields including disabled ones
        plantCode: this.plantForm.get('plantCode')?.value // Ensure plantCode is included
      };
      // Format the date if it's present
    if (updatedPlant.lastUpdated) {
      const date = new Date(updatedPlant.lastUpdated);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      updatedPlant.lastUpdated = formattedDate;  // Update the lastUpdated field with the formatted date
    }
      this.plantService.updatePlant(updatedPlant.plantCode, updatedPlant).subscribe({
        next: () => {
          alert('Plant updated successfully!');
          this.router.navigate(['/plantsearch']);
        },
        error: (err) => {
          alert('Failed to update plant. Please try again.');
          console.error(err);
        }
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/plantsearch']);
  }

}
