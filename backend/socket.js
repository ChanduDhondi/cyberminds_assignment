const socket = require("../../../Programming/projects/grobite/backend/socket");
const Job = require("./models/jobModel");

async function showJobs(io) {
  try {
    const allJobs = await Job.find().sort({ createdAt: -1 });
    io.emit("show-jobs", { allJobs });
  } catch (error) {
    socket.emit("orderError", { error: "Failed to fetch orders" });
  }
}

async function handleSocket(socket, io) {
  await showJobs(io);
  socket.on("new-job-created", async (jobData) => {
    try {
      const jobs = await Job.find().sort({ createdAt: -1 });
      io.emit("job-added", jobs);
    } catch (error) {
      socket.emit("orderError", { error: "Failed to fetch orders" });
    }
  });
}

const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);
    handleSocket(socket, io);
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
};

module.exports = setupSocket;
