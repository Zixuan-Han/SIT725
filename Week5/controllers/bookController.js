const bookService = require('../services/bookService');

exports.getAllBooks = (req, res) => {
  const items = bookService.getAllBooks();
  res.json({
    status: 200,
    data: items,
    message: 'Book list retrieved using service'
  });
};