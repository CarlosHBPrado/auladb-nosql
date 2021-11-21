const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Importar Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Nós estamos na home");
});

//Conectar com o servidor
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("conectado ao BD")
);

//Ouvir o servidor
app.listen(3000);
