import { useEffect, useState } from "react";
import vector from "../assets/Vector.png";

export default function JobCard({ job }) {
  const [timeAgo, setTimeAgo] = useState("");

  // Function to calculate "time ago" string
  const calculateTimeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffMs = now - createdDate;
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    const hours = Math.floor(diffMins / 60);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  };

  useEffect(() => {
    if (!job?.createdAt) return;

    const updateTime = () => {
      setTimeAgo(calculateTimeAgo(job.createdAt));
    };

    updateTime(); // Initial call

    const intervalId = setInterval(updateTime, 1000 * 60 * 30); // every 30 mins

    return () => clearInterval(intervalId); // Clean up
  }, [job]);

  return (
    <div className="px-4 pt-2 rounded-xl shadow border bg-white w-full max-w-sm">
      <div className="flex items-center justify-between gap-3">
        <img src={vector} alt="logo" className="w-7 h-7 rounded" />
        <div
          className="text-sm text-gray-500 p-2 rounded-lg"
          style={{ backgroundColor: "rgba(176, 217, 255, 1)" }}
        >
          {timeAgo}
        </div>
      </div>
      <h2 className="text-lg font-bold mt-2">{job.title}</h2>
      <div className="text-sm text-gray-600 mt-1">
        👤 {job.companyName} · 📍 {job.location} · 💰 {job.salaryMax}
      </div>
      <p className="text-xs mt-2 text-gray-500">{job.description}</p>
      <button
        className="text-white w-full p-1 px-4 rounded mt-4 bg-white"
        style={{ backgroundColor: "rgba(0, 170, 255, 1)" }}
      >
        Apply Now
      </button>
    </div>
  );
}
