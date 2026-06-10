import React, { useEffect, useState } from "react";

const BASE_URL = "https://technoschool.co.in/admin";
const Image_BASE_URL = "https://technoschool.co.in/admin/public";

const Facility = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/events`)
      .then((res) => res.json())
      .then((data) => setFacilities(data))
      .catch((err) => console.error("Facilities fetch error:", err));
  }, []);

  return (
    <div className="container py-5 mt-5" id="facility">
      {/* Header Section */}
      <div className="text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="fw-bold text-primary mb-3">Our Campus Facilities</h1>
        <p className="text-muted lead">
          At Techno High School, we offer a world-class infrastructure and a wide range of
          top-notch facilities to support our students' academic excellence and personal growth.
        </p>
        <div className="mx-auto bg-primary rounded" style={{ width: "60px", height: "4px" }}></div>
      </div>

      {/* Facilities Alternate Rows Layout */}
      <div className="vstack gap-5">
        {facilities.map((facility, index) => {
          const isEven = index % 2 === 0;

          return (
            <div className="card border-0 shadow-sm overflow-hidden bg-light" key={facility.id}>
              <div className={`row g-0 align-items-center ${isEven ? "" : "flex-row-reverse"}`}>

                {/* Image Column */}
                <div className="col-12 col-md-6">
                  <img
                    src={`${Image_BASE_URL}/${facility.image}`}
                    alt={facility.title}
                    className="img-fluid w-100"
                    style={{ height: "320px", objectFit: "cover" }}
                  />
                </div>

                {/* Content Column */}
                <div className="col-12 col-md-6">
                  <div className="p-4 p-lg-5">
                    <h3 className="fw-bold text-dark mb-3">{facility.title}</h3>
                    <ul className="text-secondary ps-3">
                      {facility.description
                        .split("\n")
                        .filter((line) => line.trim() !== "")
                        .map((line, i) => (
                          <li key={i} className="mb-2 lh-lg fs-6">
                            {line.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facility;