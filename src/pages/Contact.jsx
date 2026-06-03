import React from "react";

const Contact = () => {
  return (
   
    <div className="container py-5">
     
      <h1 className="text-center mb-4">Contact Us</h1>
      
     
      <form className="mx-auto" style={{ maxWidth: "500px" }}>
 
        <div className="mb-3">
         
          <label htmlFor="name" className="form-label">Name:</label>
         
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
     
          <textarea className="form-control" id="message" name="message" rows="4" placeholder="Write your message here..." required></textarea>
        </div>

       
        <button type="submit" className="btn btn-primary w-100 py-2">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;