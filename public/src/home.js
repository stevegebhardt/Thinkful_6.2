function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length;
}

const theTopFive = (array) => array.slice(0, 5);

function getMostCommonGenres(books = []) {
  let result = [];
  const genres = books.map((book) => book.genre);
  for (let genre of genres) {
    !result.some((element) => element.name === genre)
      ? result.push({ name: genre, count: 1 })
      : result.map((element) => {
          if (element.name === genre) {
            element.count++;
          }
        });
  }
  return theTopFive(result.sort((a, b) => b.count - a.count));
}

function getMostPopularBooks(books = []) {
  let mostPopular = [];

  //arrange books by number of borrows
  books
    .sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
    .forEach((book) =>
      mostPopular.push({ name: book.title, count: book.borrows.length })
    );

  return theTopFive(mostPopular);
}

function getMostPopularAuthors(books = [], authors = []) {
  const topFive = [];
  books
    .sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
    .forEach((book) => {
      topFive.push({
        name: book.authorId,
        count: book.borrows.length,
      });
    });
  let result = topFive;
  result.forEach((index) => {
    const newName = authors.find((author) => author.id === index.name);
    index.name = `${newName.name.first} ${newName.name.last}`;
  });
  return theTopFive(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
