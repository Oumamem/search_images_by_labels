import express from "express";
import { ImageController } from "../controllers/ImageController";
const router = express.Router();
const imageController = new ImageController();
router.post("/analyze", async (req, res) => {
    return imageController.analyzeImages(req, res);
});
export default router;
//# sourceMappingURL=ImageRoute.js.map