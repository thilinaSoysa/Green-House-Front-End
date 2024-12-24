import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './components/plant/plant.component';
import { PlantdetailsComponent } from './components/plantdetails/plantdetails.component';

const routes: Routes = [
  {path : 'plant',component : PlantComponent},
  {path : 'plantdetails',component : PlantdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
