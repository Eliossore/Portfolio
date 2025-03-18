import { Routes } from '@angular/router';
import { TitleCardComponent } from './title-card/title-card.component';
import { CompetenceComponent } from './competence/competence.component';

export const routes: Routes = [
    { path: 'home', component: TitleCardComponent },
    // { path: 'cv', component: CvComponent },
    // { path: 'experiences', component: ExperiencesComponent },
    // { path: 'projects', component: ProjectsComponent },
    // { path: 'contact', component: ContactComponent },
    { path: 'competence', component: CompetenceComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
