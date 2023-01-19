import vision from "@google-cloud/vision";

const isLabelsMatchesImagesDescription = (
	labels: string[],
	descritpionImage: any,
) => labels.every((elem) => descritpionImage.includes(elem.toLowerCase()));

const getMatchedLabels = (results: any, labels: string[], url: string) => {
	const descritpionImage = results[0].labelAnnotations.map((label: any) =>
		label.description.toLowerCase(),
	);

	if (isLabelsMatchesImagesDescription(labels, descritpionImage)) {
		console.log("found ", url);
		return { image_url: url, labels: descritpionImage };
	}
	return;
};

export const getGoogleVisionLabels = async (
	labels: string[],
	urls: string[],
): Promise<string[]> => {
	const client = new vision.ImageAnnotatorClient({
		keyFilename: "./ramdam-test-technique-375010-811bff750e21.json",
	});

	const matchesPromises = urls.map(async (url) => {
		return await client
			.labelDetection(url)
			.then((results) => {
				return getMatchedLabels(results, labels, url);
			})
			.catch((err) => {
				console.log("error = ", err);
				return err;
			});
	});
	const matches = await Promise.all(matchesPromises);

	return matches.filter(Boolean);
};
