import { BehaviorSubject } from 'rxjs';
import { UpdateType } from './data/update-type';

export class ClientService {

    private static instance: ClientService;
    private constructor() {
        // do something construct...
    }

    onMessage = new BehaviorSubject<any>(null); 


    static getInstance() {
        if (!ClientService.instance) {
            ClientService.instance = new ClientService();
            // ... any one time initialization goes here ...
        }
        return ClientService.instance;
    }

    updateLogin(login: string) {
        this.onMessage.next({ type: UpdateType.LOGIN_BOX, data: login });
    }

    sendGenericMessage(type: UpdateType, message: any) {
        this.onMessage.next({ type: type, data: message });
    }

    sendMessage(message: any) {
        this.onMessage.next(message);
    }
    
}