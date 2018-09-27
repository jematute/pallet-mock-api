import { Observable, BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerMessage, MessageType } from './message';

export class EventService {
    
    constructor() {

    }

    getMessages(): Observable<ServerMessage> {    
        return interval(3000).pipe(map(() => {
            const type = Math.floor(Math.random() * (6 - 0)) + 0;
            const message: ServerMessage = { message: "", type: type };
            return message;
        }));
    }


}