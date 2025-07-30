const socket = require("../../../Programming/projects/grobite/backend/socket");
const Job = require("./models/jobModel");

async function handleSocket(socket, io) {
  socket.on("new-job-created", async (job) => {
    try {
      await Job.create({
        ...job,
        deadline: new Date(job.deadline),
      });
      await showJobs(io);
    } catch (error) {
      socket.emit("orderError", { error: error.message });
    }
  });

  socket.on("get-all-jobs", async () => {
    try {
      const allJobs = await Job.find().sort({ createdAt: -1 });
      socket.emit("show-jobs", allJobs);
    } catch (error) {
      socket.emit("orderError", { error: "Failed to fetch jobs" });
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
