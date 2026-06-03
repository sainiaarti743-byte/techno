import React from "react";

const About = () => {
  return (
    <div className="container py-5" id="about">
      {/* Header Section */}
      <div className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
          Discover Techno High School
        </span>
        <h1 className="fw-bold text-dark display-5">About Our School</h1>
        <div className="mx-auto bg-primary rounded" style={{ width: "60px", height: "4px" }}></div>
      </div>

      {/* Main Content: Text & Image Grid */}
      <div className="row g-5 align-items-center mb-5">
        
        {/* Left Content Column */}
        <div className="col-lg-6">
          <h2 className="fw-bold text-secondary mb-3">Nurturing Leaders of Tomorrow</h2>
          <p className="lead text-muted mb-4">
            Welcome to Techno High School, an institution where academic excellence meets holistic human development.
          </p>
          <p className="text-secondary lh-lg mb-4">
            Our school is deeply committed to providing a vibrant learning experience that fosters intellectual curiosity, creativity, and strong moral values. With a futuristic campus, advanced digital infrastructure, and a team of highly dedicated educators, we strive to build an environment that inspires students to unlock their highest potential.
          </p>
          
          {/* Stats Badges */}
          <div className="row g-3 mb-4">
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

          {/* Mission & Vision Stacked neatly on Left Side now */}
          <div className="vstack gap-3">
            <div className="p-3 bg-white border rounded shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-3">🎯</span>
                <div>
                  <h5 className="fw-bold mb-1 text-dark">Our Mission</h5>
                  <p className="text-muted small mb-0">To empower students with a rigorous, technology-driven education while cultivating critical thinking.</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white border rounded shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-3">👁️‍🗨️</span>
                <div>
                  <h5 className="fw-bold mb-1 text-dark">Our Vision</h5>
                  <p className="text-muted small mb-0">To become a premier center of educational excellence where innovation meets tradition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Grid Column */}
        <div className="col-lg-6">
          <div className="row g-3">
            {/* Main Big Image */}
            <div className="col-12">
              <div className="position-relative overflow-hidden rounded-4 shadow">
                <img 
                  src="assets/image/bannerimg1.jpeg"  
                  alt="Techno High School Campus" 
                  className="img-fluid w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Sub Image 1: Class/Lab */}
            <div className="col-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-sm">
                <img 
                  src="assets/image/bannerimg6.jpeg"  
                  alt="Students in Lab" 
                  className="img-fluid w-100"
                  style={{ height: "180px", objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Sub Image 2: Sports/Activities */}
            <div className="col-6">
              <div className="position-relative overflow-hidden rounded-4 shadow-sm">
                <img 
                  src="assets/image/bannerimg7.jpeg"  
                  alt="School Sports" 
                  className="img-fluid w-100"
                  style={{ height: "180px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr className="my-5 opacity-25" />

      {/* New Section: Our Core Values */}
      <div className="core-values-section mt-5">
        <h3 className="fw-bold text-dark text-center mb-4">Our Core Values</h3>
        <div className="row g-4 justify-content-center">
          
          {/* Value 1 */}
          <div className="col-12 col-md-4 text-center">
            <div className="p-4 bg-light rounded-4 h-100 border">
              <div className="fs-2 mb-2 text-primary">💡</div>
              <h5 className="fw-bold text-dark">Innovation</h5>
              <p className="text-muted small mb-0">
                Encouraging students to think outside the box, embrace digital trends, and use technology to solve real-world problems.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="col-12 col-md-4 text-center">
            <div className="p-4 bg-light rounded-4 h-100 border">
              <div className="fs-2 mb-2 text-success">🛡️</div>
              <h5 className="fw-bold text-dark">Integrity</h5>
              <p className="text-muted small mb-0">
                Building strong moral pillars, honesty, and transparency in actions, ensuring our students grow into trusted future citizens.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="col-12 col-md-4 text-center">
            <div className="p-4 bg-light rounded-4 h-100 border">
              <div className="fs-2 mb-2 text-warning">🤝</div>
              <h5 className="fw-bold text-dark">Inclusivity</h5>
              <p className="text-muted small mb-0">
                Fostering a welcoming culture where diversity is celebrated, teamwork is practiced, and every single child feels valued.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;