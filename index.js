const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello from HOME");
}

function handleProfile(req, res) {
  res.send("Profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
