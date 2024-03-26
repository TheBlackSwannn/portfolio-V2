import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();

const router = Router();
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/test", (req, res) => res.send("TEEEEST!"));

app.use("/", router);

export const handler = serverless(app);