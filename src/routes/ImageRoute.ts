import express, { Request, Response } from "express";
import { ImageController } from "../controllers/ImageController";

const router = express.Router();
const imageController = new ImageController();
console.log("here");

router.post("/", async (req: Request, res: Response) => {
	return imageController.analyzeImages(req, res);
});
export default router;
