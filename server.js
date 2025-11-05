const express = require("express");
const app = express();
const port=3000

app.get("/", (req, res) => {
  res.send("Hello Geeks");
});

app.get("/new", (req, res) => {
  res.send("welcome to new page");
});

// Default route (404 handler)
app.use((req, res) => {
  res.status(404).send("PAGE NOT FOUND");
});

// Server setup
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});