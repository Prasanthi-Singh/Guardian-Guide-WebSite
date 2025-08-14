import React, {useState} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-header">
      <div className="container nav-inner">
        <div className="brand">
          <img src="/images/logo.jpg" alt="logo" className="logo" />
          <div className="brand-text">
            <div className="title">Guardian & Guide</div>
            <div className="subtitle">Public School</div>
          </div>
        </div>
        <nav className={`nav ${open? 'open':''}`}>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/admission">Admission</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/branch">Our Branch</Link></li>
        </nav>
        <button className="hamburger" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
    </header>
  )
}
