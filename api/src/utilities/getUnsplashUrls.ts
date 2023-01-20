import { UnsplashRepository } from "../respositories";
import { ImageUnsplash } from "../entities";

export const getUnsplashUrls = async (keyword: string): Promise<string[]> => {
	const unsplash = new UnsplashRepository();
	const images = await unsplash.searchImages(keyword);

	if (images["response"]) {
		return images["response"]["results"].map(
			(image: ImageUnsplash) => image.urls.raw,
		);
	}
};
