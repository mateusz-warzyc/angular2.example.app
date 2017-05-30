import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px; }`
    ]
})
export class EventDetailsComponent implements OnInit{
    public event: IEvent;

        constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
            this.eventService = eventService;
            this.activatedRoute = activatedRoute;
         }

        ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
    }

}