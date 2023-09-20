function findAccountById(accounts = [], id) {
  return accounts.find((acct) => acct.id === id);
}

function sortAccountsByLastName(accounts = []) {
  return accounts.sort((nameA, nameB) =>
    nameA["name"]["last"].toLowerCase() > nameB["name"]["last"].toLowerCase()
      ? 1
      : -1
  );
}

function getTotalNumberOfBorrows(account = {}, books = []) {
  let totalBorrows = 0;
  books.forEach((book) => {
    // console.log(book.borrows);
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) totalBorrows++;
    });
  });
  return totalBorrows;
}

function getBooksPossessedByAccount(account = {}, books = [], authors = []) {
  //loop through books array to find books still borrowed whose author matches authors in the author array
  let foundBooks = books.filter(
    (book) =>
      book.borrows[0].returned === false && book.borrows[0].id === account.id
  );

  //loop through the found books array and find the matching author for each book and add a new author key whose value is the matching author's object
  foundBooks.forEach((book) => {
    const foundAuthor = authors.find((author) => book.authorId === author.id);
    book.author = foundAuthor;
  });
  return foundBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
