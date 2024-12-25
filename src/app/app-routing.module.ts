import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './components/plant/plant.component';
import { PlantdetailsComponent } from './components/plantdetails/plantdetails.component';
import { PlantsearchComponent } from './components/plantsearch/plantsearch.component';

const routes: Routes = [
  {path : 'plant',component : PlantComponent},
  {path : 'plantdetails',component : PlantdetailsComponent},
  { path: 'plantsearch', component: PlantsearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
