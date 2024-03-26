import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();

const router = Router();
router.get("/", (req, res) => res.send("Hello World!"));

app.use("/", router);

export const handler = serverless(app);