const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const requestRouts = require("./routs/request")

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


  app.use("/api", requestRouts);














module.exports = app;