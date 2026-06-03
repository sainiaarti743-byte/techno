import React from "react";

const PrincipalMessage = () => {
  return (
    <div className="container py-5" id="principal-message">
    
      <div className="card border-0 shadow-sm overflow-hidden bg-white mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="row g-0 align-items-center">
    
          <div className="col-md-4 bg-light text-center py-5 py-md-0 d-flex flex-column align-items-center justify-content-center border-end" style={{ minHeight: "350px" }}>
       
            <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: "120px", height: "120px" }}>
              <span className="fs-1">👩‍💼</span>
            </div>
            <h5 className="fw-bold text-dark mb-1">Dr. Jane Doe</h5>
            <p className="text-muted small uppercase tracking-wider mb-0">Principal, Techno High School</p>
            <span className="badge bg-success-subtle text-success px-2 py-1 rounded mt-2 small">Ph.D. in Education</span>
          </div>

        
          <div className="col-md-8">
            <div className="card-body p-4 p-lg-5">
             
              <div className="text-primary-subtle display-1 lh-1 mb-0 select-none" style={{ fontFamily: "Georgia, serif", marginTop: "-20px" }}>
                “
              </div>
              
              <h2 className="fw-bold text-dark mb-4 mt-n3">Welcome to our Academic Family</h2>
              
              <p className="card-text text-secondary lh-lg mb-4">
                "At Techno High School, we firmly believe that education is not just about learning facts, but rather training the mind to think critically. Our mission is to nurture the leaders, innovators, and empathetic citizens of tomorrow."
              </p>
              
              <p className="card-text text-secondary lh-lg mb-4">
                Our exceptionally dedicated faculty, combined with state-of-the-art digital infrastructure, ensures that every single student receives a holistic education. We focus equally on academic excellence, co-curricular talents, and strong moral values, preparing them thoroughly for the global challenges ahead.
              </p>

          
              <div className="mt-4 pt-3 border-top border-light">
                <p className="fst-italic text-dark mb-0 fw-semibold">Warm Regards,</p>
                <p className="fw-bold text-primary mb-0 fs-5 mt-1">Dr. Jane Doe</p>
                <p className="text-muted small mb-0">M.A., B.Ed., Ph.D.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;