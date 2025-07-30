import { useEffect, useState } from "react";
import Header from "./header";
import JobForm from "./jobForm";
import { io } from "socket.io-client";
import JobCard from "./jobCard";

const socket = io("http://localhost:8080");

export default function Home() {
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    salaryRange: [0, 200000],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("orderError", (data) => {
      alert(`Error: ${data.error}`);
      setLoading(false);
    });
    socket.on("show-jobs", (allJobs) => {
      setAllJobs(allJobs);
      setLoading(false);
    });

    socket.emit("get-all-jobs");

    return () => {
      socket.off("orderError");
      socket.off("show-jobs");
    };
  }, []);
  if (loading) return;

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesLocation = job.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());

    const matchesJobType = filters.jobType
      ? job.jobType === filters.jobType
      : true;

    const matchesSalary =
      parseInt(job.salaryMin || 0) >= filters.salaryRange[0] &&
      parseInt(job.salaryMax || 0) <= filters.salaryRange[1];

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  function onSubmit(job) {
    socket.emit("new-job-created", job);
    setShowCreateJob(false);
  }
  return (
    <>
      <Header
        onCreateJobClick={() => setShowCreateJob(true)}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="p-8" style={{ background: "rgba(0,0,0,0.01)" }}>
        {allJobs.length > 0 ? (
          <div className="grid grid-cols-4 gap-3">
            {filteredJobs.map((job, index) => (
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
