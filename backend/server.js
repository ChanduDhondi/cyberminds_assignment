require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const setupSocket = require("./socket.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://cyberminds-chandu.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});
setupSocket(io);

app.use(express.json());
app.use(
  cors({
    origin: ["https://cyberminds-chandu.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//db connection
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

server.listen(process.env.PORT || 8080, (req, res) => {
  console.log(`App is running on Port: ${process.env.PORT || 8080}`);
});
