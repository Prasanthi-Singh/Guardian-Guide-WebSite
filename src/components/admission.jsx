import React from "react";
import "./admission.css";

export default function Admission() {
  return (
    <div className="admission-page">
      <h1 style = {{textAlign : "center"}}>Admission Details - Session 2025-26</h1>

      {/* Fee Structure Table */}
      <h2>Fee Structure</h2>
<div style={{ overflowX: "auto" }}>
  <table className="fee-table" style={{ minWidth: "800px", borderCollapse: "collapse", width: "100%" }}>
    <thead>
      <tr>
        <th>Class</th>
        <th>Admission Fee</th>
        <th>1st Quarter<br />(New Students)</th>
        <th>1st Quarter<br />(Old Students)</th>
        <th>2nd Quarter</th>
        <th>3rd Quarter</th>
        <th>Total Fee<br />(Old Students)</th>
        <th>Total Fee<br />(New Students)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nursery</td>
        <td>5000</td>
        <td>1650</td>
        <td>4950</td>
        <td>4950</td>
        <td>4950</td>
        <td>16500</td>
        <td>21500</td>
      </tr>
      <tr>
        <td>LKG / UKG</td>
        <td>5000</td>
        <td>1800</td>
        <td>4950</td>
        <td>4950</td>
        <td>5400</td>
        <td>18300</td>
        <td>24000</td>
      </tr>
      <tr>
        <td>1 to 5</td>
        <td>7000</td>
        <td>2150</td>
        <td>6450</td>
        <td>6450</td>
        <td>6450</td>
        <td>21500</td>
        <td>28500</td>
      </tr>
      <tr>
        <td>6 to 8</td>
        <td>8000</td>
        <td>2300</td>
        <td>7200</td>
        <td>7200</td>
        <td>7200</td>
        <td>23800</td>
        <td>31800</td>
      </tr>
      <tr>
        <td>9 & 10</td>
        <td>9000</td>
        <td>2400</td>
        <td>7800</td>
        <td>7800</td>
        <td>7800</td>
        <td>26000</td>
        <td>35000</td>
      </tr>
      <tr>
        <td>11 & 12</td>
        <td>9000</td>
        <td>2800</td>
        <td>8400</td>
        <td>8400</td>
        <td>8400</td>
        <td>28000</td>
        <td>37000</td>
      </tr>
    </tbody>
  </table>
</div>


      {/* Free Kit */}
      <h2>Free Kit on Admission</h2>
      <ul>
        <li>Three sets of School Uniform with Ties & Belts and one set sports dress</li>
        <li>A School Bag</li>
        <li>Complete set of Books</li>
        <li>Pencil, Eraser, & Sharpener to all Pre-Primary Students for the whole year</li>
      </ul>

      {/* Required Documents */}
      <h2>Required Documents for Admission</h2>
      <h3>For Class Nursery to 1st:</h3>
      <ul>
        <li>Birth Certificate</li>
        <li>Samagra ID</li>
        <li>Student Photo (Latest Passport Size)</li>
        <li>Photocopy of Bank Passbook and Aadhar Card</li>
        <li>Pen number</li>
        <li>Apaar ID</li>
      </ul>
      <h3>For Class 2nd to 12th:</h3>
      <ul>
        <li>Counter Signed TC in Original</li>
        <li>Photocopy of Highest Passed Class Marksheet</li>
        <li>Samagra ID</li>
        <li>Student Photo (Latest Passport Size)</li>
        <li>Photocopy of Bank Passbook and Aadhar Card</li>
        <li>Caste Certificate (SC/ST/OBC Category)</li>
        <li>Migration Certificate for students from other boards in Classes 11th & 12th</li>
        <li>Pen number</li>
        <li>Apaar ID</li>
      </ul>

      {/* Required Age */}
      <h2>Required Age for Admission</h2>
      <table className="age-table">
        <tbody>
          <tr>
            <td>Nursery</td>
            <td>Between 3 and 4.5 Years</td>
          </tr>
          <tr>
            <td>LKG</td>
            <td>Between 4 and 5.5 Years</td>
          </tr>
          <tr>
            <td>UKG</td>
            <td>Between 5 and 6.5 Years</td>
          </tr>
          <tr>
            <td>Standard 1st</td>
            <td>Between 6 and 7.5 Years</td>
          </tr>
        </tbody>
      </table>

      {/* Attraction in KGs */}
      <h2>Attractions in KGs</h2>
      <ul>
        <li>Air Conditioned Class Room</li>
        <li>Smart Televisions for Audio Visual Class</li>
        <li>Variety of toys (King Size Fruit Puzzle, Fruit Tray, Doll House, Ball Pool, Rockers, Slide, Abacus, Toy Caterpillar, Cradle and many more)</li>
        <li>Comfortable Furniture meant for toddlers</li>
        <li>Homely Atmosphere</li>
      </ul>

      {/* Subject Code List */}
      <h2>Higher Secondary School Certificate - Subject Code List (2023-24)</h2>
      <div className="subject-table-wrapper">
        <table className="subject-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Language</td>
              <td>Any two: 051 Hindi, 052 English, 053 Sanskrit, 054 Marathi, 055 Urdu</td>
            </tr>
            <tr>
              <td>Science Maths Group (Code 2)</td>
              <td>210 Physics, 220 Chemistry, 150 Mathematics</td>
            </tr>
            <tr>
              <td>Commerce Group (Code 3)</td>
              <td>310 Business Studies, 320 Book Keeping & Accountancy + One subject from (150 Mathematics, 151 Informatics Practices, 140 Economics)</td>
            </tr>
            <tr>
              <td>Science Bio Group (Code 7)</td>
              <td>210 Physics, 220 Chemistry, 231 Biology</td>
            </tr>
            <tr>
              <td>Agriculture Group (Code 4)</td>
              <td>410 Element of Science & Maths Useful for Agriculture, 420 Crop Production & Horticulture, 430 Animal Husbandry, Milk trade, Poultry farming & Fishery</td>
            </tr>
            <tr>
              <td>Fine Art Group (Code 5)</td>
              <td>510 Drawing & Painting, 520 Still life & Design, 530 History of Indian Art & World Art</td>
            </tr>
            <tr>
              <td>Additional Subject (Optional)</td>
              <td>820 Book Keeping & Accountancy, 831 Biology, 832 Biotechnology, 833 Physical Education, 850 Mathematics, 151 Informatics Practices</td>
            </tr>
            <tr>
              <td>Vocational Subjects (Optional)</td>
              <td>Beauty & Wellness, Retail, Health Care, Agriculture, Plumber, Electronics Hardware, Agriculture (Technical), Media & Entertainment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
