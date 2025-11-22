import React from 'react';


function Education() {
    return (
        <div className="container mt-4">
            <section id="education">
                <h2 className="text-center mb-4 fw-bold">Education</h2>

                {/* SVNIT Card */}
                <div className="card mb-4 shadow-sm border-0">
                    <div className="row g-0">
                        <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
                            <img src="svnit.png" alt="SVNIT Logo" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat</h5>
                                <p className="card-text"><strong>Degree:</strong> B.Tech in Computer Science and Engineering</p>
                                <p><strong>Duration:</strong> 2022 – Present</p>
                                <p><strong>CGPA:</strong> 8.39</p>
                                <p><strong>Coursework:</strong> Data Structures, Algorithms, OS, COA, DBMS, OOP, Web Dev, CN, AI/ML, MIT, System Software, CI/CD Tools, InfoSec, Cloud, Data Science</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chaitanya School Card */}
                <div className="card mb-4 shadow-sm border-0">
                    <div className="row g-0">
                        <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
                            <img src="chaitanya_college.jpeg" alt="Chaitanya Logo" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sri Chaitanya Techno School, Visakhapatnam</h5>
                                <p><strong>Stream:</strong> MPC-IP (CBSE)</p>
                                <p><strong>Duration:</strong> Sep 2020 – May 2022</p>
                                <p><strong>Percentage:</strong> 92.6%</p>
                                <p><strong>Coursework:</strong> Maths, Physics, Chemistry, IP (Python)</p>
                                <p><strong>JEE Mains:</strong> 98.9 Percentile</p>
                                <p><strong>JEE Adv:</strong> 20000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MJP School Card */}
                <div className="card mb-4 shadow-sm border-0">
                    <div className="row g-0">
                        <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
                            <img src="mjp.jpeg" alt="MJP Logo" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">MJPAPBCW Residential School, Visakhapatnam</h5>
                                <p><strong>Class:</strong> VIII - X (AP State Board)</p>
                                <p><strong>Duration:</strong> July 2017 – May 2020</p>
                                <p><strong>Percentage:</strong> 99%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Education;
