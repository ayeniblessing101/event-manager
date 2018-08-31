import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from './shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  newEvent;
  isDirty = true;
  constructor(private route: Router, private eventService: EventService) {}

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.route.navigate(['/events']);
  }

  cancel() {
    this.route.navigate(['/events']);
  }
}
