const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const booksCollection = require('./books_mongo');

function loadBooksData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(
        __dirname,
        '..',
        '..',
        'data',
        'books.csv'
      )
    )
      .pipe(
        parse({
          columns: true,
          relax_quotes: true,
          skip_records_with_error: true,
        })
      )
      .on('data', async (data) => {
        await saveBook(data);
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', async () => {
        console.log(
          `Books have been loaded to database.`
        );
        resolve();
      });
  });
}

async function getAllBooks(skip, limit) {
  const response = await booksCollection
    .find({}, { _id: 0, __v: 0 })
    // positive 1 means sort by flight number in ascending order, and -1 means to sort by flight number in descending order.
    .sort({ bookID: 1 })
    .skip(skip)
    .limit(limit);

  return response;
}

async function getBook(id) {
  try {
    const bookId = Math.abs(id);

    const response =
      await booksCollection.findOne(
        {
          bookID: bookId,
        },
        {
          _id: 0,
          __v: 0,
        }
      );

    if (!response) {
      throw new Error(
        `There was an error retrieving the book with book id: ${bookId}`
      );
    }

    return response;
  } catch (err) {
    throw err;
  }
}

async function addNewBook(requestBody) {
  const validPostRequest =
    validateRequestBody(requestBody);

  if (!validPostRequest) {
    throw new Error();
  }

  let latestBookId = Number(
    await getLatestBookId()
  );

  const book = {
    bookID: ++latestBookId,
    ...requestBody,
  };

  await saveBook(book);
}

async function updateBook(id, requestBody) {
  try {
    const bookId = Number(id);

    const book = await checkBookExists(bookId);

    if (!book) {
      throw new Error(
        `Book with id: ${bookId} does not exist.`
      );
    }

    const updatedBook = Object.assign({
      authors: book.authors,
      average_rating: book.average_rating,
      isbn: book.isbn,
      isbn13: book.isbn13,
      language_code: book.language_code,
      num_pages: book.num_pages,
      publication_date: book.publication_date,
      publisher: book.publisher,
      ratings_count: book.ratings_count,
      text_reviews_count: book.text_reviews_count,
      title: book.title,
      bookId: bookId,
      ...requestBody,
    });

    await booksCollection.updateOne(
      {
        bookID: bookId,
      },
      updatedBook
    );
  } catch (err) {
    throw err;
  }
}

async function deleteBook(id) {
  try {
    const bookId = Number(id);

    const book = await checkBookExists(bookId);

    if (!book) {
      throw new Error(
        `Book with id: ${bookId} does not exist.`
      );
    }

    await booksCollection.deleteOne({
      bookID: bookId,
    });
  } catch (err) {
    throw err;
  }
}

async function checkBookExists(bookId) {
  return await booksCollection.findOne(
    {
      bookID: bookId,
    },
    {
      _id: 0,
      __v: 0,
    }
  );
}

function validateRequestBody(requestBody) {
  const {
    average_rating,
    isbn,
    isbn13,
    language_code,
    num_pages,
    publication_date,
    ratings_count,
    text_reviews_count,
  } = requestBody;

  if (checkIfFieldIsValidNumber(average_rating)) {
    return false;
  }

  const isbn10RegEx = /^\d*$/gm;
  const isbn13RegEx = /^\d*$/gm;

  if (
    !isbn10RegEx.test(isbn) ||
    !isbn13RegEx.test(isbn13)
  ) {
    return false;
  }

  const langCodeRegEx = /^[a-z]{3}$/g;

  if (!langCodeRegEx.test(language_code)) {
    return false;
  }

  if (checkIfFieldIsValidNumber(num_pages)) {
    return false;
  }

  const dateRegEx = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;

  if (!dateRegEx.test(publication_date)) {
    return false;
  }

  if (checkIfFieldIsValidNumber(ratings_count)) {
    return false;
  }

  if (
    checkIfFieldIsValidNumber(text_reviews_count)
  ) {
    return false;
  }

  return true;
}

function checkIfFieldIsValidNumber(field) {
  return (
    !Number.isFinite(Number(field)) ||
    Number(field) < 0
  );
}

async function getLatestBookId() {
  try {
    const response = await booksCollection
      .find({}, { _id: 0, __v: 0 })
      // positive 1 means sort by flight number in ascending order, and -1 means to sort by flight number in descending order.
      .sort({ bookID: -1 })
      .limit(1);

    return response[0].bookID;
  } catch (err) {
    console.log(
      `Could not retrieve latest bookID: ${err}`
    );
  }
}

async function saveBook(book) {
  try {
    await booksCollection.findOneAndUpdate(
      {
        bookID: book.bookID,
      },
      {
        ...book,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.log(`Could not save book: ${err}`);
  }
}

module.exports = {
  loadBooksData,
  getAllBooks,
  getBook,
  addNewBook,
  updateBook,
  deleteBook,
};
