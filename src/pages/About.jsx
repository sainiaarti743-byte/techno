import React from "react";

const About = () => {
  return (
    <div className="container py-5" id="about">
   
      <div className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
          Discover Techno High School
        </span>
        <h1 className="fw-bold text-dark display-5">About Our School</h1>
        <div className="mx-auto bg-primary rounded" style={{ width: "60px", height: "4px" }}></div>
      </div>

   
      <div className="row g-5 align-items-center">
        
    
        <div className="col-lg-6">
          <h2 className="fw-bold text-secondary mb-3">Nurturing Leaders of Tomorrow</h2>
          <p className="lead text-muted mb-4">
            Welcome to Techno High School, an institution where academic excellence meets holistic human development.
          </p>
          <p className="text-secondary lh-lg mb-4">
            Our school is deeply committed to providing a vibrant learning experience that fosters intellectual curiosity, creativity, and strong moral values. With a futuristic campus, advanced digital infrastructure, and a team of highly dedicated educators, we strive to build an environment that inspires students to unlock their highest potential.
          </p>
          
          
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="p-3 border-start border-primary border-4 bg-light rounded-end">
                <h5 className="fw-bold text-dark mb-1">100% Success</h5>
                <p className="text-muted small mb-0">Consistent academic track record</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 border-start border-success border-4 bg-light rounded-end">
                <h5 className="fw-bold text-dark mb-1">Expert Faculty</h5>
                <p className="text-muted small mb-0">Certified & passionate teachers</p>
              </div>
            </div>
          </div>
        </div>

    
        <div className="col-lg-6">
          <div className="vstack gap-4">
            
          
            <div className="card border-0 shadow-sm p-4 bg-white hover-shadow transition">
              <div className="d-flex align-items-start">
                <div className="bg-primary text-white p-3 rounded-3 me-3 fs-3 shadow-sm">
                  🎯
                </div>
                <div>
                  <h4 className="fw-bold text-dark mb-2">Our Mission</h4>
                  <p className="text-muted mb-0">
                    To empower students with a rigorous, technology-driven education while cultivating critical thinking, empathy, and global leadership skills to build a better future.
                  </p>
                </div>
              </div>
            </div>

       
            <div className="card border-0 shadow-sm p-4 bg-white hover-shadow transition">
              <div className="d-flex align-items-start">
                <div className="bg-success text-white p-3 rounded-3 me-3 fs-3 shadow-sm">
                  👁️‍🗨️
                </div>
                <div>
                  <h4 className="fw-bold text-dark mb-2">Our Vision</h4>
                  <p className="text-muted mb-0">
                    To become a premier center of educational excellence where innovation meets tradition, turning curious young minds into responsible, empathetic global citizens.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;