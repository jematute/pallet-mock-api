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
        const updates = [];
        updates.push({
            type: 'userupdate',
            data: "Bill", 
            textColor: "rgb(190,24,65)", 
            backgroundColor: "rgb(0,0,0)"
        });
        updates.push({
            type: 'casedataupdate'
        });

        updates.push({
            type: 'casehistoryupdate'
        });
        
        updates.push({
            type: 'palletscanupdate',
            textColor: 'rgb(190,24,65)',
            backgroundColor: 'rgb(255,255,255)',
            data: 'fromserver'
        });

        updates.push({
            type: 'palletstatusupdate',
            textColor: 'rgb(190,24,65)',
            backgroundColor: 'rgb(255,255,255)',
            data: 'fromserver'
        });

        updates.push({
            type: 'palletidupdate',
            textColor: 'rgb(190,24,65)',
            backgroundColor: 'rgb(255,255,255)',
            data: 'fromserver'
        });

        updates.push({
            type: 'wrapenableupdate',
            textColor: 'rgb(190,24,65)',
            backgroundColor: 'rgb(89,255,30)',
            data: 'fromserver'
        });

        updates.push({
            type: 'systemstatusupdate',
            data: 'Ready (from server)',
            textColor: 'rgb(255,255,255)',
            backgroundColor: 'rgb(144,75,133)'
        });

        updates.push({
            type: 'startbuttonupdate',
            data: 'Start Scan(S)',
            textColor: 'rgb(255,255,255)',
            backgroundColor: 'green',
            borderColor: 'black'
        });

        updates.push({
            type: 'stopbuttonupdate',
            data: 'Stop Scan(S)',
            textColor: 'rgb(0,0,0)',
            backgroundColor: 'red',
            borderColor: 'black'
        });

        updates.push({
            type: 'alarmgridupdate'
        });

        updates.push({
            type: 'alarmhistorygridupdate'
        });

        updates.push({
            type: 'iodataupdate'
        });

        updates.push({
            type: 'usersetupupdate'
        })

        const min = 0;
        const max = updates.length;

        interval(3000).pipe(map(() => {
            const type = Math.floor(Math.random() * (max - min)) + min;
            clientService.sendMessage(updates[type]);
        })).subscribe();
    }


}