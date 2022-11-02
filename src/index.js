const express = require("express");

require("dotenv").config();

const ListArticlesController = require("./controllers/ListArticlesController");

const app = express();

app.get("/articles", ListArticlesController.handle);

app.listen(3333, () => console.log("Server is running on port 3333"));