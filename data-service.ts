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

    getCaseData(): Case[] {
        const status = Math.floor(Math.random() * (2 - 0)) + 0;
        const data = fs.readFileSync('data/case-data.json', 'utf8');
        let obj = [];
        if (data) {
            obj = JSON.parse(data) as Case[];
        }

        obj.unshift({ 
            barcode: {
                data: Math.floor(Math.random() * (500000 - 30000)) + 0,
                backgroundColor: "rgb(0,0,0)",
                textColor: "rgb(255,255,255)"
            },
            status: {
                data: ["Good", "Failed"][status],
                backgroundColor: "rgb(255,34,56)",
                textColor: "rgb(0,0,0)"
            },
            loadId: { 
                data: Math.floor(Math.random() * (10000 - 3000)) + 0,
                backgroundColor: "rgb(25,15,255)",
                textColor: "rgb(255,255,255)"
            },
            palletStatus: { 
                data: ["Good", "Failed"][status],
                backgroundColor: "rgb(65,24,45)",
                textColor: "rgb(0,0,0)"
            },
            palletId: {
                data: Math.floor(Math.random() * (5000 - 1500)) + 0,
                backgroundColor: "rgb(255,255,255)",
                textColor: "rgb(0,0,0)"
            },
            user: {
                data: "juan",
                backgroundColor: "rgb(255,255,255)",
                textColor: "rgb(0,0,0)"
            },
            manualWrap: {
                data: "juan",
                backgroundColor: "rgb(255,255,255)",
                textColor: "rgb(0,0,0)"
            }
         });
         fs.writeFileSync('data/case-data.json', JSON.stringify(obj), 'utf8');
        return obj;
    }

    getAlarmData(): Alarm[] {
        let data = fs.readFileSync('data/alarm-data.json', 'utf8');
        let obj = [];
        if (data) {
            obj = JSON.parse(data) as Alarm[];
        }
        obj.unshift({
            unit: {
                data: 'Scanner',
                backgroundColor: 'rgb(34,54,155)',
                textColor: 'rgb(255,255,255)'
            },
            alarm: {
                data: 'Failed to Trigger',
                backgroundColor: 'rgb(34,54,155)',
                textColor: 'rgb(255,255,255)'
            },
            timestamp: {
                data: new Date().toLocaleString(),
                backgroundColor: 'rgb(34,54,155)',
                textColor: 'rgb(255,255,255)'
            }

        });

        fs.writeFileSync('data/alarm-data.json', JSON.stringify(obj), 'utf8');
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
        users.push({ user: "JSmith", allowwrapenable: true, admin: true });
        users.push({ user: "MSmith", allowwrapenable: false, admin: false });
        users.push({ user: "LSmith", allowwrapenable: true, admin: false });
        users.push({ user: "RSmith", allowwrapenable: false, admin: false });
        users.push({ user: "SSmith", allowwrapenable: true, admin: false });
        return users;
    }


}