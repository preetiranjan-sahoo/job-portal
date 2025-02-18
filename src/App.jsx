import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./components/Home"));
const Jobs = lazy(() => import("./components/Jobs"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
