<div align="center">
  <h1>🍽️ RescueBite - Fighting Hunger, Reducing Waste 🚀</h1>
  <img src="https://via.placeholder.com/1200x400/4CAF50/FFFFFF?text=FoodShare+-+Share+Food,+Save+Lives" alt="FoodShare Banner">
</div>

<h2>📌 Project Overview</h2>
<p><strong>RescueBite</strong> is a web application designed to bridge the gap between food donors (restaurants, events, households) and charities/NGOs to reduce food waste and combat hunger. The platform allows donors to post surplus food, while recipients can search and schedule pickups efficiently.</p>

<h3>🌟 Key Features (Completed)</h3>
<ul>
  <li>✔ <strong>User Authentication</strong> – Login/Signup (Donors & Recipients)</li>
  <li>✔ <strong>Dashboard</strong> – Personalized dashboard for donors & recipients</li>
  <li>✔ <strong>Database Integration</strong> – MongoDB stores user details (name, email, password)</li>
  <li>✔ <strong>Responsive Frontend</strong> – Built with <strong>HTML, CSS, JavaScript</strong></li>
  <li>✔ <strong>Backend API</strong> – Powered by <strong>Node.js, Express.js, Mongoose</strong></li>
</ul>

<h3>🚧 Upcoming Features (Mid-Evaluation)</h3>
<ul>
  <li>🔹 <strong>Donation Management</strong> – Donors can add food listings</li>
  <li>🔹 <strong>Food Search System</strong> – Charities can find nearby donations</li>
  <li>🔹 <strong>Pickup Scheduling</strong> – Real-time scheduling system</li>
  <li>🔹 <strong>Transaction History</strong> – Track donations & pickups</li>
</ul>

<hr>

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

<h2>📂 Project Structure</h2>

<pre>
Project Byteverse/
├── frontend/          # Static files (CSS, JS, Images)
│   ├── home.html
│   ├── about.html
│   ├── login.html
│   ├── dashboard.html
│   ├── donor-dashboard.html
│   └── recipient-dashboard.html
├── routes/          # Express routes
│   ├── register.js  # Authentication routes
│   └── dashboard.js # Dashboard routes
├── models/          # MongoDB Schemas
│   └── registration.js    # User model
├── server.js           # Main server file
└── package.json     # Dependencies
</pre>

<hr>

<h2>📸 Screenshots</h2>

<table>
  <tr>
    <th>Homepage</th>
    <th>Login Page</th>
    <th>Dashboard</th>
  </tr>
  <tr>
    <td><img src="https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Home" alt="Homepage"></td>
    <td><img src="https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Login" alt="Login"></td>
    <td><img src="https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Dashboard" alt="Dashboard"></td>
  </tr>
</table>

<hr>

<h2>⚙️ Setup & Installation</h2>
<h3>download all the folders in Project Byteverse folder</h3>

<ol>
  <li><strong>Clone the repository</strong>
    <pre>install all the folders
cd Project Byteverse</pre>
  </li>
  <li><strong>Install dependencies</strong>
    <pre>npm install express mongoose cors body-parser bcryptjs express-session</pre>
  </li>
  <li><strong>Start the server</strong>
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
  password: { type: String, required: true },
  
});
</pre>

<hr>

<h2>📅 Future Roadmap</h2>
<ul>
  <li>✅ <strong>Mid-Evaluation</strong> – Basic user auth & dashboards (Current)</li>
  <li>🔜 <strong>Final Submission</strong> – Donation system, search & scheduling</li>
  <li>🌟 <strong>Post-Evaluation</strong> – Notifications, analytics, mobile app</li>
</ul>

<hr>

<h2>🤝 Contribute</h2>
<p>Feel free to fork, suggest improvements, or report issues!</p>
<p>📧 <strong>Contact</strong>: <a href="mailto:your-email@example.com">your-email@example.com</a></p>

<div align="center">
  <p><strong>🍲 Share Food, Save Lives! 🌍</strong></p>
</div>

<hr>

<blockquote>
  <strong>Note</strong>: Replace placeholder images (<code>via.placeholder.com</code>) with actual screenshots of your project for better presentation.
</blockquote>
