//Import modules
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const dogRoutes = require("./routes/dog.routes");
const db = require("./utils/db.util");

// Define PORT for HTTP Server
const PORT = 9900;

// Initialize Express
const app = express();

app.use(express.json());
app.use(dogRoutes);

(async () => {
  await db.init();

  app.listen(PORT, (err) => {
    console.log(`Server is up at localhost ${PORT}`);
  });
})();
