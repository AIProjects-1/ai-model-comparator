const express = require('express');
const cors = require('cors');
const getGemini = require('./routes/GetGemini');
const getDeepseek = require('./routes/GetDeepseek');
const config = require('./config');

const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gemini', getGemini);
app.use('/api/deepseek', getDeepseek);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";

// const gen = async () => {
//   const result = await model.generateContent(prompt);
//   console.log(result.response.text());
// };

// gen();