import { RequestParams } from "../../entities/Request";
import { ImageRepository } from "../../respositories";

const imageRepository = new ImageRepository();

export default async function analyze(params: RequestParams) {
	return imageRepository.analyze(params);
}
