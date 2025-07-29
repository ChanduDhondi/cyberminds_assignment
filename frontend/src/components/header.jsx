import { Link } from "react-router-dom";
import { useState } from "react";
import { Slider } from "@mui/material";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import vector from "../assets/Vector.png";
import location from "../assets/location.png";

export default function Header({ onCreateJobClick }) {
  const [salaryRange, setSalaryRange] = useState([50, 80]);

  return (
    <header className="bg-white shadow ">
      <div className="flex justify-center w-full pt-3">
        <div
          className="flex justify-center gap-3 items-center w-fit bg-white p-4 rounded-[4rem]"
          style={{ filter: "drop-shadow(0 0 20px rgba(127, 127, 127, 0.25))" }}
        >
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          </div>
          <nav className="flex gap-6 text-gray-700">
            <Link to="/">Home</Link>
            <a href="#">Find Jobs</a>
            <a href="#">Find Talents</a>
            <a href="#">About us</a>
            <a href="#">Testimonials</a>
          </nav>

          {/* Create Job Button */}
          <button
            onClick={onCreateJobClick}
            className="text-white px-4 py-2 rounded-full shadow hover:bg-purple-600"
            style={{
              backgroundImage:
                "linear-gradient(rgba(161, 40, 255, 1), rgba(97, 0, 173, 1))",
            }}
          >
            Create Jobs
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex items-stretch mt-6 bg-white p-3 rounded gap-6 divide-x divide-solid divide-gray-300">
        {/* Search Input */}
        <div className="flex items-center  px-3 py-2 rounded w-1/4">
          <img src={search} alt="search" className="text-gray-500 mr-2"></img>
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="w-full outline-none"
          />
        </div>

        {/* Preferred Location */}
        <div className="flex items-center px-3 py-2 w-1/4">
          <img
            src={location}
            alt="location"
            className="text-gray-500 mr-2"
          ></img>
          <select className="w-full outline-none">
            <option>Preferred Location</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>
        </div>

        {/* Job Type */}
        <div className="flex items-center px-3 py-2 w-1/4">
          <img src={vector} alt="vector" className="text-gray-500 mr-2"></img>
          <select className="w-full outline-none">
            <option>Full Time</option>
            <option>Internship</option>
            <option>Part Time</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="flex flex-col px-6 py-2 w-1/4">
          <label className="text-sm text-gray-600">
            Salary Per Month: ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
          </label>
          <Slider
            value={salaryRange}
            onChange={(e, newValue) => setSalaryRange(newValue)}
            valueLabelDisplay="auto"
            min={10000}
            max={200000}
            step={5000}
            className="px-3 "
          />
        </div>
      </div>
    </header>
  );
}
