import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllUser(res: any): Promise<void>;
    getUser(res: any, id: any): Promise<void>;
}
