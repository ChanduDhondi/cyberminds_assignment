export default function JobCard({ job }) {
  return (
    <div className="p-4 rounded-xl shadow border bg-white w-full max-w-sm">
      <div className="flex items-center gap-3">
        <img src={job.logo} alt="logo" className="w-10 h-10 rounded" />
        <div className="text-sm text-gray-500">{job.timeAgo}</div>
      </div>
      <h2 className="text-lg font-bold mt-2">{job.title}</h2>
      <div className="text-sm text-gray-600 mt-1">
        👤 {job.experience} · 📍 {job.location} · 💰 {job.salary}
      </div>
      <p className="text-xs mt-2 text-gray-500">{job.description}</p>
      <button className="bg-blue-500 text-white font-semibold py-1 px-4 rounded mt-4">
        Apply Now
      </button>
    </div>
  );
}
