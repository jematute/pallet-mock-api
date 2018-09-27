import * as fs from 'fs';
import { Case } from './case';
import { Screens } from './screens';
import { Alarm } from './alarm';
import { IOData } from './io-data';
import { User } from './user';

export class DataService {
    currentScreen = "";
    constructor() {

    }

    getData(screenType: Screens) {
        switch(screenType) {
            case Screens.HOME:
            case Screens.CASE_HISTORY:
                return this.getCaseData();
            case Screens.ALARM_HISTORY:
                return this.getAlarmData();
            case Screens.IO_MONITOR:
                return this.getIOData();
            case Screens.USER_SETUP:
                return this.getUsers();
        }
    }

    getCaseData() {
        let obj = JSON.parse(fs.readFileSync('data/case-data.json', 'utf8')) as Case[];
        obj.unshift({ 
            barcode: Math.floor(Math.random() * (500000 - 30000)) + 0,
            status: "Good",
            loadId: Math.floor(Math.random() * (10000 - 3000)) + 0,
            palletStatus: "good",
            palletId: Math.floor(Math.random() * (5000 - 1500)) + 0,
            user: "juan",
            manualWrap: "juan"
         });
         fs.writeFileSync('data/case-data.json', JSON.stringify(obj), 'utf8');
        return obj;
    }

    getAlarmData() {
        let obj = JSON.parse(fs.readFileSync('data/alarm-data.json', 'utf8')) as Alarm[];
        return obj;
    }

    getIOData() {
        const ioData: IOData = { 
            wrapperReady: false,
            turnTableRotating: false,
            turnTableHomeProx: true,
            eStopActive: true,
            rotateCommand: true,
            disableWrapping: true,
            wrapStart: true,
            redBeacon: true,
            greanBeacon: false
        }
        return ioData;
    }

    getUsers() {
        const users: User[] = [];
        users.push({ user: "JSmith", allowWrapEnable: true, admin: true });
        users.push({ user: "MSmith", allowWrapEnable: false, admin: false });
        users.push({ user: "LSmith", allowWrapEnable: true, admin: false });
        users.push({ user: "RSmith", allowWrapEnable: false, admin: false });
        users.push({ user: "SSmith", allowWrapEnable: true, admin: false });
        return users;
    }


}