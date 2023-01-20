import { expect, test } from "@jest/globals";
import { getUnsplashUrls } from "../../utilities/getUnsplashUrls";

describe("testing getImage service", () => {
	test("an error should result in empty keyword", () => {
		expect(getUnsplashUrls("dog")).toThrow(Error);
	});
});
