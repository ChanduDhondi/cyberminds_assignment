import { useState } from "react";
import downarrow from "../assets/downarrow.png";
import rightarrow from "../assets/rightarrow.png";

export default function JobForm({ onSubmit }) {
  const [job, setJob] = useState({
    title: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    date: "",
    description: "",
  });

  const handleChange = (e) =>
    setJob({ ...job, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(job);
      }}
      className="rounded-xl mx-auto"
    >
      <h2 className="text-xl font-medium text-center pb-6">
        Create Job Opening
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="title"
            className="font-medium"
            style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
          >
            Job Title
          </label>
          <input
            name="title"
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="title"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="font-medium"
            style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
          >
            Company Name
          </label>
          <input
            name="companyName"
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="company"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="font-medium"
            style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
          >
            Location
          </label>
          <input
            name="location"
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="location"
          />
        </div>
        <div>
          <label
            htmlFor="jobtype"
            className="font-medium"
            style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
          >
            Job Type
          </label>
          <select
            name="jobType"
            value={job.jobType}
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="jobtype"
          >
            <option value="Full Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="salary"
            className="font-medium"
            style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
          >
            Salary Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              name="salaryMin"
              type="number"
              placeholder="&#8377; min"
              onChange={handleChange}
              className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
              id="salary"
            />
            <input
              name="salaryMax"
              type="number"
              placeholder="&#8377; max"
              onChange={handleChange}
              className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="deadline"
            className="font-medium"
            style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
          >
            Application Deadline
          </label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="description"
          className="font-medium"
          style={{ color: "rgba(34, 34, 34, 1)", fontSize: "1.2rem" }}
        >
          Job Description
        </label>
        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Please share a description to let the candidate know more about the job"
          className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
          rows="6"
          id="description"
        />
      </div>
      <div className="flex justify-between mt-6">
        <button type="button" className="border px-4 py-2 rounded-lg">
          Save Draft
          <img src={downarrow} alt="downarrow" className="inline-block ms-2" />
        </button>
        <button
          type="submit"
          className="text-white px-6 py-2 rounded-lg"
          style={{ backgroundColor: "rgba(0, 170, 255, 1)" }}
        >
          Publish
          <img
            src={rightarrow}
            alt="rightarrow"
            className="inline-block ms-2"
          />
        </button>
      </div>
    </form>
  );
}
