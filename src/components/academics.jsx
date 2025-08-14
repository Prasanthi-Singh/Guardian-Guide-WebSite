import React from "react";
import "./academics.css";

const Academics = () => {
  const excellenceImages = [
    "/images/excellence5.jpeg",
    "/images/excellence6.jpeg",
    "/images/excellence4.jpeg",
    "/images/excellence2.jpeg",
    "/images/excellence1.jpeg",
    "images/excellence3.jpeg"
    
  ];

  const scienceData = [
    ["2011-12", "Sachin Dev Sharma", "500/437", "87.6%"],
    ["2012-13", "Gaurav Patul", "500/443", "88.6%"],
    ["2013-14", "Divya Singh Dikhit", "500/448", "89.6%"],
    ["2014-15", "Swati Singh", "500/441", "88.2%"],
    ["2015-16", "Anika Singh", "500/438", "87.6%"],
    ["2016-17", "Akanksha Soni", "500/442", "88.4%"],
    ["2017-18", "Pratiksha Tiwari / Sohit Tiwari", "500/437 / 450", "87.4% / 90%"],
    ["2018-19", "Sonam Singh", "500/447", "89.4%"],
    ["2019-20", "Shivani Singh", "500/449", "89.8%"],
    ["2020-21", "Tushar Chaurasiya", "500/483", "96.6%"],
    ["2021-22", "Manshi Tiwari", "500/487", "97.4%"],
    ["2022-23", "Poornima Chaturvedi", "500/466", "93.2%"],
    ["2023-24", "Aryan Mishra", "500/475", "95%"],
    ["2024-25", "Ishika Shrivastava", "500/475", "95%"],
  ];

  const commerceData = [
    ["2011-12", "Himanshu Dhawai", "500/343", "68.6%"],
    ["2012-13", "Urmila Soni", "500/399", "79.9%"],
    ["2013-14", "Ravi Shankar Singh", "500/373", "74.6%"],
    ["2014-15", "Priya Kotwani", "500/394", "78.8%"],
    ["2015-16", "Atishay Agrawal", "500/424", "84.8%"],
    ["2016-17", "Anjali Khatri", "500/438", "87.6%"],
    ["2017-18", "Neha Agrawal", "500/455", "91%"],
    ["2018-19", "Shikha S. Parihar", "500/400", "80%"],
    ["2019-20", "Ankita Gupta", "500/481", "96.2%"],
    ["2020-21", "Sanjay Singh", "500/462", "92.4%"],
    ["2021-22", "Rani Payasi", "500/451", "90.2%"],
    ["2022-23", "Rimjhim Singh", "500/469", "93.8%"],
    ["2023-24", "Sneha Singh", "500/468", "93.6%"],
    ["2024-25", "Sanat Tiwari", "500/457", "91.4%"],
  ];

  const highSchoolData = [
    ["2008-09", "Nupur Harichandani", "600/467", "77.83%"],
    ["2009-10", "Sachin Dev Sharma", "600/532", "88.6%"],
    ["2010-11", "Gaurav Patul", "600/533", "88.83%"],
    ["2011-12", "Krishna Kr. Soni", "600/538", "89.6%"],
    ["2012-13", "Shivani Gupta", "600/557", "92.83%"],
    ["2013-14", "Anjali Khatri", "600/555", "92.5%"],
    ["2014-15", "Prakash Singh", "600/554", "92.33%"],
    ["2015-16", "Shivani Gupta", "600/520", "86.6%"],
    ["2016-17", "Prakash Singh", "600/482", "80.33%"],
    ["2017-18", "Sanjay Singh", "500/492", "98.4%"],
    ["2018-19", "Adarsh Tripathi", "500/485", "97%"],
    ["2019-20", "Shrajal Tiwari", "500/482", "96.4%"],
    ["2020-21", "Atul Shukla", "500/484", "96.8%"],
    ["2021-22", "Atul Shukla", "500/484", "96.8%"],
    ["2022-23", "Manshi Tiwari", "500/479", "95.8%"],
    ["2023-24", "Manshi Tiwari", "500/489", "97.8%"],
  ];

  return (
    <div className="academics-page">
      <h1 className="page-title">Academic Excellence</h1>

      {/* Image Gallery */}
      {/* Image Gallery */}
<div className="gallery">
  {/* Row 1 - 4 equal images */}
  <div className="row row-4">
    <img src="/images/excellence2.jpeg" alt="Excellence 2" />
    <img src="/images/excellence6.jpeg" alt="Excellence 6" />
    <img src="/images/excellence4.jpeg" alt="Excellence 4" />
    <img src="/images/excellence5.jpeg" alt="Excellence 5" />
  </div>

  {/* Row 2 - vertical + two stacked horizontals */}
  <div className="row row-mix">
    <img className="vertical" src="/images/excellence3.jpeg" alt="Excellence 3" />
    <div className="horizontal-stack">
      <img src="/images/excellence1.jpeg" alt="Excellence 1" />
      <img src="/images/excellence7.jpeg" alt="Excellence 7" /> {/* New horizontal image */}
    </div>
  </div>
</div>


      {/* Science Table */}
      <h2>Science Toppers</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {scienceData.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Commerce Table */}
      <h2>Commerce Toppers</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {commerceData.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* High School Table */}
      <h2>High School Toppers</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {highSchoolData.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Academics;
