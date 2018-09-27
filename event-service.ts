import { Observable, BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerMessage } from './message';
import { ClientSettings } from './client-settings';
import { Screens } from './screens';
import { ClientService } from './client-service';

const clientService = ClientService.getInstance();

export class EventService {
    constructor() {
        
    }



    generateRandomEvent() {
        const screens = ['/home', '/case-history', '/alarm-history', '/io-monitor', '/user-setup'];
        interval(3000).pipe(map(() => {
            const type = Math.floor(Math.random() * (5 - 0)) + 0;
            const message: ServerMessage = { message: "Update data", screen: screens[type] as Screens };
            clientService.sendGenericMessage(type, message);
        })).subscribe();
    }


}