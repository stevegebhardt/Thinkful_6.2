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

const getTopTen = (array) => array.slice(0, 10);

function getBorrowersForBook(book = {}, accounts = []) {
  const { borrows } = book;

  const borrowedBy = borrows.map(({ id, returned }) => {
    const account = accounts.find((account) => (account = account.id === id));
    return { ...account, returned };
  });
  return getTopTen(borrowedBy);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
