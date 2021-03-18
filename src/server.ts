import "reflect-metadata";

import express from "express";
import router from "./routes";
import "./database/index";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333);
