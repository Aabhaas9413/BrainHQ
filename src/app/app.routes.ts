import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HelpComponent } from './components/help/help.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ScienceComponent } from './components/science/science.component';
import { PartnersComponent } from './components/partners/partners.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'help', component: HelpComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'exercises', component: ExercisesComponent },
    { path: 'science', component: ScienceComponent },
    { path: 'partners', component: PartnersComponent }
  ];;
