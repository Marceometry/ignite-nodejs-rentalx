import express from "express";
import swaggerUI from "swagger-ui-express";
import { routes } from "./routes";
import swaggerSetUp from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSetUp));

app.use(routes);

app.listen(3333, () => console.log("Server is running!"));
