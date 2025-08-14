// AcademicExcellence.js
import React, { useState } from 'react';
import './Academic.css';

const outstandingResults = [
  '/images/excellence1.jpeg',
  '/images/excellence1b.jpeg',
  '/images/excellence1c.jpeg',
];

const topPerformingStudents = [
  '/images/excellence2.jpeg',
  '/images/excellence2b.jpeg',
  '/images/excellence2c.jpeg',
];

function ImageCarousel({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="excellence-carousel">
      <h3>{title}</h3>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={handlePrev}>‹</button>
        <img src={images[currentIndex]} alt={`${title} ${currentIndex + 1}`} />
        <button className="carousel-btn" onClick={handleNext}>›</button>
      </div>
      <p>{`${currentIndex + 1} / ${images.length}`}</p>
    </div>
  );
}

export default function AcademicExcellence() {
  return (
    <section className="academic-excellence">
      <h2>Academic Excellence</h2>
      <div className="excellence-grid">
        <ImageCarousel title="Outstanding Board Results" images={outstandingResults} />
        <ImageCarousel title="Top Performing Students" images={topPerformingStudents} />
      </div>
    </section>
  );
}
