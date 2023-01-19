import analyze from "../use_cases/image/analyze";
export class ImageController {
    constructor() {
        this.analyzeImages = async (req, res) => {
            const keyword = req.body.keyword;
            const labels = req.body.labels;
            if (keyword.length < 1)
                return res.status(401).json("Keyword should not be empty");
            analyze(req.body)
                .then((images) => {
                return res.status(200).json(images);
            })
                .catch((err) => {
                res.status(404);
            });
        };
    }
}
//# sourceMappingURL=ImageController.js.map