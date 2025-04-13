const passwordInput = document.getElementById("register-password")
const passwordStrength = document.getElementById('passwordStrength');
const strengthBar = passwordStrength.querySelector('.strength-bar');
const strengthText = passwordStrength.querySelector('.strength-text');
const userTypeRadios = document.querySelectorAll('input[name="user-type"]');
let selectedUserType=null


userTypeRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        selectedUserType=this.value
        console.log('User type selected:', selectedUserType);


    });
});







// Toggle between login and registration forms
document.getElementById('login-tab').addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    this.classList.add('active');
    this.classList.remove('inactive');
    document.getElementById('register-tab').classList.remove('active');
    document.getElementById('register-tab').classList.add('inactive');
});

document.getElementById('register-tab').addEventListener('click', function () {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    this.classList.add('active');
    this.classList.remove('inactive');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('login-tab').classList.add('inactive');
});

// Form validation and submission
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const getLoginData = {
        usertype:selectedUserType,
        login_email: document.getElementById("login-email").value,
        login_password: document.getElementById("login-password").value,
    };

    try {
        if (!getLoginData.login_email || !getLoginData.login_password) {
            alert('All fields are required.');
            return;
        }

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: getLoginData.login_email,
                password: getLoginData.login_password,
                usertype:getLoginData.usertype,
            })
        });

        let data;
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
            console.log("the data is fetched");
        }  else {
            const errorText = await response.text();
            console.error('Unexpected response:', errorText);
            throw new Error('Server returned an unexpected response.');
        }

        if (response.ok) {
            
            alert('Login successful!');
            if(data.user.usertype=="donor"){

                window.location.href = `donor-dashboard.html?username=${encodeURIComponent(data.user.name)}`;
            }
            else if(data.user.usertype=="recipient"){
                window.location.href = `recipient-dashboard.html?username=${encodeURIComponent(data.user.name)}`;

            }
        } else {
            if (response.status === 401) {
                alert('Invalid email or password. Please try again.');
            } else {
                alert('Login failed: ' + data.message);
            }
            console.log(data);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert(error.message || 'Failed to login');
    }
});

// Password strength checker
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
 
    let strength = 0;

    // Check password length
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Check for mixed case
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;

    // Check for numbers
    if (/\d/.test(password)) strength++;

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update strength indicator
    strengthBar.style.width = `${strength * 25}%`;

    // Remove all classes first
    passwordStrength.className = 'password-strength';

    // Add appropriate class based on strength
    if (strength <= 1) {
        passwordStrength.classList.add('weak');
        strengthText.textContent = 'Weak';
    } else if (strength <= 3) {
        passwordStrength.classList.add('medium');
        strengthText.textContent = 'Medium';
    } else if (strength <= 4) {
        passwordStrength.classList.add('strong');
        strengthText.textContent = 'Strong';
    } else {
        passwordStrength.classList.add('very-strong');
        strengthText.textContent = 'Very Strong';
    }
});

// Terms and Conditions Modal Functionality
const termsModal = document.getElementById('terms-modal');
const showTermsBtn = document.getElementById('show-terms');
const closeTermsBtn = document.getElementById('close-terms');
const acceptTermsBtn = document.getElementById('accept-terms');
const termsCheckbox = document.getElementById('terms');

showTermsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    termsModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

closeTermsBtn.addEventListener('click', function () {
    termsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

acceptTermsBtn.addEventListener('click', function () {
    termsCheckbox.checked = true;
    termsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside content
termsModal.addEventListener('click', function (e) {
    if (e.target === termsModal) {
        termsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const getRegisterData = {
        usertype: selectedUserType,
        register_name: document.getElementById("register-name").value,
        register_email: document.getElementById("register-email").value,
        register_password: document.getElementById("register-password").value,
        register_password_confirm: document.getElementById("register-confirm-password").value,
    }



    try {

        // Validate data before sending the request
        if (!getRegisterData.register_name || !getRegisterData.register_email || !getRegisterData.register_password || !getRegisterData.register_password_confirm||!getRegisterData.usertype) {
            alert('All fields are required.');
            return;
        }
        if (getRegisterData.register_password !== getRegisterData.register_password_confirm) {
            alert('Passwords do not match.');
            return;
        }

        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify({
                name: getRegisterData.register_name,
                email: getRegisterData.register_email,
                password: getRegisterData.register_password,
                usertype:getRegisterData.usertype

            })
        });
        const data = await response.json();
        if (response.ok) {
            alert('Registration successful!');
            window.location.href = `thank-you.html?username=${encodeURIComponent(getRegisterData.register_name)}`;
        } else {
            alert('Registration failed: ' + `${data}`);
            console.log(data)
        }
        this.reset(); // Reset the form after submission
        console.log('Registration submitted');
    } catch (error) {
        console.error('Submission error:', error);
        alert(error.message || 'Failed to register ', 'error');
    }
    console.log(getRegisterData)
    
});

