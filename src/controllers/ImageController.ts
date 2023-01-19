import { Request, Response } from "express";
import analyze from "../use_cases/image/analyze";

export class ImageController {
	public analyzeImages = async (req: Request, res: Response) => {
		const keyword: string = req.body.keyword;
		const labels: string[] = req.body.labels;
		if (keyword.length < 1)
			return res.status(401).json("Keyword should not be empty");

		analyze(req.body)
			.then((images) => {
				return res.status(200).json(images);
			})
			.catch((err) => {
				res.status(404);
			});
	};
}
