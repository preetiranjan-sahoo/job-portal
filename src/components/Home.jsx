import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const maxCount = 100;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= maxCount) {
          clearInterval(interval);
          return maxCount;
        }
        return prevCount + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      alt: "IBM",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      alt: "Tesla",
    },
    {
      src: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
      alt: "Meta",
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };  works fine untill it comes to mibile size

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="text-primary">Welcome to the Job Portal</h1>
      <p className="text-muted">Find your dream job easily</p>
      <button className="btn btn-primary">
        <Link to="/jobs" style={{ textDecoration: "none", color: "white" }}>
          Explore Jobs
        </Link>
      </button>

      <div className="mt-5">
        <motion.h2
          className="text-success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          We help <motion.span animate={{ count }}>{count}</motion.span>+
          students get their dream job
        </motion.h2>
      </div>

      <div className="mt-5">
        <h3 className="text-dark">Your Dream Companies</h3>
        <Slider {...settings} className="mt-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center p-2"
              style={{ height: "120px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{
                  width: "auto",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mt-5">
        <h1 className="text-primary text-center">About Us</h1>
        <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
          {/* left side wala about text */}
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted">
              We are committed to connecting job seekers with their dream jobs
              by providing the latest job listings and career resources. Our
              platform partners with top companies worldwide to bring you
              verified job opportunities. With an intuitive interface and
              real-time updates, we ensure a seamless job-hunting experience.
            </p>
            <button className="btn btn-primary">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                Know more
              </Link>
            </button>
          </div>

          {/* right side wala about image */}
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?t=st=1739698457~exp=1739702057~hmac=d87c5cd800bcff6c162e38047e30ad45d6bb5a88813170c9e131962df7583f60&w=740"
              alt="Career"
              className="img-fluid"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
