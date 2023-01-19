import Image from "../entities/Image";

export const getImages = async (
	keyword: string,
	urls: string[],
): Promise<Image> => {
	let image = new Image();
	image.keyword = keyword;
	image.matches = urls;
	console.log(image);

	return image;
};
