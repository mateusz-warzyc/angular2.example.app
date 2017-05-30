import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver
} from './events/index';
import { AuthService } from './user/auth.service'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ NavbarComponent,
                    EventsListComponent,
                    EventThumbnailComponent,
                    EventsAppComponent,
                    EventDetailsComponent,
                    CreateEventComponent,
                    Error404Component ],
    providers: [ EventService,
                 ToastrService,
                 EventRouteActivator,
                 EventListResolver,
                 {provide: 'canDeacivateCreateEvent', useValue: checkDirtyState},
                  AuthService],
    bootstrap: [EventsAppComponent ]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}