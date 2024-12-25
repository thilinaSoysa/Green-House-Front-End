import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './components/plant/plant.component';
import { PlantdetailsComponent } from './components/plantdetails/plantdetails.component';
import { PlantsearchComponent } from './components/plantsearch/plantsearch.component';
import { PlantupdateComponent } from './components/plantupdate/plantupdate.component';

const routes: Routes = [
  {path : 'plant',component : PlantComponent},
  {path : 'plantdetails',component : PlantdetailsComponent},
  { path: 'plantsearch', component: PlantsearchComponent },
  { path: 'plantupdate/:plantCode', component: PlantupdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
