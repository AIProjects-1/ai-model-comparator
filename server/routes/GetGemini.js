const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    res.json({ response });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});


router.post("/deepseek", async (req, res) => {
    try {
        const { query } = req.body;
        if (!query) return res.status(400).json({ message: "Query is required" });
        const completion = await openai.chat.completions.create({
            model: "deepseek/deepseek-r1:free", 
            messages: [
                {
                    role: "user",
                    content: query
                }
            ]
        });
        const response = completion.choices[0].message.content;
        res.json({ response });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: "Failed to generate content" });
    }
});

module.exports = router;