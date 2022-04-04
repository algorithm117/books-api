const {
  getAllBooks,
  getBook,
  addNewBook,
  updateBook,
  deleteBook,
} = require('../../models/books_model');

const {
  getPagination,
} = require('../../services/query');

async function httpGetAllBooks(req, res) {
  const { skip, limit } = getPagination(
    req.query
  );

  const response = await getAllBooks(skip, limit);

  const data = await res.json(response);

  return data;
}

async function httpGetBook(req, res) {
  const { id: bookId } = req.params;
  try {
    const response = await getBook(bookId);

    const data = res.json(response);

    return data;
  } catch (err) {
    res.status(400).json({
      error: `There was an error retrieving the book with the specificed id: ${bookId}. Make sure you are passing a value that can be parsed as a number.`,
    });
  }
}

async function httpAddNewBook(req, res) {
  try {
    await addNewBook(req.body);

    res.status(201).json({
      success:
        'Book has been successfully added to database.',
    });
  } catch (err) {
    res.status(400).json({
      error: `There was an error with your request. Please make sure you provided all the correct fields in the body of your request for posting a new book.`,
    });
  }
}

async function httpUpdateBook(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      throw new Error();
    }

    await updateBook(id, req.body);

    res.status(200).json({
      success: `The book with id: ${id} was successfully updated in the database.`,
    });
  } catch (err) {
    res.status(400).json({
      error: `There was an error with your request. Please make sure you provided an existing book id & you provided all the correct fields in the body of request.`,
    });
  }
}

async function httpDeleteBook(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      throw new Error();
    }

    await deleteBook(id);

    res.status(200).json({
      success: `The book with id: ${id} was deleted in the database.`,
    });
  } catch (err) {
    res.status(400).json({
      error: `Error deleting book. Please make sure you provided a valid and existing book id.`,
    });
  }
}

module.exports = {
  httpGetAllBooks,
  httpGetBook,
  httpAddNewBook,
  httpUpdateBook,
  httpDeleteBook,
};
