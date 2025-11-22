import React from 'react';
import '../App.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Home = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f1f5f9' }}>
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <img
            src="/profile_img3.jpg"
            alt="Profile"
            className="rounded-circle"
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
              border: '4px solid #94a3b8'
            }}
          />
        </div>
      </div>

      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="fw-bold text-dark mb-3" style={{ color: '#0f172a' }}>
            HELLO! WELCOME TO MY PORTFOLIO
          </h1>
          <h2 className="fw-semibold mb-2">
            I am <span style={{ color: '#1d4ed8' }}>Balaji Rongali</span>
          </h2>
          <p className="lead text-secondary mb-3">
            Full Stack Developer | AI-ML Enthusiast
          </p>
          <p className=" fs-5">
            I am currently pursuing BTech in Computer Science and Engineering from SVNIT Surat,
            where I specialized in Software Development and Artificial Intelligence. I have a strong
            passion for programming, web development, and machine learning. I am a MERN stack
            Developer. Currently, I am focused on building impactful projects and enhancing my skills
            in Machine Learning and deployment techniques.
          </p>

          <div className="d-flex justify-content-center gap-4 fs-3 mt-4">
            <a href="https://www.linkedin.com/in/rongali-balaji-36916a289/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="#0A66C2" />
            </a>
            <a href="mailto:balajirongali0504@gmail.com">
              <FaEnvelope color="#EA4335" />
            </a>
            <a href="https://leetcode.com/u/balajirongali/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode color="#FFA116" />
            </a>
            <a href="https://codeforces.com/profile/yourusername" target="_blank" rel="noopener noreferrer">
              <SiCodeforces color="#1F8ACB" />
            </a>
            <a href="https://github.com/balajirongali" target="_blank" rel="noopener noreferrer">
              <FaGithub color="#171515" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
