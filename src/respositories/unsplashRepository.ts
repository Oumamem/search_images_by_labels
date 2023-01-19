import { createApi } from "unsplash-js";
import crossFetch from "cross-fetch";

export default class UnsplashRepository {
	protected unsplash: any;

	constructor() {
		const unsplash = createApi({
			accessKey: process.env.ACCESS_KEY,
			fetch: crossFetch,
		});
		this.unsplash = unsplash;
	}

	public searchImages(keyword: string): this {
		return this.unsplash.search.getPhotos({
			query: keyword,
		});
	}
}
