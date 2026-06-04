import React from "react";

const DirectorSection = () => {
  return (
    <section id="director-section" className="py-5 bg-light">
      <div className="container">
        <div
          className="card border-0 shadow-lg overflow-hidden mx-auto"
          style={{ maxWidth: "1100px", borderRadius: "20px" }}
        >
          <div className="row g-0 align-items-center">
            {/* Director Image */}
            <div className="col-lg-4 col-md-5">
              <div
                className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-4 bg-white"
                style={{ minHeight: "500px" }}
              >
                <img
                  src="/assets/image/dircterimg.jpeg"
                  alt="Director"
                  className="img-fluid rounded-circle shadow director-image"
                />

                <h4 className="fw-bold mt-4 mb-1 text-dark">
                  P. D. Kumawat 
                </h4>

                <p className="text-muted mb-2">
                  Director, Techno High School
                </p>

                <span className="badge bg-success px-3 py-2">
                  MBA, Ph.D. in Leadership
                </span>
              </div>
            </div>

            {/* Director Message */}
            <div className="col-lg-8 col-md-7">
              <div className="card-body p-4 p-lg-5">
                <div
                  className="display-1 text-success opacity-25 fw-bold"
                  style={{
                    fontFamily: "Georgia, serif",
                    lineHeight: "0.8",
                  }}
                >
                  “
                </div>

                <h2 className="fw-bold mb-4 text-dark">
                  Director's Message
                </h2>

                <p className="text-secondary lh-lg mb-4">
                  Welcome to Techno High School. Education is not merely about
                  acquiring knowledge; it is about building character,
                  developing confidence, and preparing students to face the
                  challenges of an ever-evolving world.
                </p>

                <p className="text-secondary lh-lg mb-4">
                  At Techno High School, we are committed to providing a
                  nurturing environment where students can explore their
                  potential, think creatively, and grow into responsible global
                  citizens. Through innovative teaching methods, modern
                  technology, and a strong value system, we strive to create a
                  foundation for lifelong success.
                </p>

                <p className="text-secondary lh-lg mb-4">
                  Our dedicated faculty, state-of-the-art facilities, and focus
                  on holistic development ensure that every child receives the
                  guidance and opportunities needed to excel academically,
                  socially, and personally.
                </p>

                <div className="border-top pt-4 mt-4">
                  <p className="mb-1 fw-semibold">Best Wishes,</p>

                  <h5 className="fw-bold text-success mb-1">
                      P. D. Kumawat
                  </h5>

                  <p className="text-muted mb-0">
                    Director, Techno High School
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

export default DirectorSection;