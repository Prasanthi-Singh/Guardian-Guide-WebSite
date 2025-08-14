import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Event icon
import "./NewsSection.css";

const events = [
  {
    title: "Sports Week",
    img: "/images/sports-week.jpeg",
    description:
      "A week full of competitive sports events including athletics, football, and indoor games. Students from all grades participate."
  },
  {
    title: "Annual Function Day",
    img: "/images/annual-function.jpeg",
    description:
      "A grand celebration showcasing cultural performances, awards, and student achievements throughout the year."
  },
  {
    title: "Kargil Divas",
    img: "/images/kargil-divas.jpeg",
    description:
      "A tribute to the heroes of the Kargil War, with special assemblies and patriotic performances."
  },
  {
    title: "Vidhya Raman",
    img: "/images/vidhya-rambam.jpeg",
    description:
      "A traditional event marking the auspicious start of the academic year with prayers and blessings."
  }
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="events-section" style={{padding: '2rem',marginBottom: '10px', marginTop : "10px" ,  border : "1px solid #e8e8e8" , backgroundColor : "white"}}>
      <div style={{ display: "flex" , gap : "8px", marginBottom : "10px"}}>
        <FaCalendarAlt style={{ color: "#E6BE8A", fontSize: "1.5rem" }} />
        <h2 style={{ margin: 0 , color : "#ff5722" }}>EVENTS</h2>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card"
            onClick={() => setSelectedEvent(event)}
          >
            <img src={event.img} alt={event.title} className="event-image" />
            <div className="overlay">
              <h3>{event.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="modal" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <img
              src={selectedEvent.img}
              alt={selectedEvent.title}
              className="modal-image"
            />
            <p>{selectedEvent.description}</p>
            <button onClick={() => setSelectedEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
