
// Get the username from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the username if available
if (username) {
    console.log(username)
    document.getElementById('user-name').innerText = username;
}

document.addEventListener('DOMContentLoaded', function() {
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
                fill: true
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

    // Logout functionality
    const userInfo = document.querySelector('.user-info');
    
    if (userInfo) {
        userInfo.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Confirm logout with the user
            const confirmLogout = confirm('Are you sure you want to log out?');
            
            if (confirmLogout) {
                // Here you would typically:
                // 1. Clear any authentication tokens from localStorage/sessionStorage
                


                // 2. Make an API call to invalidate the session (if applicable)

                // 2. Make an API call to invalidate the session
                // 3. Redirect to login page
                
                // For this example, we'll just redirect
                localStorage.removeItem('authToken'); // Clear auth token if exists
                window.location.href = '/login.html'; // Redirect to login page
            }
        });

        // Change cursor to pointer to indicate clickability
        userInfo.style.cursor = 'pointer';
    }

    // You could also add other dashboard-specific functionality here, like:
    // - Fetching and displaying real donation data
    // - Handling notifications
    // - Updating stats dynamically
});