import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { JobComponent } from './body/job/job.component';
import { ReferencesComponent } from './body/references/references.component';
import { EducationComponent } from './body/education/education.component';
import { HonorsComponent } from './body/honors/honors.component';
import { ActivitiesComponent } from './body/activities/activities.component';
import { ObjectiveComponent } from './body/objective/objective.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    JobComponent,
    ReferencesComponent,
    EducationComponent,
    HonorsComponent,
    ActivitiesComponent,
    ObjectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
