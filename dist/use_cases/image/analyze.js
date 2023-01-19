import { ImageRepository } from "../../respositories";
const imageRepository = new ImageRepository();
export default async function analyze(params) {
    const { keyword, labels } = params;
    imageRepository.analyze(keyword, labels);
}
//# sourceMappingURL=analyze.js.map