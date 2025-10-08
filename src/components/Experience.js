import React from 'react';
import '../App.css';

function Experience() {
    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold mb-5">Experience</h2>
            <div className="timeline">

                <div className="timeline-item">
                    <div className="timeline-icon"></div>

                    <div className="timeline-content card shadow p-4">
                        <div className="d-flex align-items-center mb-3">
                            <img src="iitj.png" alt="IIT Jodhpur Logo" className="college-logo me-3" />
                            <h5 className="fw-bold mb-0">Research Intern</h5>
                        </div>
                        <p className="mb-1"><strong>Institution:</strong> IIT Jodhpur</p>
                        <p className="mb-1"><strong>Duration:</strong> May 2025 – July 2025</p>
                        <p className="mb-1"><strong>Location:</strong> Jodhpur, India</p>
                        <p className="mb-2"><strong>Work:</strong></p>
                        <ul className="mb-0">
                            {/* <li>Researching citation and social networks using NetworkX and SNAP datasets.</li>
                            <li>Implemented HITS and PageRank to analyze influence among academic authors.</li>
                            <li>Visualized network metrics and prepared reports for academic publishing.</li> */}
                            <li>Built a scalable dataset pipeline (1.5M+ samples, 15 languages, 40+ noise types) integrating real-world corpora (BSTD, IGNCA) with 120k+ authentic annotations.</li>
                            <li>Trained diffusion-based model (GSDM) with multilingual-aware data loader and mask-guided supervision, boosting SSIM (0.71→0.90), PSNR (18.1→25.3 dB), and OCR accuracy by 5–14% across Tesseract, EasyOCR, and TrOCR.</li>
                            <li>Benchmarked model generalization across diverse scripts, fonts, and degradation scenarios.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;
