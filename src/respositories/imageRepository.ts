import { getUnsplashUrls } from "../utilities/getUnsplashUrls";
import { getGoogleVisionLabels } from "../utilities/getGoogleVisionLabels";
import { getImages } from "../utilities/getImages";
import Image from "../entities/Image";
export class ImageRepository {
	public async analyze(keyword: string, labels: string[]): Promise<Image> {
		const urls = await getUnsplashUrls(keyword);
		const urlsResponse = await getGoogleVisionLabels(labels, urls);
		const images = await getImages(keyword, urlsResponse);
		//		return urlsResponse;
		return images;
	}
}
