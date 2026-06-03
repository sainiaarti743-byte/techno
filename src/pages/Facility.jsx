import React from "react";

const Facility = () => {
  const facilitiesData = [
    {
      title: "Modern Classrooms",
      description: "Air-conditioned smart classrooms equipped with projectors and digital learning tools to make studying interactive.",
      icon: "🏫",
      image: "assets/image/bannerimg4.jpeg", 
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art physics, chemistry, and biology labs with modern equipment to promote hands-on practical learning.",
      icon: "🔬",
      image: "assets/image/bannerimg3.jpeg", 
    },
    {
      title: "Advanced Computer Labs",
      description: "High-speed internet enabled labs with latest software systems to keep students ahead in technology and coding.",
      icon: "💻",
      image: "assets/image/bannerimg3.jpeg", 
    },
    {
      title: "Resourceful Library",
      description: "A peaceful reading zone with thousands of academic books, journals, novels, and digital e-learning subscriptions.",
      icon: "📚",
      image: "assets/image/bannerimg1.jpeg", 
    },
    {
      title: "Sports Facilities",
      description: "Spacious playground and indoor sports complex for cricket, football, basketball, and overall physical fitness.",
      icon: "⚽",
      image: "assets/image/school7.jpeg", 
    },
    {
      title: "Transport & Safety",
      description: "GPS-enabled school buses covering all major routes, managed with strict security protocols and CCTV surveillance.",
      icon: "🚌",
      image: "assets/image/school8.jpeg", 
    },
  ];

  return (
    <div className="container py-5 mt-5" id="facility">
      {/* Header Section */}
      <div className="text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="fw-bold text-primary mb-3">Our Campus Facilities</h1>
        <p className="text-muted lead">
          At Techno High School, we offer a world-class infrastructure and a wide range of top-notch facilities to support our students' academic excellence and personal growth.
        </p>
        <div className="mx-auto bg-primary rounded" style={{ width: "60px", height: "4px" }}></div>
      </div>

      {/* Facilities Alternate Rows Layout */}
      <div className="vstack gap-5">
        {facilitiesData.map((facility, index) => {
          // Yeh logic check karega ki row even hai ya odd, taaki left-right swap ho sake
          const isEven = index % 2 === 0;

          return (
            <div className="card border-0 shadow-sm overflow-hidden bg-light" key={index}>
              <div className={`row g-0 align-items-center ${isEven ? "" : "flex-row-reverse"}`}>
                
                {/* Image Column */}
                <div className="col-12 col-md-6">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="img-fluid w-100"
                    style={{ height: "320px", objectFit: "cover" }}
                  />
                </div>

                {/* Content Column */}
                <div className="col-12 col-md-6">
                  <div className="p-4 p-lg-5">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="fs-2 bg-white p-2 rounded-3 shadow-sm">{facility.icon}</span>
                      <h3 className="fw-bold text-dark mb-0">{facility.title}</h3>
                    </div>
                    <p className="text-secondary lh-lg fs-6 mb-0">
                      {facility.description}
                    </p>
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