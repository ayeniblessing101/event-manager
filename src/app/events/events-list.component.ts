import { Component, OnInit } from '@angular/core';
import {EventService} from './shared/event.service';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  errorMessage: string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(data => this.events = data,
          error =>  this.errorMessage = <any>error);
  }

}
