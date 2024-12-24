import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../model/plant.model';
import { format } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantdetails',
  standalone: false,
  
  templateUrl: './plantdetails.component.html',
  styleUrl: './plantdetails.component.css'
})
export class PlantdetailsComponent {
  plantForm: FormGroup;

  constructor(private fb: FormBuilder, private plantService: PlantService, private router: Router) {
    this.plantForm = this.fb.group({
      plantCode: ['', Validators.required],
      plantName: ['', Validators.required],
      plantType: ['', Validators.required],
      soilType: ['', Validators.required],
      temperatureRange: ['', Validators.required],
      humidityRange: ['', Validators.required],
      lightRequirement: ['', Validators.required],
      wateringFrequency: ['', Validators.required],
      lastUpdated: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.plantForm.valid) {
      const plantData: Plant = this.plantForm.value;
      if (plantData.lastUpdated) {
        const date = new Date(plantData.lastUpdated);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        plantData.lastUpdated = formattedDate;
      }
      console.log('Sending data to backend:', plantData); // Log the data before sending
  
      this.plantService.addPlant(plantData).subscribe({
        next: () => {
          alert('Plant added successfully!');
          this.plantForm.reset();
        },
        error: (err) => {
          console.error('Error response from backend:', err); // Log error details
          alert('Failed to add plant.');
        },
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
  goBack(): void {
    this.router.navigate(['/plant']);
  }

}
