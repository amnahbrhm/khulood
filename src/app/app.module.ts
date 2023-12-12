import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { PaperworkComponent } from './paperwork/paperwork.component';
import { MainComponent } from './main/main.component';
import { SafePipe } from './shared/save.pipe.component';
import { StudCertComponent } from './stud-cert/stud-cert.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SchoolxteacherComponent } from './schoolxteacher/schoolxteacher.component';
import { NotesComponent } from './notes/notes.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { VisitsComponent } from './visits/visits.component';
@NgModule({
  declarations: [
    AppComponent,
    PaperworkComponent,
    MainComponent,
    StudCertComponent,
    ActivitiesComponent,
    SchoolxteacherComponent,
    NotesComponent,
    CertificationsComponent,
    LessonsComponent,
    AttendanceComponent,
    VisitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MenuModule,
    BrowserAnimationsModule,
    DialogModule,
    SafePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
