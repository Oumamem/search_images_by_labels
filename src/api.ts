import "dotenv/config";
import express from "express";
import cors from "cors";
import ImageRoute from "./routes/ImageRoute";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

const app = express();
const port = process.env.PORT;

//swagger definition
let swaggerFile: any = process.cwd() + "/swagger.json";
let swaggerData: any = fs.readFileSync(swaggerFile, "utf8");

let swaggerDocument = JSON.parse(swaggerData);

app.use(
	"/api/docs",
	swaggerUi.serve,
	swaggerUi.setup(swaggerDocument, null, null),
);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routes
app.use("/analyze", ImageRoute);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
	console.log(`http://localhost:${port}`);
});
