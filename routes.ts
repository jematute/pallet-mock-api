import {Request, Response} from "express";
import { DataService } from "./data-service";
import { ClientSettings  } from './client-settings';

export class Routes {
    clientSettings = ClientSettings.getInstance();
    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!!'
            })
        });
        
        app.route('/startscan')
        .get((req: Request, res: Response) => {
            console.log(`start sent by ${req.query.userId}`);
            res.status(200).send(true);
        });

        app.route('/stopscan')
        .get((req: Request, res: Response) => {
            console.log(`stop sent by ${req.query.userId}`);
            res.status(200).send(true);
        });

        app.route('/change-screen')
        .get((req: Request, res: Response) => {
            console.log(`screen changed to: ${req.query.screen}`);
            res.status(200).send(true);
        });

        app.route('/update-status')
        .get((req: Request, res: Response) => {
            this.clientSettings.currentScreen =  req.query.screen;
            console.log(`ui status - current-screen: ${req.query.screen}`);
            res.status(200).send(true);
        });

        app.route('/hmigetcasedata')
        .get((req: Request, res: Response) => {
            const dataService = new DataService();
            const data = dataService.getCaseData();
            res.status(200).send(JSON.stringify(data));
        });

        app.route('/hmigetalarmdata')
        .get((req: Request, res: Response) => {
            const dataService = new DataService();
            const data = dataService.getAlarmData();
            res.status(200).send(JSON.stringify(data));
        });

        app.route('/test')
        .get((req: Request, res: Response) => {
            this.clientSettings.userId = req.query.user;
            res.status(200).send(JSON.stringify(this.clientSettings));
        });

        app.route('/eventuserlogin')
        .get((req: Request, res: Response) => {
            console.log(req.query);
        });


        app.route('/getlogindata')
        .get((req: Request, res: Response) => {      
            res.status(200).send(JSON.stringify({ data: "fromtheserver", textColor: "green", backgroundColor: "white" }));
        });

        app.route('/casetableshowgoodcases')
        .get((req: Request, res: Response) => {      
            res.status(200).send();
        });

        app.route('/casetableshowerrorcases')
        .get((req: Request, res: Response) => {     
            res.status(200).send();
        });

        app.route('/eventwrapenable')
        .get((req: Request, res: Response) => {     
            res.status(200).send();
        });

        app.route('/eventwrapenable')
        .get((req: Request, res: Response) => {     
            res.status(200).send();
        });

        app.route('/hmigetiodata')
        .get((req: Request, res: Response) => {
            res.status(200).send(JSON.stringify(
            {
                "wrapperReady": "rgb(255,0,0)",
                "turnTableRotating": "rgb(255,0,0)",
                "turnTableHomeProx": "rgb(255,0,0)",
                "eStopActive": "rgb(255,0,0)",
                "rotateCommand": "rgb(255,0,0)",
                "disableWrapping": "rgb(255,0,0)",
                "wrapStart": "rgb(255,0,0)",
                "redBeacon": "rgb(255,0,0)",
                "greenBeacon": "rgb(255,0,0)"
            }))
        });

        app.route('/hmigetusersetupdata')
        .get((req: Request, res: Response) => {     
            const dataService = new DataService();
            const userData = dataService.getUsers();
            let obj;
            if (userData) {
                obj = JSON.stringify(userData);
            }
            res.status(200).send(obj);
        });

        app.route('/userupdateapply')
        .post((req: Request, res: Response) => {     
            console.log('called userupdateapply', req.body);
            res.status(200).send(true);
        });

        
        
    }
}