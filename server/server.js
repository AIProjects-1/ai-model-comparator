
const express = require('express');
const cors = require('cors');
const getGemini = require('./routes/GetGemini');
const getDeepseek = require('./routes/GetDeepseek');
const config = require('./config');

const app = express();
app.use(express.json());
const PORT = 3000;
app.use(cors());

app.use('/gemini', getGemini);
app.use('/deepseek', getDeepseek);

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});