const express = require("./config/express");
mongoose = require("mongoose");

//require("./dataBase/mongoose");
//cron = require("node-cron");

// Use env port or default
const port = process.env.PORT || 5000;

//establish socket.io connection
const app = express.init();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.of("/api/socket").on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

//start the server
server.listen(port, () => console.log(`Server now running on port ${port}!`));

//connect to db
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.auigb.mongodb.net/WildAnimalsTracker?retryWrites=true&w=majority`;
mongoose.connect(DB_URL , {
  useNewUrlParser: true,
  
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected");

  console.log("Setting change streams");
  const thoughtChangeStream = connection.collection("locations").watch();

  thoughtChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        const location = {
          _id: change.fullDocument._id,
          lat: change.fullDocument.lat,
          lng: change.fullDocument.description,
          time : change.fullDocument.time,
          number : change.fullDocument.number, 
          comment : change.fullDocument.comment,
        };

        console.log(change) ;

        io.of("/api/socket").emit("newLocation", location);
        break;

      /*case "delete":
        io.of("/api/socket").emit("deletedThought", change.documentKey._id);
        break;*/
    }
  });
});

//schedule deletion of thoughts at midnight
/*cron.schedule("0 0 0 * * *", async () => {
  await connection.collection("thoughts").drop();

  io.of("/api/socket").emit("thoughtsCleared");
});*/

connection.on("error", (error) => console.log("Error: " + error));





/*const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./dataBase/mongoose");

//to handle incoming cody json
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const app = express();
app.use(cors());
//web socket
const http = require('http');
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

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});
app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on Port: ${PORT}`);
});*/
