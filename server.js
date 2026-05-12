const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// generate endpoint
app.post("/api/generate", async (req, res) => {
  try {
    const { inputs, parameters } = req.body;

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${parameters.model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs,
          parameters: { width: parameters.width, height: parameters.height },
          options: { wait_for_model: true },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return res.status(500).json({ error: error.error || "Hiba az API-nál" });
    }

    const buffer = await response.arrayBuffer();
    res.set("Content-Type", "image/png");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
