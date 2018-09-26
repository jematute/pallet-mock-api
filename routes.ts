import {Request, Response} from "express";

export class Routes {       
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
    }
}