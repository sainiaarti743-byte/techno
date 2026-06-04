import React from "react";

const PrincipalMessage = () => {
  return (
    <section id="principal-message" className="py-5 bg-white">
      <div className="container">
        <div
          className="card border-0 shadow-lg overflow-hidden mx-auto"
          style={{ maxWidth: "1100px", borderRadius: "20px" }}
        >
          <div className="row g-0 align-items-center">
            {/* Principal Image */}
            <div className="col-lg-4 col-md-5">
              <div
                className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-4 bg-light"
                style={{ minHeight: "500px" }}
              >
                <img
                  src="/assets/image/principle.jpeg"
                  alt="Principal"
                  className="img-fluid rounded-circle shadow principal-image"
                />

                <h4 className="fw-bold mt-4 mb-1 text-dark">
                 Abhiraj Singh Rathore
                </h4>

                <p className="text-muted mb-2">
                  Principal, Techno High School
                </p>

                <span className="badge bg-primary px-3 py-2">
                  M.A., B.Ed., Ph.D.
                </span>
              </div>
            </div>

            {/* Message Content */}
            <div className="col-lg-8 col-md-7">
              <div className="card-body p-4 p-lg-5">
                <div
                  className="display-1 text-primary opacity-25 fw-bold"
                  style={{
                    fontFamily: "Georgia, serif",
                    lineHeight: "0.8",
                  }}
                >
                  “
                </div>

                <h2 className="fw-bold mb-4 text-dark">
                  Principal's Message
                </h2>

                <p className="text-secondary lh-lg mb-4">
                  Welcome to Techno High School. We believe that education is
                  the foundation upon which dreams are built and futures are
                  shaped. Our goal is to provide every student with an
                  environment that encourages curiosity, creativity, confidence,
                  and lifelong learning.
                </p>

                <p className="text-secondary lh-lg mb-4">
                  Through academic excellence, innovative teaching methods, and
                  a strong focus on values, we prepare students to meet the
                  challenges of the modern world. We encourage our learners to
                  think critically, communicate effectively, and develop the
                  leadership qualities necessary for success.
                </p>

                <p className="text-secondary lh-lg mb-4">
                  At Techno High School, we are committed to nurturing young
                  minds and helping every child achieve their fullest potential
                  in academics, sports, cultural activities, and personal
                  development.
                </p>

                <div className="border-top pt-4 mt-4">
                  <p className="mb-1 fw-semibold">
                    Warm Regards,
                  </p>

                  <h5 className="fw-bold text-primary mb-1">
                    Dr. Jane Doe
                  </h5>

                  <p className="text-muted mb-0">
                    Principal, Techno High School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;