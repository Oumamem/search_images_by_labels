import vision from "@google-cloud/vision";

export default class clientRepository {
	public client = new vision.ImageAnnotatorClient({
		keyFilename: "../../ramdam-test-technique-375010-811bff750e21.json",
	});
}
