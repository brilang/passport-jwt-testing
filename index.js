// index.js
/**
 * External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Config
 */

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.status(200).send("<p>Testing Passport & JWT</p>");
});

/**
 * Start Server
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
