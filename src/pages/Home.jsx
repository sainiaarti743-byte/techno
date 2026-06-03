import React from 'react';

const Home = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Content Column */}
            <div className="col-12 col-md-6">
              <div className="welcome-content">
                <h3 className="display-4 fw-bold mb-3 text-dark text-center text-md-start">
                  <span style={{ color: 'teal' }}>Welcome </span>
                  to Techno School
                </h3>
                <p className="lead fs-6 text-secondary lh-lg text-center text-md-start">
                  We're delighted to have you here. At Techno School, learning meets innovation — empowering young
                  minds with the knowledge, skills, and creativity they need to excel in today's digital world. Whether
                  you're here to explore our courses, stay updated with the latest technology trends, or discover new learning
                  opportunities, you're now part of a community that believes in "Educating for a Smarter Tomorrow."
                </p>
                <p className="fw-bold text-center text-md-start" style={{ color: 'teal' }}>
                  Let's grow, learn, and shape the future together!
                </p>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-12 col-md-6 text-center">
              <div className="welcome-img">
                <img 
                  src="assets/image/techno-img1.jpg" 
                  alt="Techno School Campus" 
                  className="img-fluid rounded-3 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center display-4 fw-bold mb-5" style={{ color: 'rgba(34, 56, 121, 0.9)' }}>
            About Us
          </h1>
          
          <div className="row g-4 justify-content-center">
            {/* Mission Card */}
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-3 text-white h-100 text-center shadow" 
                   style={{ background: 'linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)' }}>
                <h3 className="fw-bold border-bottom pb-2 mb-3">Mission</h3>
                <p className="fs-6 lh-base">
                  To provide quality education in English, fostering academic excellence, creativity, and overall
                  development in students. We are committed to nurturing moral values, critical thinking, and a love for lifelong learning,
                  empowering our students to become responsible, confident, and compassionate individuals ready to
                  face the challenges of the future.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-3 text-white h-100 text-center shadow" 
                   style={{ background: 'linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)' }}>
                <h3 className="fw-bold border-bottom pb-2 mb-3">Vision</h3>
                <p className="fs-6 lh-base">
                  To empower students with the knowledge, skills, and values necessary to succeed in an ever-changing
                  world. We envision a school community where curiosity drives learning, creativity is celebrated, and
                  integrity guides every action. Our goal is to inspire lifelong learners who embrace diversity, adapt to challenges, and lead with
                  compassion, making a positive impact both locally and globally.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-3 text-white h-100 text-center shadow" 
                   style={{ background: 'linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)' }}>
                <h3 className="fw-bold border-bottom pb-2 mb-3">Values</h3>
                <p className="fs-6 lh-base">
                  Emphasis on discipline, respect, and responsibility, with a focus on developing well-rounded
                  individuals. We believe in nurturing integrity, empathy, and teamwork, encouraging students to uphold
                  high moral standards and treat others with kindness. Our values foster perseverance, adaptability, and a passion for learning,
                  empowering students to face challenges with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facility" className="py-5 bg-white">
        <div className="container">
          <h1 className="text-center display-4 fw-bold mb-5" style={{ color: 'rgba(34, 56, 121, 0.9)' }}>
            Our Facilities
          </h1>

          <div className="row g-4">
            {/* Infrastructure Card */}
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-3 h-100 shadow-sm border" 
                   style={{ background: 'linear-gradient(135deg, #dbe9f4 0%, #eaf4fb 100%)', transition: 'all 0.3s' }}>
                <h3 className="fw-bold text-center mb-4" style={{ color: '#004c8c' }}>Infrastructure</h3>
                <ul className="text-start ps-3 text-secondary">
                  <li className="mb-2">Well-equipped classrooms, libraries, laboratories, and sports facilities to support holistic development.</li>
                  <li className="mb-2">Modern computer labs and smart learning tools.</li>
                  <li className="mb-2">Spacious playgrounds for physical activities and sports.</li>
                  <li className="mb-2">Safe and comfortable spaces for students.</li>
                  <li className="mb-2">Environment that encourages both academic and extracurricular growth.</li>
                </ul>
              </div>
            </div>

            {/* Resources Card */}
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-3 h-100 shadow-sm border" 
                   style={{ background: 'linear-gradient(135deg, #dbe9f4 0%, #eaf4fb 100%)', transition: 'all 0.3s' }}>
                <h3 className="fw-bold text-center mb-4" style={{ color: '#004c8c' }}>Resources</h3>
                <ul className="text-start ps-3 text-secondary">
                  <li className="mb-2">Access to textbooks, online resources, and educational technology to enhance learning.</li>
                  <li className="mb-2">Well-stocked libraries with a variety of academic materials.</li>
                  <li className="mb-2">Digital content and e-learning platforms for better understanding.</li>
                  <li className="mb-2">Modern learning aids to support interactive and engaging education.</li>
                  <li className="mb-2">Support from qualified teachers and mentors.</li>
                </ul>
              </div>
            </div>

            {/* Sports & Arts Card */}
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-3 h-100 shadow-sm border" 
                   style={{ background: 'linear-gradient(135deg, #dbe9f4 0%, #eaf4fb 100%)', transition: 'all 0.3s' }}>
                <h3 className="fw-bold text-center mb-4" style={{ color: '#004c8c' }}>Sports and Arts</h3>
                <ul className="text-start ps-3 text-secondary">
                  <li className="mb-2">Opportunities for students to participate in sports, music, dance, art, and other creative activities.</li>
                  <li className="mb-2">Platforms to foster creativity and self-expression.</li>
                  <li className="mb-2">Encouragement to participate in competitions and cultural programs.</li>
                  <li className="mb-2">Involvement in community events to build confidence.</li>
                  <li className="mb-2">Activities that promote teamwork and leadership skills.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section id="director-section" className="py-5" 
               style={{ background: 'linear-gradient(135deg, #0B4DA1 0%, #083a7a 100%)' }}>
        <div className="container my-3">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow border border-light-subtle">
                <div className="mb-3" style={{ height: '5px', width: '80px', borderRadius: '999px', background: 'linear-gradient(90deg, #2ec5ff, #6ee7ff)' }}></div>
                <h2 className="display-6 fw-bold text-dark mb-4">Director’s Message</h2>
                <p className="fs-5 text-muted lh-base fst-italic position-relative ps-3 border-start border-4 border-info">
                  Welcome to <strong>Techno School</strong>, where we believe education is the foundation for a bright future.
                  Our mission is to nurture young minds with knowledge, values, and skills that prepare them for life’s challenges.
                  With a dedicated team of teachers, modern facilities, and a focus on both academics and character building,
                  we strive to help every student reach their full potential.
                </p>
                <div className="mt-4 pt-2">
                  <span className="d-block fw-bold text-dark fs-5">Director</span>
                  <span className="text-secondary small">Techno School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal-message" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="p-4 p-md-5 rounded-3 shadow-sm" 
                   style={{ background: 'linear-gradient(135deg, #e6f0ff, #cce0ff)', borderLeft: '8px solid #ffb400' }}>
                <h2 className="fw-bold mb-4" style={{ color: '#003366' }}>Principal’s Message</h2>
                <p className="fs-5 lh-base text-dark text-start">
                  It is my pleasure to welcome you to <strong style={{ color: '#ff8c00' }}>Techno School</strong>, a place where learning is an exciting journey and every child is valued.
                  We believe that education goes beyond books—it is about shaping confident, compassionate, and responsible individuals.
                </p>
                <p className="fs-5 lh-base text-dark text-start">
                  Our team works tirelessly to create a safe, supportive, and inspiring environment where students can explore their talents, think critically, and strive for excellence.
                </p>
                <p className="fs-5 lh-base text-dark text-start">
                  Together with parents and the community, we aim to prepare our students not only for academic success but also to be caring citizens who contribute positively to the world.
                </p>
                <div className="mt-4 pt-2 fw-bold" style={{ color: '#003366' }}>
                  <p className="mb-0">Principal</p>
                  <span className="text-secondary small fw-normal">Techno School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;