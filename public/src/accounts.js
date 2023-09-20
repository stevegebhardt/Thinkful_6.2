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

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
