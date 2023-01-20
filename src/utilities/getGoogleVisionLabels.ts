import { googleVisionRepository } from "../respositories";
import { RequestParams, ImageGoogleVision } from "../entities";

const isLabelsMatchesImagesDescription = (
	labels: string[],
	descritpionImage: any,
) => labels.every((elem) => descritpionImage.includes(elem.toLowerCase()));

const getMatchedLabels = (results: any, labels: string[], url: string) => {
	const descritpionImage = results[0].labelAnnotations.map((label: any) =>
		label.description.toLowerCase(),
	);

	if (isLabelsMatchesImagesDescription(labels, descritpionImage)) {
		return { image_url: url, labels: descritpionImage };
	}
	return;
};

export const getGoogleVisionLabels = async (
	labels: RequestParams["labels"],
	urls: string[],
): Promise<ImageGoogleVision[]> => {
	const client = googleVisionRepository();

	const matchesPromises = urls.map(async (url) => {
		return await client
			.labelDetection(url)
			.then((results) => {
				return getMatchedLabels(results, labels, url);
			})
			.catch((err) => {
				console.log("error =>", err);
				return err;
			});
	});

	const matches = await Promise.all(matchesPromises);

	return matches.filter(Boolean);
};
