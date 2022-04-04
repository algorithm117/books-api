const http = require('http');
const app = require('./app');
const {
  loadBooksData,
} = require('./models/books_model');
const {
  mongoConnect,
} = require('./services/mongo');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  // await loadBooksData();

  server.listen(PORT, () => {
    console.log(
      `Server is listening on port ${PORT}`
    );
  });
}

startServer();
