import React, { useEffect, useState } from 'react';

// Make sure to import Bootstrap JS somewhere in your project
// or add bootstrap.bundle.min.js via script tag in index.html

const sectionIds = ['home', 'skills', 'education', 'projects', 'experience', 'contact'];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollPosition = window.scrollY + 200;
        let currentSection = 'home';

        for (let id of sectionIds) {
          const section = document.getElementById(id);
          if (section && section.offsetTop <= scrollPosition) {
            currentSection = id;
          }
        }

        setActiveSection(currentSection);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClass = (id) =>
    `nav-link ${activeSection === id ? 'text-primary fw-bold' : 'text-light'}`;

  // Function to close Bootstrap offcanvas programmatically
  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById('offcanvasSidebar');
    if (offcanvasEl) {
      // @ts-ignore
      const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  // Handler for mobile nav link clicks
  const handleMobileNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeOffcanvas();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="d-none d-md-flex flex-column align-items-center vh-100 p-3 position-fixed"
        style={{
          width: '250px',
          top: 0,
          left: 0,
          backgroundColor: '#1e293b',
          color: 'white',
          zIndex: 1040,
        }}
      >
        <img
          src="/profile_img3.jpg"
          alt="Profile"
          className="rounded-circle mb-4"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <nav className="nav flex-column w-100">
          {sectionIds.map((id) => (
            <a
              key={id}
              className={navLinkClass(id)}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </aside>

      {/* Hamburger for mobile */}
      <button
        className="btn btn-transparent border-0 p-0 d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        aria-label="Toggle navigation"
        style={{
          position: 'fixed',
          top: '15px',
          left: '15px',
          width: '30px',
          height: '25px',
          zIndex: 1050,
        }}
      >
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'black',
            marginBottom: '5px',
            borderRadius: '2px',
          }}
        ></span>
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'black',
            marginBottom: '5px',
            borderRadius: '2px',
          }}
        ></span>
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'black',
            borderRadius: '2px',
          }}
        ></span>
      </button>

      {/* Offcanvas for Mobile */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ backgroundColor: '#1e293b' }}>
          <img
            src="/profile_img3.jpg"
            alt="Profile"
            className="rounded-circle mb-4 d-block mx-auto"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <nav className="nav flex-column w-100">
            {sectionIds.map((id) => (
              <a
                key={id}
                className={navLinkClass(id)}
                href={`#${id}`}
                onClick={(e) => handleMobileNavClick(e, id)} // manual scroll + close offcanvas
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
