// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.HF_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            }
        );

        const buffer = await response.arrayBuffer();
        res.set("Content-Type", "image/png");
        res.send(Buffer.from(buffer));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Server running on 3000"));
