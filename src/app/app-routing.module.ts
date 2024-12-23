import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './components/plant/plant.component';

const routes: Routes = [
  {path : 'plant',component : PlantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
