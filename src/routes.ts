import { Routes } from '@angular/router';
import { EventListComponent} from './app/events/events-list.component';
import { EventDetailsComponent} from './app/events/event-details/event-details.component';
import {CreateEventComponent} from './app/events/create-event.component';
import {Error404Component} from './app/errors/404.component';
import { EventRouteActivatorService } from './app/events/event-details/event-route-activator.service';
import { CreateSessionComponent } from './app/events/create-session.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'events/session/new', component: CreateSessionComponent }
];
