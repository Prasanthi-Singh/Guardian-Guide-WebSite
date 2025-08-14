import React from 'react';
import './AboutSchool.css';

export default function AboutSchool() {
  return (
    <section className="about-school">
      <h1 className="main-title">About the School</h1>

      {/* School Image */}
      <div className="school-image_1">
        <img src="/images/About_School.jpeg" alt="School Building" />
      </div>

      {/* Genesis and Inspiration */}
      <div className="section">
        <h2>Genesis and Inspiration</h2>
        <p>
          The Guardian and Guide Public Higher Secondary School was initiated on
          Auspicious tithi of Akshya Tritiya on 15 May 2002.
        </p>
        <p>
          "Character Development with Academic Excellence", has been the governing
          principle of all endeavours in the school. The school at every step, big or small,
          is guided by the comprehensive educational philosophy of Bhagawan Baba who
          emphatically advocates "Education should be for life; not for mere living".
        </p>
      </div>

      {/* Mission */}
      <div className="section">
        <h2>Mission</h2>
        <p>
          The relentless pursuit of the school has been:
        </p>
        <ul>
          <li>To lay the foundation of a noble character in the young minds by instilling in them the eternal and universal values of brotherhood, patriotism, sacrifice and moral integrity.</li>
          <li>To help them grow as ideal leaders who can shape the destiny of the nation and the world.</li>
        </ul>
      </div>

      {/* Objectives */}
      <div className="section">
        <h2>Objectives</h2>
        <p>
          True education should produce a balanced personality in whom intellectual,
          emotional, and spiritual values are harmoniously developed. Therefore, all
          learning programmes in the school are structured to inculcate:
        </p>
        <ul>
          <li>Self-confidence with faith in God.</li>
          <li>Academic Excellence.</li>
          <li>Communication and social skills along with analytical abilities.</li>
          <li>Maintenance of a well-nourished, healthy, and agile physique.</li>
          <li>Affinity towards a disciplined and regulated life.</li>
          <li>Value of selfless service to the society.</li>
          <li>Harmonising positive thoughts, words, and actions.</li>
          <li>Respect towards Indian culture and way of life.</li>
          <li>Reverence for parents, elders, and dignity of all men.</li>
        </ul>
      </div>

      {/* Affiliation */}
      <div className="section">
        <h2>Affiliation</h2>
        <p>
          This school is an English Medium School for boys and girls affiliated to the
          Board of Secondary Education M.P. Bhopal. It consists of classes from Nur to XII.
          The syllabi and textbooks followed at the school are prescribed and recommended
          by the National Council of Education Research and Training.
        </p>
      </div>

      {/* Location */}
      <div className="section">
        <h2>Location</h2>
        <p>The school is located at Bank Colony, Bharahut Nagar, Satna.</p>
        <div className="map-container">
        <div style={{ width: '100%', maxWidth: '1200px', margin: 'auto' }}>

  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.312260146639!2d80.84291487502992!3d24.578417478114513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847fa82f3c7845%3A0x3f638a4ef80c9226!2sGuardian%20And%20Guide%20Hr.%20Sec%20School!5e0!3m2!1sen!2sin!4v1755082375005!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</div>

        </div>
      </div>
    </section>
  );
}
