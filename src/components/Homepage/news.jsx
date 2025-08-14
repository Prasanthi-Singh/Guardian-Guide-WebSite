import React from 'react';

const HomeNewsHighlights = () => {
  return (
    <section style={{ display: 'flex', gap: '2rem', padding: '2rem', maxWidth: '1200px', margin: 'auto' , border : "1px solid #e8e8e8" , backgroundColor : "white"}}>
      
      {/* News Section */}
      <div style={{ flex: 2 }}>
        <h2 style={{ color: '#ff5722', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🏛 NEWS
        </h2>

        <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Pitcher Breaking Competition</h3>
          <p style={{ color: 'tomato', fontStyle: 'italic' }}>Saturday, 16 August 2025</p>
          <p>Join us for the fun-filled Pitcher Breaking competition! All students are welcome.</p>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3 style={{ fontWeight: 'bold' }}>Independence Day Celebration</h3>
          <p style={{ color: 'tomato', fontStyle: 'italic' }}>Friday, 15 August 2025</p>
<p>Join us for the Independence Day celebration, including the <strong>flag hoisting at 9:00 AM</strong>.</p>

        </div>
      </div>

      {/* Highlights Section */}
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#ff5722', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🎖 HIGHLIGHTS
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <a href="/pdfs/10TH RESULT.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#d32f2f', textDecoration: 'none' }}>
              📄 Class X Results 2025
            </a>
          </li>
          <li>
            <a href="/pdfs/12TH RESULT.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#d32f2f', textDecoration: 'none' }}>
              📄 Class XII Results 2025
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default HomeNewsHighlights;
