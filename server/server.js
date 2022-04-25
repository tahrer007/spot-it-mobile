const express = require("express");
const app = express();
const cors = require("cors");

//routers
const locationsRouter = require("./routers/locationsRouter");
const usersRouter = require("./routers/usersRouter");
const keysRouter = require("./routers/keysRouter");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/locations", locationsRouter);
app.use("/keys", keysRouter);

app.use("*", (req, res) => {
  res.send("this route is not exist");
});

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on Port: ${PORT}`);
});
