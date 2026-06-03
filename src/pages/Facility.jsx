import React from "react";

const Facility = () => {
 
  const facilitiesData = [
    {
      title: "Modern Classrooms",
      description: "Air-conditioned smart classrooms equipped with projectors and digital learning tools to make studying interactive.",
      icon: "🏫",
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art physics, chemistry, and biology labs with modern equipment to promote hands-on practical learning.",
      icon: "🔬",
    },
    {
      title: "Advanced Computer Labs",
      description: "High-speed internet enabled labs with latest software systems to keep students ahead in technology and coding.",
      icon: "💻",
    },
    {
      title: "Resourceful Library",
      description: "A peaceful reading zone with thousands of academic books, journals, novels, and digital e-learning subscriptions.",
      icon: "📚",
    },
    {
      title: "Sports Facilities",
      description: "Spacious playground and indoor sports complex for cricket, football, basketball, and overall physical fitness.",
      icon: "⚽",
    },
    {
      title: "Transport & Safety",
      description: "GPS-enabled school buses covering all major routes, managed with strict security protocols and CCTV surveillance.",
      icon: "🚌",
    },
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="fw-bold text-primary mb-3">Our Campus Facilities</h1>
        <p className="text-muted lead">
          At Techno High School, we offer a world-class infrastructure and a wide range of top-notch facilities to support our students' academic excellence and personal growth.
        </p>
      </div>

     
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {facilitiesData.map((facility, index) => (
          <div className="col" key={index}>
        
            <div className="card h-100 shadow-sm border-0 bg-light p-3">
              <div className="card-body">
             
                <div className="fs-1 mb-3 text-primary">{facility.icon}</div>
            
                <h5 className="card-title fw-bold text-dark mb-2">
                  {facility.title}
                </h5>
               
                <p className="card-text text-muted small">
                  {facility.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;