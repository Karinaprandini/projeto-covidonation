import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from '../components/carousel/carousel.module';
import { InfoPixComponent } from './info-pix/info-pix.component';
import { InfoCovidonationComponent } from './info-covidonation/info-covidonation.component';
import { InfoSocialMediaComponent } from './info-social-media/info-social-media.component';
import { InfoComponent } from './info/info.component';
import { InfoConhecaComponent } from './info-conheca/info-conheca.component';
import { InfoMapsComponent } from './info-maps/info-maps.component';
import { InfoCasosComponent } from './info-casos/info-casos.component';

@NgModule({
  declarations: [HomeComponent, InfoPixComponent, InfoCovidonationComponent, InfoSocialMediaComponent, InfoComponent, InfoConhecaComponent, InfoMapsComponent, InfoCasosComponent,],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
