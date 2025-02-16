import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer
    //   className="mt-5 bg-light p-3 text-center w-100"
    //   style={{ position: "relative", bottom: 0 }}
    // >
    //   <div className="container">
    //     <h4 className="text-primary">Job Portal</h4>
    //     <p>
    //       <strong>Email:</strong> support@jobportal.com |{" "}
    //       <strong>Phone:</strong> +91 9876543210
    //     </p>
    //     <p>
    //       <strong>Location:</strong> Bhubaneswar, India
    //     </p>

    //     <p className="mt-3">&copy; 2025 Job Portal. All rights reserved.</p>
    //   </div>
    // </footer>

    <footer
      className="mt-5 bg-light p-3 text-center w-100"
      style={{ position: "relative", bottom: 0 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center mb-3 mb-md-0">
            <h4 className="text-primary">Job Portal</h4>
            <p>
              <strong>Email:</strong> support@jobportal.com
              <br />
              <strong>Phone:</strong> +91 8917579373
              <br />
              <strong>Location:</strong> Bhubaneswar, India
            </p>
          </div>

          <div className="col-md-6 text-md-end text-center">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://github.com/preetiranjan-sahoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/preetiranjan-sahoo-414365204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-3">
          &copy; 2025 Job Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
