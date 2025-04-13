
// Get the username from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the username if available
if (username) {
    console.log(username)
    document.getElementById('recipient-name').innerText = username;
}

//Goto recipient.html
function findfood(){
    window.location.href = `recipient.html?username=${encodeURIComponent(username)}`;
    
}
//Goto dashboard
function dashboard(){
    window.location.href = `recipient-dashboard.html?username=${encodeURIComponent(username)}`;
    
}

// Logout functionality
const userInfo = document.getElementById('logout-btn');

if (userInfo) {
    userInfo.addEventListener('click', function (e) {
        e.preventDefault();

        // Confirm logout with the user
        const confirmLogout = confirm('Are you sure you want to log out?');

        if (confirmLogout) {

            window.location.href = 'login.html'; // Redirect to login page

        }
    });

    // Change cursor to pointer to indicate clickability
    userInfo.style.cursor = 'pointer';
}

// Fetch and display donations
async function fetchDonations() {
    try {
        const response = await fetch('http://localhost:3000/api/food'); // Adjust the URL as needed
        const data = await response.json();
        console.log(data)
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch donations');
        }
        return data;
    } catch (error) {
        console.error('Error fetching donations:', error);
        alert(error.message || 'Failed to fetch donations', 'error');
    }
}
