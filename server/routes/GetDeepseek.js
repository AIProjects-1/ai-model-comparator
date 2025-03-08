const express = require("express");
const router = express.Router();
const openai = require("../config");


router.post("/", async (req, res) => {
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