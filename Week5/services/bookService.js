const bookItems = [
    { id: 1, title: "Harry Potter and the Philosopher's Stone", author: 'J.K. Rowling'},
    { id: 2, title: "Harry Potter and the Chamber of Secrets", author: 'J.K. Rowling'},
    { id: 3, title: "Harry Potter and the Prisoner of Azkaban", author: 'J.K. Rowling'}
];
  
const getAllBooks = () => {
    return bookItems;
};
  
module.exports = {
    getAllBooks
};