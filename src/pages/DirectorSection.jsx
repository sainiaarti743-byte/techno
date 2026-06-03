import React from "react";

const DirectorSection = () => {
  return (
    <div className="container py-5" id="director-section">
   
      <div className="card border-0 shadow-sm overflow-hidden bg-white mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="row g-0 align-items-center">
       
          <div className="col-md-8 order-2 order-md-1">
            <div className="card-body p-4 p-lg-5">
             
              <div className="text-success-subtle display-1 lh-1 mb-0 select-none" style={{ fontFamily: "Georgia, serif", marginTop: "-20px" }}>
                “
              </div>
              
              <h2 className="fw-bold text-dark mb-4 mt-n3">Shaping the Future of Education</h2>
              
              <p className="card-text text-secondary lh-lg mb-4">
                "Welcome to Techno High School! In today's rapidly changing world, education must go beyond conventional learning. Our core mission is to establish a technology-driven, progressive ecosystem that fosters absolute academic excellence and unhindered personal growth."
              </p>
              
              <p className="card-text text-secondary lh-lg mb-4">
                We are strategic in our approach—investing heavily in smart infrastructure, global teaching methodologies, and skill-based research. By equipping our students with 21st-century skills like critical thinking, coding, and collaborative leadership, we ensure they don't just adapt to the future, but actively shape it.
              </p>

           
              <div className="mt-4 pt-3 border-top border-light">
                <p className="fst-italic text-dark mb-0 fw-semibold">Best Wishes,</p>
                <p className="fw-bold text-success mb-0 fs-5 mt-1">Dr. John Smith</p>
                <p className="text-muted small mb-0">Managing Director, Techno Group</p>
              </div>
            </div>
          </div>

     
          <div className="col-md-4 order-1 order-md-2 bg-light text-center py-5 py-md-0 d-flex flex-column align-items-center justify-content-center border-start" style={{ minHeight: "350px" }}>
         
            <div className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: "120px", height: "120px" }}>
              <span className="fs-1">👨‍💼</span>
            </div>
            <h5 className="fw-bold text-dark mb-1">Dr. John Smith</h5>
            <p className="text-muted small uppercase tracking-wider mb-0">Director, Techno High School</p>
            <span className="badge bg-primary-subtle text-primary px-2 py-1 rounded mt-2 small">MBA, Ph.D. in Leadership</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DirectorSection;