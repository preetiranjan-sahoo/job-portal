import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">About Our Job Portal</h2>

      <div className="mb-5">
        <h4 className="text-dark">What Kind of Jobs Are Available?</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Fresher Jobs</li>
          <li className="list-group-item">✅ Experienced Professional Jobs</li>
          <li className="list-group-item">✅ Internships (Paid & Unpaid)</li>
          <li className="list-group-item">✅ Remote & Work-from-Home Jobs</li>
          <li className="list-group-item">✅ Freelancing Opportunities</li>
        </ul>
      </div>

      <div className="row align-items-center mb-5">
        {/* left wala 1st text in about us page */}
        <div className="col-md-6">
          <h4 className="text-dark">🔍 Find Your Perfect Job</h4>
          <p className="text-muted">
            We offer a wide range of job opportunities across various
            industries. Whether you're a fresher, an experienced professional,
            or looking for internships, we connect you with top employers
            globally.
          </p>
        </div>
        {/* right wala 1st image in about us page */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/job-hunting-concept_52683-40797.jpg?w=740"
            alt="Job Searching"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>

      <div className="row align-items-center mb-5">
        {/* left wala 2nd image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/recruitment-agency-concept_23-2148636878.jpg?w=740"
            alt="Recruitment"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
        {/* right wala 2nd text */}
        <div className="col-md-6">
          <h4 className="text-dark">📝 Apply with Ease</h4>
          <p className="text-muted">
            Our platform provides an easy application process. Just create your
            profile, upload your resume, and start applying to multiple job
            listings with a single click.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        {/* left wala 3rd text */}
        <div className="col-md-6">
          <h4 className="text-dark">📢 Connect with Top Companies</h4>
          <p className="text-muted">
            We have partnerships with leading companies like Google, Microsoft,
            Amazon, Apple, and many more. Get access to exclusive job openings
            directly from top recruiters.
          </p>
        </div>
        {/* right wala 3rd image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/job-interview-concept_52683-48222.jpg?w=740"
            alt="Interview Process"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>

      <div className="row align-items-center mb-5">
        {/* left wala 4th image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/business-analytics-teamwork-concept_23-2148658895.jpg?w=740"
            alt="Analytics"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
        {/* right wala 4th text */}
        <div className="col-md-6">
          <h4 className="text-dark">📊 Career Growth & Insights</h4>
          <p className="text-muted">
            Stay ahead in your career with our insightful resources, including
            resume-building tips, interview preparation guides, and career
            growth strategies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
