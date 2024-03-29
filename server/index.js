const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static(path.join(__dirname, "../Express-App-LNB/build")));
app.use(express.static("public"));


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "../Express-App-LNB/build/index.html"));
});

// start express server on port 5000
app.listen(5001, () => {
  console.log("server started on port 5001");
});
