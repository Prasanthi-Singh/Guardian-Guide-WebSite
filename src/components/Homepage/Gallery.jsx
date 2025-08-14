import React from 'react';
import './Gallery.css';

const imgs = ['/images/banner1.jpg','/images/banner2.jpg','/images/banner3.jpg','/images/banner1.jpg'];

export default function Gallery(){
  return (
    <section className="gallery-section">
      <h2 style={{color:'var(--primary)'}}>Gallery</h2>
      <div className="gallery-grid">
        {imgs.map((s,i)=>(
          <div className="gcard" key={i}><img src={s} alt={'g'+i} /></div>
        ))}
      </div>
    </section>
  )
}
