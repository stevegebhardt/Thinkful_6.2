function findAuthorById(authors = [], id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books = [], id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books = []) {
  let tally = [];

  //filter for books at large
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);

  //filter for returned books
  let returnedBooks = books.filter((book) => book.borrows[0].returned);

  //add arrays to tally
  tally.push(borrowedBooks);
  tally.push(returnedBooks);

  return tally;
}

function getBorrowersForBook(book = {}, accounts = []) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
