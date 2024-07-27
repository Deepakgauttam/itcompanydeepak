import React from 'react';
import {
  FaDesktop,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaTools,
  FaChartLine,
  FaUsers,
  FaRegLightbulb,
  FaBook,
  FaGlobe,
} from "react-icons/fa";
import "./Services.css";
import Footer from "./Footer";

function Services() {
  return (
    <div>
      <div className="services">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">
              <FaDesktop size={50} />
            </div>
            <div className="service-content">
              <h3>Web Development</h3>
              <p>
                We build responsive and scalable web applications to meet your
                business needs.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaMobileAlt size={50} />
            </div>
            <div className="service-content">
              <h3>Mobile Development</h3>
              <p>
                Creating innovative mobile applications for Android and iOS
                platforms.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaCloud size={50} />
            </div>
            <div className="service-content">
              <h3>Cloud Solutions</h3>
              <p>
                Offering reliable and secure cloud computing services tailored
                to your needs.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaShieldAlt size={50} />
            </div>
            <div className="service-content">
              <h3>Cybersecurity</h3>
              <p>
                Security assessment, threat detection, and compliance solutions
                to protect your data.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaNetworkWired size={50} />
            </div>
            <div className="service-content">
              <h3>Networking Services</h3>
              <p>
                Design, configuration, and management of network infrastructure
                for seamless connectivity.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaDatabase size={50} />
            </div>
            <div className="service-content">
              <h3>Data Management</h3>
              <p>
                Data warehousing, analytics, and backup solutions to manage and
                secure your information.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaTools size={50} />
            </div>
            <div className="service-content">
              <h3>IT Support</h3>
              <p>
                Providing 24/7 technical support to ensure your IT systems are
                running smoothly.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaChartLine size={50} />
            </div>
            <div className="service-content">
              <h3>IT Consulting</h3>
              <p>
                Offering expert advice to help you choose the best IT solutions
                for your business.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaUsers size={50} />
            </div>
            <div className="service-content">
              <h3>Staff Augmentation</h3>
              <p>
                Providing skilled IT professionals to enhance your Partner and
                meet project demands.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaRegLightbulb size={50} />
            </div>
            <div className="service-content">
              <h3>Innovation Management</h3>
              <p>
                Helping you develop and implement innovative solutions to stay
                ahead of the competition.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaBook size={50} />
            </div>
            <div className="service-content">
              <h3>Training & Development</h3>
              <p>
                Providing training programs to enhance your Partner's skills and
                knowledge.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaGlobe size={50} />
            </div>
            <div className="service-content">
              <h3>Digital Marketing</h3>
              <p>
                Creating effective digital marketing strategies to boost your
                online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
