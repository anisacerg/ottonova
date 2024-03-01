const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/cities', (req, res) => {
  const citiesData = JSON.parse(fs.readFileSync('cities.json'));
  res.json(citiesData);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
