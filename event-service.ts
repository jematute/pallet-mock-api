import { Observable, BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerMessage } from './message';
import { ClientSettings } from './client-settings';
import { Screens } from './screens';

export class EventService {
    
    clientService = ClientSettings.getInstance();
    constructor() {
        
    }

    getMessages(): Observable<ServerMessage> {
        const screens = ['/home', '/case-history', '/alarm-history', '/io-monitor', '/user-setup'];
        return interval(3000).pipe(map(() => {

            const type = Math.floor(Math.random() * (5 - 0)) + 0;
            const message: ServerMessage = { message: "Update data", screen: screens[type] as Screens };
            return message;
        }));
    }


}