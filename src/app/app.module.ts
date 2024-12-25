import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantComponent } from './components/plant/plant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantdetailsComponent } from './components/plantdetails/plantdetails.component';
import { PlantsearchComponent } from './components/plantsearch/plantsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    PlantComponent,
    PlantdetailsComponent,
    PlantsearchComponent
  ],
  exports:[PlantComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
