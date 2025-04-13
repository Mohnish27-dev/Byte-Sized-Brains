
// Get the username from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the username if available
if (username) {
    console.log(username)
    document.getElementById('user-name').innerText = username;
}

//Goto donor.html
function addnewdonation() {
    window.location.href = `donor.html?username=${encodeURIComponent(username)}`;

}
//Goto dashboard
function dashboard() {
    window.location.href = `donor-dashboard.html?username=${encodeURIComponent(username)}`;

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
    userInfo.style.cursor = 'pointer';
}

document.addEventListener('DOMContentLoaded', function () { 
    // Initialize donation chart (same as in HTML)
    const ctx = document.getElementById('donationChart').getContext('2d');
    const donationChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Donations',
                data: [12, 19, 8, 15, 10, 5, 9],
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: '#10B981',
                borderWidth: 2,
                tension: 0.3,
                fill: truexj
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});
