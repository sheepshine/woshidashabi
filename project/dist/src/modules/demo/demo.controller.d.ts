import { DemoService } from "./demo.service";
export declare class DemoController {
    private readonly demoService;
    constructor(demoService: DemoService);
    fetch({ id }: {
        id: any;
    }, token: any): string;
}
