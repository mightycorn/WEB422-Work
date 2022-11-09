const express = require("express");
const cors = require("cors");
const dataService = require("./data-service.js");
const userService = require("./user-service.js");
const app = express();

app.use(cors());
app.use(express.json());

const HTTP_PORT = process.env.PORT || 8080;

app.get("/api/vehicles", (req, res) => {
  dataService
    .getAllVehicles()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).end();
    });
});

app.post("/api/register", (req, res) => {
  userService
    .registerUser(req.body)
    .then((msg) => {
      res.json({ message: msg });
    })
    .catch((msg) => {
      res.status(422).json({ message: msg });
    });
});

app.post("/api/login", (req, res) => {
  userService
    .checkUser(req.body)
    .then((user) => {
      res.json({ message: "login successful" });
    })
    .catch((msg) => {
      res.status(422).json({ message: msg });
    });
});

app.use((req, res) => {
  res.status(404).end();
});

userService
  .connect()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log("API listening on: " + HTTP_PORT);
    });
  })
  .catch((err) => {
    console.log("unable to start the server: " + err);
    process.exit();
  });
