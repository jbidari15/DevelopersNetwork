const express = require("express");
const app = express();
const mongoose = require("mongoose");

//process.env.PORT for using the remote port when hosted
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello there again");
});

//getting the MongoDB URI from mLab and connecting with mongoose
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));
