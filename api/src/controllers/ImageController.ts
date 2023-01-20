import { Request, Response } from "express";
import analyze from "../use_cases/image/analyze";

export class ImageController {
	public analyzeImages = async (req: Request, res: Response) => {
		const keyword: string = req.body.keyword;
		const labels: string[] = req.body.labels;

		if (!labels) {
			return res.status(401).json("labels should be defined");
		}

		if (!keyword) {
			return res.status(401).json("keyword should be defined");
		}

		if (keyword.length < 1) {
			return res.status(401).json("Keyword should not be empty");
		}

		if (labels.length < 1) {
			return res.status(401).json("Labels should not be empty");
		}

		analyze(req.body)
			.then((images) => {
				res.status(200).json(images);
			})
			.catch((err) => {
				res.status(404);
			});

		return res;
	};
}
