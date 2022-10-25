import dotenv from "dotenv";
import express from "express";

import databaseConnection from "./db/connection.js";
import router from "./router.js";
import config from "./config.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middlewares
config(app);

// Routes
router(app);

// Error handlers
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//Run server
app.listen(PORT, () => {
  databaseConnection();
  console.log("\x1B[33mListening...");
});
