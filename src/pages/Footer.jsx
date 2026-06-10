import React from "react";

const Footer = () => {
    // Dynamically get the current year for a professional touch
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-5 text-white" style={{ backgroundImage: 'linear-gradient(120deg, #106b70 0%, #02357c 100%)' }}>
            <div className="container">
                <div className="row g-4 text-center text-md-start align-items-start">
                    
                    {/* Logo Section */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <img 
                            src="assets/image/Techno_School_logo-removebg-preview.png" 
                            alt="Techno School Logo Footer" 
                            className="img-fluid mb-2"
                            style={{ maxHeight: '120px', width: 'auto' }}
                        />
                        <p className="small text-light-emphasis fst-italic">Educating for a Smarter Tomorrow.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-12 col-sm-6 col-md-4 mb-4 mb-sm-0">
                        <h4 className="h5 fw-bold mb-3" style={{ color: '#30D2BE' }}>Important Links</h4>
                        <ul className="list-unstyled p-0 m-0">
                            <li className="mb-2">
                                <a href="/" className="text-light-emphasis text-decoration-none link-light">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/about" className="text-light-emphasis text-decoration-none link-light">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="/facility" className="text-light-emphasis text-decoration-none link-light">Facilities</a>
                            </li>
                            <li className="mb-2">
                                <a href="/admission" className="text-light-emphasis text-decoration-none link-light">Admission</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-12 col-sm-6 col-md-4">
                        <h4 className="h5 fw-bold mb-3" style={{ color: '#30D2BE' }}>Contact Us</h4>
                        <ul className="list-unstyled p-0 m-0 text-light-emphasis">
                            <li className="mb-2">
                                <strong className="text-white">Call:</strong> <a href="tel:9413700842" className="text-light-emphasis text-decoration-none link-light">9413700842</a>
                            </li>
                            <li className="mb-2">
                                <strong className="text-white">Email:</strong> <a href="mailto:sikartechnoschool@gmail.com" className="text-light-emphasis text-decoration-none link-light">sikartechnoschool@gmail.com</a>
                            </li>
                            <li className="mb-2">
                                <strong className="text-white">Address:</strong> Potliya Bypass Road, kushalgarh (BANSWARA)
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider Line */}
                <hr className="my-4 border-light opacity-25" />

                {/* Copyright bar at the very bottom */}
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="small mb-0 text-light-emphasis">&copy; {currentYear} Techno High School. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;