// mongoURI is created by mLab after creating a database
const db = {
  mongoURI: process.env.MONGO_URI,
  secret: process.env.SECRET
};
module.exports = db;
