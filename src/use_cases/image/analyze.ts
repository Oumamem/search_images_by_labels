import { ImageRepository } from "../../respositories";

interface AnalyzeParams {
	keyword: string;
	labels: string[];
}
const imageRepository = new ImageRepository();

export default async function analyze(params: AnalyzeParams) {
	const { keyword, labels } = params;
	return imageRepository.analyze(keyword, labels);
}
