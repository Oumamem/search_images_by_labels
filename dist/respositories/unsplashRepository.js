import { createApi } from "unsplash-js";
import crossFetch from "cross-fetch";
export default class UnsplashRepository {
    constructor() {
        const unsplash = createApi({
            accessKey: process.env.ACCESS_KEY,
            fetch: crossFetch,
        });
        this.unsplash = unsplash;
    }
    searchImages(keyword) {
        return this.unsplash.search.getPhotos({
            query: keyword,
        });
    }
}
//# sourceMappingURL=unsplashRepository.js.map