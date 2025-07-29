const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  jobType: {
    type: String,
    enum: ["Full-Time", "Internship", "Part-Time", "Contract"],
  },
  salaryMin: {
    type: Number,
    min: 0,
  },
  salaryMax: {
    type: Number,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Job || mongoose.model("Job", jobSchema);
