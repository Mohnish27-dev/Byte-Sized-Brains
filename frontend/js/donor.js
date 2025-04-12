document.getElementById('donation-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // 1. Get form data
    const formData = {
        name: document.getElementById('food-name').value.trim(),
        quantity: parseInt(document.getElementById('quantity').value),
        category: document.getElementById('category').value,
        expiryDate: document.getElementById('expiry-date').value,
        description: document.getElementById('description').value.trim(),
        pickupTime: document.getElementById('pickup-time').value,
        storage: document.getElementById('storage').value
    };

    // 2. Basic validation
    if (!formData.name || !formData.quantity || !formData.category || !formData.expiryDate) {
        showAlert('Please fill all required fields', 'error');
        return;
    }

    if (formData.quantity <= 0) {
        showAlert('Quantity must be at least 1', 'error');
        return;
    }

    // 3. Show loading state
    const submitBtn = document.querySelector('#donation-form button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Submitting...';

    // try {
    //     // 4. Send to backend
        // const response = await fetch('/api/food', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         },
    //         body: JSON.stringify(formData)
    //     });

    //     const data = await response.json();

    //     if (!response.ok) {
    //         throw new Error(data.message || 'Submission failed');
    //     }

    //     // 5. Success handling
    //     showAlert('Donation submitted successfully!', 'success');
        
    //     // Option 1: Reset form
    //     this.reset();
        
    //     // Option 2: Redirect to dashboard
    //     // window.location.href = '/donor-dashboard.html';
        
    // } catch (error) {
    //     console.error('Submission error:', error);
    //     showAlert(error.message || 'Failed to submit donation', 'error');
    // } finally {
    //     // 6. Reset button state
    //     submitBtn.disabled = false;
    //     submitBtn.innerHTML = '<i class="fas fa-upload mr-2"></i> Submit Donation';
    // }
});

// Helper function to show alerts
// function showAlert(message, type) {
//     const alertDiv = document.createElement('div');
//     alertDiv.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 ${
//         type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//     }`;
//     alertDiv.innerHTML = `
//         <div class="flex items-center">
//             <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'} mr-2"></i>
//             <span>${message}</span>
//         </div>
//     `;
    
//     document.body.appendChild(alertDiv);
    
//     // Auto-remove after 5 seconds
//     setTimeout(() => {
//         alertDiv.remove();
//     }, 5000);
// }