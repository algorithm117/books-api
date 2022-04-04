require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URL = `mongodb+srv://algorithm117:${process.env.MONGO_DB_PASSWORD}@books.tattt.mongodb.net/booksapi?retryWrites=true&w=majority`;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready');
});

mongoose.connection.on('error', (err) => {
  console.log(
    `There was an error connection to MongoDB: ${err}`
  );
});

async function mongoConnect() {
  // we want to be able to access all the data from the database before we start listening for requests in our server's startServer function.
  mongoose.connect(MONGO_URL, {
    // determines how mongoose will parse the connection string
    useNewUrlParser: true,
    // mongoose will use the updated way of talking to clusters of mongo databases using the unified topology approach.
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
