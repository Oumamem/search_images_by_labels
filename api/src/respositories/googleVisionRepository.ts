import vision from "@google-cloud/vision";

export function googleVisionRepository() {
	return new vision.ImageAnnotatorClient({
		keyFilename: process.env.GOOGLE_VISION_KEYS,
	});
}
