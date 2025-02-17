import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jobListings from "./Joblistings";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobsPerPage = 10;

  const filteredJobs = jobListings.filter(
    (job) =>
      (filter === "All" || job.type === filter) &&
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Available Job Listings</h2>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-50"
        />
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

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setSelectedJob(job)}
                  >
                    Show More
                  </button>
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No jobs found.</p>
        )}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="fw-bold text-dark">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {selectedJob && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "500px", margin: "auto" }}
          >
            <div className="modal-content p-4">
              <button
                className="btn-close position-absolute top-0 end-0 m-3"
                onClick={() => setSelectedJob(null)}
              ></button>

              <h4 className="text-primary">{selectedJob.title}</h4>
              <p className="text-muted">
                <strong>{selectedJob.company}</strong> - {selectedJob.location}
              </p>
              <p className="fw-bold text-success">{selectedJob.salary}</p>
              <p className="text-secondary">{selectedJob.description}</p>

              <h5 className="text-dark mt-3">Requirements</h5>
              <ul className="text-secondary">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              <a
                href={selectedJob.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
