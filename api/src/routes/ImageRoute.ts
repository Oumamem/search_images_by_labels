import express, { Request, Response } from "express";
import { ImageController } from "../controllers/ImageController";

const router = express.Router();
const imageController = new ImageController();

router.post("/", async (req: Request, res: Response) => {
	return imageController.analyzeImages(req, res);
});
export default router;
