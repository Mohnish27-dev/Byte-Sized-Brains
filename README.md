<div align="center">
  <h1>🚀 RescueBite - Fighting Hunger, Reducing Waste</h1>
  <p>Bridging the gap between food donors and charities to reduce food waste and combat hunger</p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Frontend-HTML/CSS/JS-orange" alt="Frontend">
    <img src="https://img.shields.io/badge/Backend-Node.js/Express-green" alt="Backend">
    <img src="https://img.shields.io/badge/Database-MongoDB-blue" alt="Database">

  </p>
  
  <!-- Quick Links -->
  <h2>📌 Quick Links</h2>
  <p>
    <a href="#">
      <img src="https://img.shields.io/badge/Presentation-PPT-blue?style=for-the-badge&logo=microsoft-powerpoint" alt="PPT">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/Video-Pitch-red?style=for-the-badge&logo=youtube" alt="Video Pitch">
    </a>
  </p>
  
  <img src="https://www.shutterstock.com/shutterstock/photos/1912062127/display_1500/stock-vector-food-donation-banner-or-poster-design-with-cartoon-characters-of-volunteers-flat-vector-1912062127.jpg" alt="RescueBite Banner" width="800">
</div>

## 📖 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Setup & Installation](#%EF%B8%8F-setup--installation)
- [🔄 Workflow](#-workflow)
- [🗃️ Database Schema](#%EF%B8%8F-database-schema)
- [🖼️ Screenshots](#%EF%B8%8F-screenshots)
- [🤝 Contributing](#-contributing)


## ✨ Features
- **User Authentication**: Secure login/signup for donors and recipients
- **Personalized Dashboards**: Custom interfaces for donors and charities
- **Food Posting**: Donors can easily post surplus food details
- **Real-time Updates**: Instant notifications for available food
- **Responsive Design**: Works on all device sizes
- **MongoDB Integration**: Efficient data storage and retrieval

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<h3>Backend</h3>
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mongoose">
</p>

<hr>


**Database**:
 <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
- MongoDB (with Mongoose ODM)

## 📂 Project Structure
<pre>
Project Byteverse/
├── frontend/
│ ├── home.html
│ ├── login.html
│ ├── dashboard.html
│ ├── thankyou.html
│ ├── donor-dashboard.html
│ ├── recipient-dashboard.html
│ ├── about.html
│ ├── donor.html
│ ├── recipient.html
│ ├── terms and condition.html
│ └── js/
│ ├── dashboard.js
│ ├── donor-dashboard.js
│ ├── donor.js
│ ├── login.js
│ └── recipient-dashboard.js
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── routes/
│ │ ├── food.js
│ │ ├── register.js
│ │ └── login.js
│ └── models/
│ ├── food_data.js
│ └── registration_data.js
└── assets/
├── images/
└── icons/
</pre>

<h2>⚙️ Setup & Installation</h2>


<ol>
  <li><strong>Clone the repository</strong>
    ```bash
    <pre>git clone https://github.com/Mohnish27-dev/Project-Byteverse.git
cd Project Byteverse/pre>
  </li>
  <li><strong>Install dependencies</strong>
    <pre>npm install</pre>
    <pre>npm install cors mongoose express</pre
  </li>
  <li><strong>Start the development server</strong>
    <pre>node server.js</pre>
  </li>
  <li><strong>Access the app</strong><br>
    Open <code>http://localhost:3000</code> in your browser.
  </li>
</ol>

<hr>

<h2>📊 Database Schema (MongoDB)</h2>

<pre>
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  
});
</pre>
<pre>

  const foodSchema=new mongoose.Schema({
  name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    category: {
        type: String,
        required: true,
    },
    expirydate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    }
  })
</pre>

<hr>

<h2>📸 Screenshots</h2>

<table>
  <tr>
    <th>Homepage</th>
    <th>SignUp Page</th>
    <th>Dashboard</th>
    <th>Donate</th>
    <th>About</th>
  </tr>
  <tr>
    <td><img src="https://github.com/Mohnish27-dev/Byte-Sized-Brains/blob/main/Project%20Byteverse/asessts/home.png" height="800" width="400" alt="Homepage"></td>
    <td><img src="https://github.com/Mohnish27-dev/Byte-Sized-Brains/blob/main/Project%20Byteverse/asessts/signup.png"  height="400" width="500" alt="SignUp"></td>
    <td><img src="https://github.com/Mohnish27-dev/Byte-Sized-Brains/blob/main/Project%20Byteverse/asessts/dashboard.png"  height="800" width="500" alt="Dashboard"></td>
    <td><img src="https://github.com/Mohnish27-dev/Byte-Sized-Brains/blob/main/Project%20Byteverse/asessts/donate.png"  height="400" width="400" alt="Donate"></td>
    <td><img src="https://github.com/Mohnish27-dev/Byte-Sized-Brains/blob/main/Project%20Byteverse/asessts/about.png" height="800" width="400" alt="About"></td>
  </tr>
</table>

<hr>

## 🚀 Usage

<div align="center">
  <h3>How to Use RescueBite Platform</h3>
</div>

### 👨‍🍳 For Food Donors
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  <ol>
    <li><strong>Register/Login</strong>: Create an account as a food donor</li>
    <li><strong>Post Food</strong>: Fill out the food donation form with details:
      <ul>
        <li>Food type and quantity</li>
        <li>Preparation and expiry times</li>
        <li>Special instructions or allergens</li>
        <li>Pickup location and availability</li>
      </ul>
    </li>
    <li><strong>Manage Donations</strong>:
      <ul>
        <li>View your active donations on dashboard</li>
        <li>Update donation status when claimed</li>
        <li>View recipient details when matched</li>
      </ul>
    </li>
  </ol>
</div>

### 🏛️ For Charities/Recipients
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  <ol>
    <li><strong>Register/Login</strong>: Create an account as a verified food recipient</li>
    <li><strong>Browse Available Food</strong>:
      <ul>
        <li>Search by location, food type, or quantity</li>
        <li>View detailed food information</li>
        <li>Check preparation and expiry times</li>
      </ul>
    </li>
    <li><strong>Request Food</strong>:
      <ul>
        <li>Submit pickup request for desired items</li>
        <li>Coordinate pickup time with donor</li>
        <li>Receive confirmation details</li>
      </ul>
    </li>
  </ol>
</div>

### 🔄 Workflow Diagram
<div align="center">
  <pre>
  ┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│                     │      │                     │      │                     │
│    Food Donor       │─────▶│   RescueBite        │─────▶│  Food Recipient     │
│  (Restaurants/      │      │    Platform        │      │  (Charities/NGOs)   │
│   Individuals)      │◀─────│                     │◀─────│                     │
└─────────────────────┘      └─────────────────────┘      └─────────────────────┘
        │                          │                          │
        │ 1. Posts available food  │ 2. Lists available food  │
        │─────────────────────────▶│─────────────────────────▶│
        │                          │                          │
        │ 6. Receives confirmation │ 5. Updates food status   │
        │◀─────────────────────────│◀─────────────────────────│
        │                          │                          │
        │                          │ 3. Browses & requests    │
        │                          │─────────────────────────▶│
        │                          │                          │
        │                          │ 4. Confirms pickup       │
        │                          │◀─────────────────────────│
</pre>

 
  <p><em>RescueBite platform workflow from donation to distribution</em></p>
   </div>
  <p align="center">Made with ❤️ to reduce food waste and fight hunger</p>


<hr>

<h2>🤝 Contribute</h2>
<p>Feel free to fork, suggest improvements, or report issues!</p>
<p>📧 <strong>Contact</strong>: <a href="mailto:mohnishp.ug24.cs@nitp.ac.in">mohnishp.ug24.cs@nitp.ac.in</a></p>

<div align="center">
  <p><strong>🍲 Share Food, Save Lives! 🌍</strong></p>
</div>

<hr>

