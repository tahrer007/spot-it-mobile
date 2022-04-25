const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("hellow express !!!! ");
});

app.get("/help", (req, res) => {
  res.send("hellow express !!!! ");
});
app.listen(3000, () => {
  console.log("server is up on port 300.");
});
