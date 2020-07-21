import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SliderSectionComponent } from './Components/slider-section/slider-section.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ProgramSectionComponent } from './Components/program-section/program-section.component';
import { EventSectionComponent } from './Components/event-section/event-section.component';
import { ComingSoonSectionComponent } from './Components/coming-soon-section/coming-soon-section.component';
import { TestimonialSectionComponent } from './Components/testimonial-section/testimonial-section.component';
import { CallSectionComponent } from './Components/call-section/call-section.component';
import { TeamSectionComponent } from './Components/team-section/team-section.component';
import { ContactSectionComponent } from './Components/contact-section/contact-section.component';
import { NewsSectionComponent } from './Components/news-section/news-section.component';
import { ClientSectionComponent } from './Components/client-section/client-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderSectionComponent,
    AboutSectionComponent,
    ProgramSectionComponent,
    EventSectionComponent,
    ComingSoonSectionComponent,
    TestimonialSectionComponent,
    CallSectionComponent,
    TeamSectionComponent,
    ContactSectionComponent,
    NewsSectionComponent,
    ClientSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
