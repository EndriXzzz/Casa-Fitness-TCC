/// <reference types="multer" />
export declare class AppController {
    constructor();
    getHello(): Promise<string>;
    process(req: any): Promise<any>;
    uploadFile(file: Express.Multer.File): void;
}
