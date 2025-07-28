import { useState } from "react";
import Header from "./header";
import JobForm from "./jobForm";

export default function Home() {
  const [showCreateJob, setShowCreateJob] = useState(false);
  function onSubmit(job) {
    console.log(job);
    setShowCreateJob(false);
  }
  return (
    <>
      <Header onCreateJobClick={() => setShowCreateJob(true)} />
      <div className="p-16">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Job listings will go here...</p>
      </div>
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
