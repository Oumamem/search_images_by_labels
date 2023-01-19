import { Request, Response } from "express";
export declare class ImageController {
    analyzeImages: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
