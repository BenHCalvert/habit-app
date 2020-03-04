const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const colors = require("colors");
const session = require("express-session");
const passport = require("passport");
// const logger = require("morgan");
// const flash = require('connect-flash');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logger("dev"));
// app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add api routes

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/habitlist");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
