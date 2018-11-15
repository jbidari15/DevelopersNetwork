const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");
const passport = require("passport");
const path = require("path");

const app = express();

//process.env.PORT for using the remote port when hosted
const port = process.env.PORT || 5000;

//using the body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//getting the MongoDB URI from mLab and connecting to MongoDB .
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//use passport middleware
app.use(passport.initialize());

//configure passport
require("./config/passport")(passport);

app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
