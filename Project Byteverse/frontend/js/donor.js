document.getElementById('donation-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // 1. Get form data
    const formData = {
        name: document.getElementById('food-name').value.trim(),
        quantity: parseInt(document.getElementById('quantity').value),
        category: document.getElementById('category').value,
        expirydate: document.getElementById('expiry-date').value,
        description: document.getElementById('description').value.trim(),
        pickupTime: document.getElementById('pickup-time').value,
        storage: document.getElementById('storage').value
    };

    // 2. Basic validation
    if (!formData.name || !formData.quantity || !formData.category || !formData.expirydate) {
        alert('Please fill all required fields', 'error');
        return;
    }

    if (formData.quantity <= 0) {
        alert('Quantity must be at least 1', 'error');
        return;
    }

    // 3. Show loading state
    const submitBtn = document.querySelector('#donation-form button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Submitting...';

    try {
        // 4. Send to backend
        const response = await fetch('http://localhost:3000/api/food', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name: formData.name,
                    quantity: formData.quantity,
                    category: formData.category,
                    expirydate: formData.expirydate,
                    description: formData.description,
                    pickupTime: formData.pickupTime,
                    storage: formData.storage
                }
            )
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Submission failed');
        }

         // 5. Success handling
         alert('Donation submitted successfully!', 'success');
        
         // Option 1: Reset form
         this.reset();

         
     } catch (error) {
         console.error('Submission error:', error);
         alert(error.message || 'Failed to submit donation', 'error');
     } finally {
         // 6. Reset button state
         submitBtn.disabled = false;
         submitBtn.innerHTML = '<i class="fas fa-upload mr-2"></i> Submit Donation';
     }

});

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