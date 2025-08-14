import React from 'react';
import './Footer.css';
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Guardian & Guide Public School</div>
        <div>Contact: +91 9425426036 | Email: s.chandramauli@yahoo.com</div>
      </div>
    </footer>
  )
}
