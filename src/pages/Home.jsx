import React,{useEffect,useState} from 'react';
import Banner from './Banner';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const BASE_URL = "https://technoschool.co.in/admin";
const Image_BASE_URL = "https://technoschool.co.in/admin/public";

const Home = () => {

  const [gallery, setGallery] = useState([]);
   const [events, setEvents] = useState([]);
     const [notices, setNotices] = useState([]);
       const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/gallery`)
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((err) => console.error("Gallery fetch error:", err));
  }, []);

  

  useEffect(() => {
    fetch(`${BASE_URL}/api/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Events fetch error:", err));
  }, []);
  useEffect(() => {
    fetch(`${BASE_URL}/api/notices`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => b.is_pinned - a.is_pinned);
        setNotices(sorted);
      })
      .catch((err) => console.error("Notices fetch error:", err));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/api/pages`)
      .then((res) => res.json())
      .then((data) => setPages(data))
      .catch((err) => console.error("Pages fetch error:", err));
  }, []);

  const renderContent = (content) => {
    return content
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((para, i) => (
        <p key={i} className="fs-5 lh-base text-dark text-start">
          {para.trim()}
        </p>
      ));
  };

  const isDirector = (page) =>
    page.title.toLowerCase().includes("director");



 const FacilityCard = ({ event }) => (
    <div
      className="facility-card rounded-4 h-100 shadow border overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #dbe9f4 0%, #eaf4fb 100%)",
      }}
    >
      <img
        src={`${Image_BASE_URL}/${event.image}`}
        alt={event.title}
        className="img-fluid w-100"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="p-4">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#004c8c" }}>
          {event.title}
        </h3>
        <ul className="text-start ps-3 text-secondary">
          {event.description
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <li key={index} className="mb-2">
                {line.trim()}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );




  return (
    <>

      <Banner />

      {/* Quick Stats & Achievements */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-3 bg-white shadow-sm rounded-3 border-top border-4 border-info">
                <h2 className="fw-bold text-dark mb-1">1500+</h2>
                <p className="text-secondary mb-0">Students Enrolled</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 bg-white shadow-sm rounded-3 border-top border-4 border-success">
                <h2 className="fw-bold text-dark mb-1">60+</h2>
                <p className="text-secondary mb-0">Expert Faculty</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 bg-white shadow-sm rounded-3 border-top border-4 border-warning">
                <h2 className="fw-bold text-dark mb-1">25+</h2>
                <p className="text-secondary mb-0">Smart Tech Labs</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3 bg-white shadow-sm rounded-3 border-top border-4 border-danger">
                <h2 className="fw-bold text-dark mb-1">100%</h2>
                <p className="text-secondary mb-0">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section id="notices" className="py-5" style={{ background: "#f0f6ff" }}>
      <div className="container">
        {/* <h2
          className="text-center display-5 fw-bold mb-5"
          style={{ color: "rgba(34, 56, 121, 0.9)" }}
        >
          📋 Notice Board
        </h2> */}

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={notices.length > 1}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5"
        >
          {notices.map((notice) => (
            <SwiperSlide key={notice.id}>
              <div
                className="card border-0 rounded-4 shadow h-100"
                style={{
                  background: notice.is_pinned ? "#fffbea" : "white",
                  minHeight: "200px",
                }}
              >
                {/* Card Header */}
                <div
                  className="px-4 py-2 rounded-top-4 d-flex justify-content-between align-items-center"
                  style={{ background: "rgba(34, 56, 121, 0.9)" }}
                >
                  <span className="text-white fw-semibold" style={{ fontSize: "13px" }}>
                    📌 Notice
                  </span>
                  {notice.is_pinned === 1 && (
                    <span className="badge" style={{ background: "#ff6b35", fontSize: "10px" }}>
                      Pinned
                    </span>
                  )}
                  {new Date(notice.publish_date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
                    <span className="badge" style={{ background: "#28a745", fontSize: "10px" }}>
                      NEW
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Date */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div
                      className="text-center rounded-3 p-2"
                      style={{ background: "rgba(34, 56, 121, 0.1)", minWidth: "55px" }}
                    >
                      <div className="fw-bold" style={{ color: "rgba(34, 56, 121, 0.9)", fontSize: "18px" }}>
                        {new Date(notice.publish_date).getDate()}
                      </div>
                      <div className="text-uppercase" style={{ color: "rgba(34, 56, 121, 0.7)", fontSize: "11px" }}>
                        {new Date(notice.publish_date).toLocaleString("en-IN", { month: "short" })}
                      </div>
                      <div style={{ color: "#888", fontSize: "11px" }}>
                        {new Date(notice.publish_date).getFullYear()}
                      </div>
                    </div>

                    <h6 className="fw-bold mb-0" style={{ color: "#222" }}>
                      {notice.title}
                    </h6>
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                    {notice.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
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
                  src="assets/image/school3.jpeg"
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
        <h1
          className="text-center display-4 fw-bold mb-5"
          style={{ color: "rgba(34, 56, 121, 0.9)" }}
        >
          Our Facilities
        </h1>

        {events.length <= 3 ? (
          // 3 ya kam hain to normal grid
          <div className="row g-4">
            {events.map((event) => (
              <div className="col-12 col-md-4" key={event.id}>
                <FacilityCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          // 3 se zyada hain to Swiper slider
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-5"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <FacilityCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>

      {/* Director's Message */}
      {pages.map((page) =>
        isDirector(page) ? (
          // Director Design
          <section
            key={page.id}
            id="director-section"
            className="py-5"
            style={{
              background: "linear-gradient(135deg, #0B4DA1 0%, #083a7a 100%)",
            }}
          >
            <div className="container my-3">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="bg-white p-4 p-md-5 rounded-4 shadow border border-light-subtle">
                    <div
                      className="mb-3"
                      style={{
                        height: "5px",
                        width: "80px",
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #2ec5ff, #6ee7ff)",
                      }}
                    ></div>
                    <h2 className="display-6 fw-bold text-dark mb-4">
                      {page.title}
                    </h2>
                    <p className="fs-5 text-muted lh-base fst-italic position-relative ps-3 border-start border-4 border-info">
                      {page.content}
                    </p>
                    <div className="mt-4 pt-2">
                      <span className="d-block fw-bold text-dark fs-5">
                        {page.slug}
                      </span>
                      <span className="text-secondary small">Techno School</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Principal / Others Design
          <section
            key={page.id}
            id="principal-message"
            className="py-5 bg-light"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div
                    className="p-4 p-md-5 rounded-3 shadow-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #e6f0ff, #cce0ff)",
                      borderLeft: "8px solid #ffb400",
                    }}
                  >
                    <h2 className="fw-bold mb-4" style={{ color: "#003366" }}>
                      {page.title}
                    </h2>
                    {renderContent(page.content)}
                    <div
                      className="mt-4 pt-2 fw-bold"
                      style={{ color: "#003366" }}
                    >
                      <p className="mb-0">{page.slug}</p>
                      <span className="text-secondary small fw-normal">
                        Techno School
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}


      
{/* School Photo Gallery Section */}
    <section id="gallery" className="py-5 bg-white">
      <div className="container">
        <h2
          className="text-center display-5 fw-bold mb-5"
          style={{ color: "rgba(34, 56, 121, 0.9)" }}
        >
          Our Campus Gallery
        </h2>

        <div className="row g-4">
          {gallery.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
              <div className="position-relative overflow-hidden rounded-3 shadow-sm gallery-hover">
                <img
                  src={`${Image_BASE_URL}/${item.image_path}`}
                  alt={item.category}
                  className="img-fluid w-100"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="p-2 text-center bg-light fw-semibold text-dark border-top">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* Testimonials */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: "rgba(34, 56, 121, 0.9)" }}>What Parents Say</h2>
    <div className="row g-4">
      <div className="col-12 col-md-4">
        <div className="card h-100 border-0 shadow-sm p-4">
          <p className="text-secondary fst-italic">"Techno School has completely changed how my daughter looks at technology. She loves the coding club!"</p>
          <div className="fw-bold mt-3 text-dark">- Sharma Ji (Parent)</div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card h-100 border-0 shadow-sm p-4">
          <p className="text-secondary fst-italic">"The focus on individual attention and smart learning tools makes it the best school in the area."</p>
          <div className="fw-bold mt-3 text-dark">- Amit Verma (Parent)</div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card h-100 border-0 shadow-sm p-4">
          <p className="text-secondary fst-italic">"Great infrastructure and very supportive staff. The safety measures during school hours are commendable."</p>
          <div className="fw-bold mt-3 text-dark">- Neha Singh (Parent)</div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Home;