import { useEffect, useState } from "react";
import Header from "./header";
import JobForm from "./jobForm";
import { io } from "socket.io-client";
import JobCard from "./jobCard";

const socket = io("http://localhost:8080");

export default function Home() {
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    socket.on("orderError", (data) => {
      alert(`Error: ${data.error}`);
    });
    socket.on("show-jobs", (allJobs) => {
      console.log(allJobs);
      setAllJobs(allJobs);
    });
    return () => {
      socket.off("orderError");
      socket.off("show-jobs");
    };
  }, []);

  function onSubmit(job) {
    socket.emit("new-job-created", job);
    setShowCreateJob(false);
  }
  return (
    <>
      <Header onCreateJobClick={() => setShowCreateJob(true)} />
      <div className="p-8" style={{ background: "rgba(0,0,0,0.01)" }}>
        {allJobs.length > 0 ? (
          <div className="grid grid-cols-4 gap-3">
            {allJobs.map((job, index) => (
              <JobCard job={job} key={index} />
            ))}
          </div>
        ) : (
          <div className="p-3">No jobs are available</div>
        )}
      </div>

      {/* create job modal */}
      {showCreateJob && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowCreateJob(false)}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-[50%]"
            onClick={(e) => e.stopPropagation()}
          >
            <JobForm onSubmit={onSubmit} />
          </div>
        </div>
      )}
    </>
  );
}
