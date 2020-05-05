const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from CPAT!");
});

module.exports.app = app;
