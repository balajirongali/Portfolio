import React from 'react'


const projects = [
  {
    title: 'Attendance Recorder using Facial Recognition',
    image: "/attendance.jpeg",
    description: 'This project implements a Siamese Neural Network for face recognition to automate attendance marking. The system captures facial images, processes them, and verifies identities using a deep learning model.',
    tech: ['OpenCV', 'Siamese Networks', 'CNN', 'Deep Learning'],
    link: 'https://github.com/balajirongali/Attendance-Recorder'
  },
  {
    title: 'iNotebook-A Note taking App',
    image:"/inotebook.jpg",
    description: 'Built a secure and responsive full-stack note-taking app using the MERN stack. Integrated JWT-based authentication, CRUD operations via Fetch API, and a clean UI with React Router for seamless user experience.',
    tech: ['FullStack', 'React', 'MongoDb','Express Js','JWT Token'],
    link: 'https://github.com/balajirongali/iNotebook'
  },
  {
    title: 'NewsMonkey',
    image:"/newsmonkey.jpg",
    description: 'Developed a dynamic news aggregator using React, NewsAPI, and Bootstrap, featuring infinite scroll and category-based filtering. Optimized API usage for faster load times and ensured smooth user experience with efficient state management using React Hooks.',
    tech: ['NewsApi', 'React','Bootstrap'],
    link: 'https://github.com/balajirongali/NewsMonkey'
  },
  {
    title: 'Bank Management System',
    image:"/bank.jpeg",
    description: 'Created a modular Bank Management System in C++ using Object-Oriented Programming principles. Implemented features like account creation, updates, deposits, and withdrawals. Leveraged inheritance and polymorphism to ensure scalability and maintainability.',
    tech: ['OOPs', 'C++','Console-based UI'],
    link: 'https://github.com/balajirongali/bank_management_system'
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div>
      <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-list">
              {project.tech.map((tech, idx) => (
                <span className="tech-tag" key={idx}>{tech}</span>
              ))}
            </div>
            <button className='btn btn-primary'><a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Github</a></button>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Projects
