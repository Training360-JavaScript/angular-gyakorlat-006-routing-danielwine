import { EventService } from 'src/app/service/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  eventList: Event[]

  constructor(eventService: EventService) {
     this.eventList = eventService.getAll()
  }

  ngOnInit(): void {}
}
