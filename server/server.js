const express = require('express');
const cors = require('cors');
const getGemini = require('./routes/GetGemini');
const getDeepseek = require('./routes/GetDeepseek');
const config = require('./config');

const app = express();
app.use(express.json());
const PORT = 3000;
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/gemini', getGemini);
app.use('/deepseek', getDeepseek);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
