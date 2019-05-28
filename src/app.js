require("dotenv").config();
// IF USING API KEY
// const bearer = require('../middleware/bearer')
const express = require("express");
const errorCatch = require("../middleware/error");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("../middleware/logger").logger;
const { PORT, NODE_ENV } = require("./config");
const winston = require("winston");
// routes
// const example = require('../routes/api/example')

const app = express();

// MIDDLEWARE
const morganOption = NODE_ENV === "production" ? "tiny" : "dev";
if (NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}
// if using bearer authorization
// app.use(bearer)

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello boilerplate");
});

app.use(errorCatch);

module.exports = app;
