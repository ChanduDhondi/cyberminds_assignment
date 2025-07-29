import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Job from "./models/jobModel.js";

const sampleJobs = [
  {
    title: "Frontend Developer",
    companyName: "TechNova",
    location: "Bangalore",
    jobType: "full-time",
    salaryMin: 60000,
    salaryMax: 90000,
    description: "Develop and maintain user-facing features using React.js.",
    deadline: new Date("2025-08-30"),
  },
  {
    title: "Backend Developer Intern",
    companyName: "CodeCrush",
    location: "Hyderabad",
    jobType: "internship",
    salaryMin: 10000,
    salaryMax: 15000,
    description: "Assist in developing REST APIs using Node.js and MongoDB.",
    deadline: new Date("2025-09-15"),
  },
  {
    title: "UI/UX Designer",
    companyName: "DesignBeat",
    location: "Remote",
    jobType: "contract",
    salaryMin: 30000,
    salaryMax: 50000,
    description: "Design modern, intuitive interfaces for web and mobile apps.",
    deadline: new Date("2025-09-01"),
  },
  {
    title: "Data Analyst",
    companyName: "InsightWorks",
    location: "Chennai",
    jobType: "full-time",
    salaryMin: 50000,
    salaryMax: 80000,
    description: "Analyze large data sets and provide actionable insights.",
    deadline: new Date("2025-08-25"),
  },
  {
    title: "Mobile App Developer",
    companyName: "AppEdge",
    location: "Pune",
    jobType: "part-time",
    salaryMin: 20000,
    salaryMax: 40000,
    description: "Build and optimize mobile applications using Flutter.",
    deadline: new Date("2025-09-10"),
  },
  {
    title: "Machine Learning Engineer",
    companyName: "AI Vision",
    location: "Bangalore",
    jobType: "full-time",
    salaryMin: 80000,
    salaryMax: 120000,
    description: "Design ML models for recommendation and prediction systems.",
    deadline: new Date("2025-08-28"),
  },
  {
    title: "Technical Content Writer",
    companyName: "WriteTech",
    location: "Remote",
    jobType: "contract",
    salaryMin: 15000,
    salaryMax: 25000,
    description: "Write technical blogs, documentation, and tutorials.",
    deadline: new Date("2025-09-20"),
  },
  {
    title: "QA Engineer",
    companyName: "Testify",
    location: "Noida",
    jobType: "full-time",
    salaryMin: 40000,
    salaryMax: 65000,
    description: "Perform automated and manual testing on web applications.",
    deadline: new Date("2025-09-05"),
  },
  {
    title: "DevOps Engineer",
    companyName: "CloudSprint",
    location: "Mumbai",
    jobType: "full-time",
    salaryMin: 70000,
    salaryMax: 100000,
    description: "Manage CI/CD pipelines and monitor cloud infrastructure.",
    deadline: new Date("2025-09-12"),
  },
  {
    title: "Graphic Designer Intern",
    companyName: "PixelPerfect",
    location: "Delhi",
    jobType: "internship",
    salaryMin: 8000,
    salaryMax: 12000,
    description: "Create visuals, banners, and marketing content.",
    deadline: new Date("2025-08-22"),
  },
];

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

await main();

Job.insertMany(sampleJobs)
  .then(() => console.log("Sample jobs inserted"))
  .catch((err) => console.error("Error inserting jobs", err));
