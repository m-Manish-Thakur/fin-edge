const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const logger = require("./middleware/logger.middleware");
const errorHandler = require("./middleware/error.middleware");
const { env } = require("./config/env");

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Custom Middlewares
app.use(logger);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Server is running on PORT ${env.PORT}`,
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

app.use(errorHandler); // Global Error Handler

module.exports = app;
