const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./dataBase/mongoose");

//to handle incoming cody json
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const app = express();
app.use(cors());
//web socket
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//routers
const locationsRouter = require("./routers/locationsRouter");
const usersRouter = require("./routers/usersRouter");
const keysRouter = require("./routers/keysRouter");
const authRouter = require("./routers/authRouter");

const PORT = process.env.PORT || 5000;

app.get("/chat", requireAuth, (req, res) => {
  res.send(`your email ${res.user.email}`);
});

app.use(authRouter);
app.use("/users", usersRouter);
app.use("/locations", locationsRouter);
app.use("/keys", keysRouter);

app.use("*", (req, res) => {
  res.send("this route is not exist");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on Port: ${PORT}`);
});
