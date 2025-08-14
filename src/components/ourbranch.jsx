import React from "react";
import "./OurBranch.css";

const OurBranch = () => {
  const images = [
    "/images/gangapuram/1.jpeg",
    "/images/gangapuram/2.jpeg",
    "/images/gangapuram/3.jpeg",
    "/images/gangapuram/4.jpeg",
    "/images/gangapuram/5.jpeg",
    "/images/gangapuram/6.jpeg",
  ];

  return (
    <div className="our-branch">
      {/* Heading */}
      <h2 className="branch-title">Our Branch</h2>

      {/* About Section */}
      <div className="branch-about">
        <p>
        Welcome to our branch!
        Situated in a peaceful and developing area of Satna, our branch currently offers classes from Nursery to Class VII. Our objectives and mission remain unchanged — we are committed to maintaining the same high standards of discipline and academic excellence that define our institution.
        </p>
      </div>

      {/* Location Section */}
      <div className="branch-location">
  <h3>📍 Location</h3>
  <div className="location-content">
    <iframe
      title="branch-location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.2337922021277!2d80.81694973972026!3d24.550190654289803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f5c54ddbb03%3A0x8377f0feab4a42eb!2sGangapuram%20park%20no%201!5e0!3m2!1sen!2sin!4v1755192844035!5m2!1sen!2sin"
      loading="lazy"
    ></iframe>
    
    <img
      src="/images/branch.jpeg"
      alt="Our School"
      className="school-image"
    />
  </div>
</div>


      {/* Photo Gallery */}
      <h3 className="gallery-title">📸 Photo Gallery</h3>
      <div className="photo-gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item_1">
            <img src={img} alt={`Branch ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBranch;
