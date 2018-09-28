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
        
        app.route('/start-pallet-scan')
        .get((req: Request, res: Response) => {
            console.log(`start sent by ${req.query.userId}`);
            res.status(200).send(true);
        });

        app.route('/stop-pallet-scan')
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

        app.route('/screen-data')
        .get((req: Request, res: Response) => {
            const dataService = new DataService();
            const data = dataService.getData(req.query.screen);
            console.log(`get-screen-data screen: ${req.query.screen}`);
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


        

    }
}