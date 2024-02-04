import * as dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI();

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dream", async (req, res) => {
    const { prompt } = req.body;

    const image = await openai.images.generate({ model: "dall-e-2", prompt: prompt });

    res.send({ image });
});

app.listen(8080, () => console.log("make art on http://localhost:8080/dream"));
