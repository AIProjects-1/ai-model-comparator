require("dotenv").config();
const OpenAI = require("openai");


const openai = new OpenAI({
    baseURL: process.env.BASE_URL,
    apiKey: process.env.apiKEY,
});
module.exports = openai;