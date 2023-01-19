import Unsplash from "../respositories/unsplashRepository";

export const getUnsplashUrls = async (keyword: string): Promise<string[]> => {
	const unsplash = new Unsplash();
	const images = await unsplash.searchImages(keyword);
	let urls = [];
	for (let i = 0; i < images["response"]["results"].length; i++) {
		urls.push(images["response"]["results"][i].urls.raw); //use i instead of 0
	}

	return urls;
};
