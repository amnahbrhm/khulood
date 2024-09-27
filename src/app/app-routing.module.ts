import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaperworkComponent } from './paperwork/paperwork.component';
import { MainComponent } from './main/main.component';
import { StudCertComponent } from './stud-cert/stud-cert.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SchoolxteacherComponent } from './schoolxteacher/schoolxteacher.component';
import { NotesComponent } from './notes/notes.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { VisitsComponent } from './visits/visits.component';
import { CommunityPartnershipComponent } from './community-partnership/community-partnership.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'paparwork',
    component: PaperworkComponent,
  },
  {
    path: 'student-certification',
    component: StudCertComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'schoolxteacher',
    component: SchoolxteacherComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },  
  {
    path: 'certifications',
    component: CertificationsComponent,
  },
  {
    path: 'lessons',
    component: LessonsComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'visits',
    component: VisitsComponent,
  },
    {
    path: 'community-partnership',
    component: CommunityPartnershipComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
