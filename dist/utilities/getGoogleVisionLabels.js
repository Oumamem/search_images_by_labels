import vision from "@google-cloud/vision";
export const getGoogleVisionLabels = async (labels, urls) => {
    const client = new vision.ImageAnnotatorClient({
        keyFilename: "./ramdam-test-technique-375010-811bff750e21.json",
    });
    let response = [];
    const matchesPromises = await urls.map(async (url) => {
        return new Promise((resolve, reject) => {
            client
                .labelDetection(url)
                .then((results) => {
                const description = results[0].labelAnnotations.map((label) => label.description.toLowerCase());
                if (labels.every((elem) => description.includes(elem.toLowerCase()))) {
                    resolve({ image_url: url, labels: description });
                }
                reject();
            })
                .catch((err) => {
                console.log("error = ", err);
                reject(err);
            });
        });
    });
    const matches = await Promise.all(matchesPromises);
    //.filter(Boolean);
    console.log("mmmmmmm", matches);
    return [];
};
//# sourceMappingURL=getGoogleVisionLabels.js.map