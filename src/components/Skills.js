import React from 'react';
import '../App.css'; // We'll add custom styles here

function Skills() {
  const skills = {
    "Programming": [
      { name: "Python", img: "python.jpeg" },
      { name: "C++", img: "cpp.png" },
      { name: "C", img: "c.png" },
      { name: "JavaScript", img: "js.png" },
      { name: "SQL", img: "sql.jpeg" },
    ],
    "Web Development": [
      { name: "JavaScript", img: "js.png" },
      { name: "HTML", img: "html.png" },
      { name: "CSS", img: "css.png" },
      { name: "React", img: "react.png" },
      { name: "Express JS", img: "express.png" },
      { name: "NodeJs", img: "nodejs.jpeg" },
      { name: "MongoDb", img: "mongodb.png" },
      { name: "MySQL", img: "mysql.png" },
    ],
    "Tools": [
      { name: "VSCode", img: "vscode.jpeg" },
      { name: "Git", img: "git.png" },
      { name: "Docker", img: "docker.png" },
      { name: "Jupyter", img: "jupyter.png" },
      { name: "Vercel", img: "vercel.png" },
      { name: "Google Colab", img: "googlecolab.png" },
    ],
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold">Technical Skills</h1>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-5">
          <h3 className="mb-3">{category}:</h3>
          <div className="row g-4">
            {items.map((skill, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                <div className="card skill-card p-2">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="img-fluid mx-auto d-block"
                    style={{ height: '60px', objectFit: 'contain' }}
                  />
                  <div className="mt-2 fw-semibold">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
