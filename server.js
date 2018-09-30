const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");

const app = express();

//process.env.PORT for using the remote port when hosted
const port = process.env.PORT || 5000;

//using the body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello there again");
});

//getting the MongoDB URI from mLab and connecting with mongoose
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

app.listen(port, () => console.log(`Server is running on port ${port}`));
