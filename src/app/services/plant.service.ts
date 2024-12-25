import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../model/plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = 'http://localhost:8001/plant';
  constructor(private http: HttpClient) { }
  // Fetch all plants
  /*getPlants(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }*/
  // Fetch plant by code
  getPlantByCode(plantCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/code/${plantCode}`);
  }
  /*// Add new plant
  addPlant(plant: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, plant);
  }
  // Update plant
  updatePlant(plantCode: string, plant: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${plantCode}`, plant);
  }
  // Delete plant
  deletePlant(plantCode: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${plantCode}`);
  }*/
    getAllPlants(): Observable<Plant[]> {
      return this.http.get<Plant[]>(`${this.apiUrl}/all`);
    }
  
    deletePlant(plantCode: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/delete/${plantCode}`);
    }
    
    addPlant(plant: Plant): Observable<Plant> {
      return this.http.post<Plant>(`${this.apiUrl}/create`, plant);
    }
    updatePlant(plantCode: string, plant: Plant): Observable<Plant> {
      return this.http.put<Plant>(`${this.apiUrl}/update/${plantCode}`, plant);
    }
    

}
