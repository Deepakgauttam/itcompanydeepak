import React from 'react';
import { FaDesktop, FaMobileAlt, FaCloud, FaShieldAlt, FaNetworkWired, FaDatabase, FaTools, FaChartLine, FaUsers, FaRegLightbulb, FaBook, FaGlobe } from 'react-icons/fa';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';
import './Home.css';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  rows: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

function Home() {
  return (
    <div>
    <div className="home">
      <section className="hero">
        <h1>Welcome to Our IT Company</h1>
        <p>Providing top-notch IT solutions for your business.</p>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <Slider {...sliderSettings}>
          <div className="card">
            <div className="card-icon">
              <FaDesktop size={50} />
            </div>
            <div className="card-content">
              <h3>Web Development</h3>
              <p>
                We build responsive and scalable web applications to meet your
                business needs.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaMobileAlt size={50} />
            </div>
            <div className="card-content">
              <h3>Mobile Development</h3>
              <p>
                Creating innovative mobile applications for Android and iOS
                platforms.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaCloud size={50} />
            </div>
            <div className="card-content">
              <h3>Cloud Solutions</h3>
              <p>
                Offering reliable and secure cloud computing services tailored
                to your needs.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaShieldAlt size={50} />
            </div>
            <div className="card-content">
              <h3>Cybersecurity</h3>
              <p>
                Security assessment, threat detection, and compliance solutions
                to protect your data.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaNetworkWired size={50} />
            </div>
            <div className="card-content">
              <h3>Networking Services</h3>
              <p>
                Design, configuration, and management of network infrastructure
                for seamless connectivity.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaDatabase size={50} />
            </div>
            <div className="card-content">
              <h3>Data Management</h3>
              <p>
                Data warehousing, analytics, and backup solutions to manage and
                secure your information.
              </p>
            </div>
          </div>
          {/* Add more cards if needed */}
        </Slider>
      </section>
    </div>
    <Footer />
    </div>
  );
}

export default Home;