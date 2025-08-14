import React, { useEffect, useState } from 'react';
import './HeroSlider.css';

const slides = [
  {
    image: '/images/banner4.jpeg',
    title: 'Character Development with Academic Excellence',
  },
  {
    image: '/images/banner2.jpg',
    title: 'Inspiring Young Minds for a Better Tomorrow',
  },
  {
    image: '/images/banner3.jpeg',
    title: 'Education for Life, Not Mere Living',
  },
  {
    image:"/images/banner5.jpeg",
    title: "Empowering Students with Digital Skills for the Future"
  },
  {image:"/images/banner1.jpg",
    title:"Fostering Creativity, Teamwork, and All-Round Excellence"
  }
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div key={i} className={`slide ${i === idx ? 'active' : ''}`}>
          <img src={s.image} alt={`slide-${i}`} />
          <div className="overlay_1">
            <h1>{s.title}</h1>
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === idx ? 'dot active' : 'dot'}
            onClick={() => setIdx(i)}
            aria-label={`slide-${i}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
