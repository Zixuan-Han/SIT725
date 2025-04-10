const express = require('express');
const app = express();
const PORT = 3000;

const bookRoutes = require('./routes/book');

app.use('/api/book', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Lending Center !');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});