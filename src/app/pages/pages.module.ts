import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Module
import { RoutingPageModule } from './routing-pages.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

//Shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingPageModule,
    SharedModule
  ]
})
export class PagesModule { }
