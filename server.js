const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const PORT = 3000;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  console.log(firstname + " " + lastname + " " + email);
});


app.listen(PORT, () => console.log("SERVER IS RUNNING ON PORT " + PORT));