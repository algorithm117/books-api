const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  bookID: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  average_rating: {
    type: Number,
    required: true,
  },
  isbn: { type: String, required: true },
  isbn13: { type: String, required: false },
  language_code: { type: String, required: true },
  num_pages: { type: Number, required: true },
  ratings_count: { type: Number, required: true },
  text_reviews_count: {
    type: Number,
    required: false,
  },
  publication_date: {
    type: String,
    required: true,
  },
  publisher: { type: String, required: true },
});

module.exports = mongoose.model(
  'Book',
  booksSchema
);
