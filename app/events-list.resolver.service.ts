import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './events/shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {
        this.eventService = eventService;
    }

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}