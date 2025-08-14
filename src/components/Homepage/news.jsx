import React from 'react';

const HomeNewsHighlights = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: 'auto',
        border: '1px solid #e8e8e8',
        backgroundColor: 'white',
      }}
    >
      {/* News Section */}
      <div style={{ flex: 2, minWidth: '280px' }}>
        <h2
          style={{
            color: '#ff5722',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
          }}
        >
          🏛 NEWS
        </h2>

        <div
          style={{
            border: '1px solid #ddd',
            padding: '1rem',
            marginRight : "1rem",
            marginBottom: '1rem',
            borderRadius: '6px',
          }}
        >
          <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            Pitcher Breaking Competition
          </h3>
          <p style={{ color: 'tomato', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Saturday, 16 August 2025
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Join us for the fun-filled Pitcher Breaking competition! All students are welcome.
          </p>
        </div>

        <div
          style={{
            border: '1px solid #ddd',
            padding: '1rem',
            borderRadius: '6px',
          }}
        >
          <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            Independence Day Celebration
          </h3>
          <p style={{ color: 'tomato', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Friday, 15 August 2025
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Join us for the Independence Day celebration, including the{' '}
            <strong>flag hoisting at 9:00 AM</strong>.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div style={{ flex: 1, minWidth: '280px' }}>
        <h2
          style={{
            color: '#ff5722',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
          }}
        >
          🎖 HIGHLIGHTS
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <a
              href="/pdfs/10TH RESULT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#d32f2f',
                textDecoration: 'none',
                fontSize: '1rem',
                wordWrap: 'break-word',
              }}
            >
              📄 Class X Results 2025
            </a>
          </li>
          <li>
            <a
              href="/pdfs/12TH RESULT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#d32f2f',
                textDecoration: 'none',
                fontSize: '1rem',
                wordWrap: 'break-word',
              }}
            >
              📄 Class XII Results 2025
            </a>
          </li>
        </ul>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            section {
              flex-direction: column;
              padding: 1rem;
            }
            h2 {
              font-size: 1.3rem !important;
            }
            h3 {
              font-size: 1.1rem !important;
            }
            p, a {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HomeNewsHighlights;
