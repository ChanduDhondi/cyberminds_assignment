import { useState } from "react";
import downarrow from "../assets/downarrow.png";
import rightarrow from "../assets/rightarrow.png";

export default function JobForm({ onSubmit }) {
  const [job, setJob] = useState({
    title: "",
    companyName: "",
    location: "",
    jobType: "Full-Time",
    salaryMin: "",
    salaryMax: "",
    deadline: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setJob((prevJob) => ({
      ...prevJob,
      [e.target.name]: e.target.value,
    }));
    setErrors((preError) => ({ ...preError, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!job.title.trim()) newErrors.title = "Job title is required";
    if (!job.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!job.location.trim()) newErrors.location = "Location is required";
    if (!job.jobType.trim()) newErrors.jobType = "Job type is required";
    if (!job.salaryMin) newErrors.salaryMin = "Minimum salary is required";
    if (!job.salaryMax) newErrors.salaryMax = "Maximum salary is required";
    if (Number(job.salaryMin) >= Number(job.salaryMax))
      newErrors.salaryMax = "Max salary must be greater than Min salary";
    if (!job.deadline) newErrors.date = "Application deadline is required";
    if (!job.description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(job);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl mx-auto"
      name="job-form"
    >
      <h2 className="text-xl font-medium text-center pb-6">
        Create Job Opening
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Job Title */}
        <div>
          <label
            htmlFor="title"
            className="font-medium text-gray-900 text-[1.2rem]"
          >
            Job Title
          </label>
          <input
            name="title"
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="title"
            value={job.title}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="company"
            className="font-medium text-gray-900 text-[1.2rem]"
          >
            Company Name
          </label>
          <input
            name="companyName"
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="company"
            value={job.companyName}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="font-medium text-gray-900 text-[1.2rem]"
          >
            Location
          </label>
          <input
            name="location"
            onChange={handleChange}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="location"
            value={job.location}
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label
            htmlFor="jobtype"
            className="font-medium text-gray-900 text-[1.2rem]"
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
            <option value="Full-Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Part-Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
          {errors.jobType && (
            <p className="text-red-500 text-sm">{errors.jobType}</p>
          )}
        </div>

        {/* Salary Range */}
        <div>
          <label
            htmlFor="salary"
            className="font-medium text-gray-900 text-[1.2rem]"
          >
            Salary Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              name="salaryMin"
              id="salary"
              type="number"
              placeholder="₹ min"
              onChange={handleChange}
              value={job.salaryMin}
              className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            />
            <input
              name="salaryMax"
              id="salary"
              type="number"
              placeholder="₹ max"
              onChange={handleChange}
              value={job.salaryMax}
              className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            />
          </div>
          {(errors.salaryMin || errors.salaryMax) && (
            <p className="text-red-500 text-sm">
              {errors.salaryMin || errors.salaryMax}
            </p>
          )}
        </div>

        {/* Application Deadline */}
        <div>
          <label
            htmlFor="deadline"
            className="font-medium text-gray-900 text-[1.2rem]"
          >
            Application Deadline
          </label>
          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            value={job.deadline}
            className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
            id="deadline"
          />
          {errors.deadline && (
            <p className="text-red-500 text-sm">{errors.deadline}</p>
          )}
        </div>
      </div>

      {/* Job Description */}
      <div className="mt-2">
        <label
          htmlFor="description"
          className="font-medium text-gray-900 text-[1.2rem]"
        >
          Job Description
        </label>
        <textarea
          name="description"
          onChange={handleChange}
          value={job.description}
          placeholder="Please share a description to let the candidate know more about the job"
          className="input p-2 border border-gray-300 rounded-lg w-full focus:border-black focus:outline-none"
          rows="6"
          id="description"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      {/* Buttons */}
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
