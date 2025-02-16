import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jobListings from "./Joblistings";

function Jobs() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const filteredJobs =
    filter === "All"
      ? jobListings
      : jobListings.filter((job) => job.type === filter);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Available Job Listings</h2>

      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All</option>
          <option value="Fresher">Fresher</option>
          <option value="Experienced">Experienced</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="row">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <div key={job.id} className="col-md-6 mb-4">
              <div className="card shadow-sm p-3">
                <h5 className="text-dark">{job.title}</h5>
                <p className="text-muted">
                  <strong>{job.company}</strong> - {job.location} <br />{" "}
                  {job.type}
                </p>
                <p className="text-success fw-bold">{job.salary}</p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No jobs available.</p>
        )}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="fw-bold text-dark">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-primary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Jobs;
