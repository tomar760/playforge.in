// --- Modal Control Functions ---

// Get references to the modals
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

// Function to open the Login Modal
function openLoginModal() {
    loginModal.classList.add('active'); // Adds the 'active' class to show the modal with animation
    document.body.style.overflow = 'hidden'; // Prevent scrolling the body when modal is open
}

// Function to close the Login Modal
function closeLoginModal() {
    loginModal.classList.remove('active'); // Removes the 'active' class to hide the modal
    document.body.style.overflow = ''; // Restore body scrolling
}

// Function to open the Register Modal
function openRegisterModal() {
    registerModal.classList.add('active'); // Adds the 'active' class to show the modal with animation
    document.body.style.overflow = 'hidden'; // Prevent scrolling the body when modal is open
}

// Function to close the Register Modal
function closeRegisterModal() {
    registerModal.classList.remove('active'); // Removes the 'active' class to hide the modal
    document.body.style.overflow = ''; // Restore body scrolling
}

// Close modal if user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        closeLoginModal();
    }
    if (event.target == registerModal) {
        closeRegisterModal();
    }
});

// --- Password Visibility Toggle ---

// Function to toggle password visibility for a given input ID
function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    // Find the closest parent .input-group and then the span within it
    const toggleIcon = passwordField.nextElementSibling; // Assumes toggle is directly after input

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = '🙈'; // Change icon to hide
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = '👁️'; // Change icon to show
    }
}

// --- Form Submission Handlers ---

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission (page reload)

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login attempt with:');
    console.log('Email:', email);
    console.log('Password:', password);

    // --- IMPORTANT: Connect this to your actual backend login API ---
    // Example using Fetch API (You'll replace this with your actual logic):
    /*
    fetch('/api/login', { // Replace '/api/login' with your backend login endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers your API requires (e.g., Authorization)
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => {
        if (!response.ok) {
            // Handle HTTP errors, e.g., 401 Unauthorized, 400 Bad Request
            return response.json().then(errorData => {
                throw new Error(errorData.message || 'Login failed');
            });
        }
        return response.json();
    })
    .then(data => {
        // Assuming your backend sends { success: true, message: "Login successful", token: "..." }
        console.log('Login successful:', data);
        alert('Login successful! Welcome.');
        closeLoginModal(); // Close modal on success
        // Store token (e.g., in localStorage) and redirect
        // localStorage.setItem('authToken', data.token);
        // window.location.href = '/dashboard'; // Redirect to user dashboard
    })
    .catch(error => {
        console.error('Login error:', error.message);
        alert('Login failed: ' + error.message);
    });
    */

    // Placeholder for demonstration:
    alert('Login form submitted! (Check console for data). Connect this to your backend.');
    // closeLoginModal(); // Uncomment this line to close modal after submission (even if placeholder)
});

// Handle Register Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic client-side validation for password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return; // Stop the function if passwords don't match
    }

    console.log('Registration attempt with:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password); // In a real app, don't log raw passwords!

    // --- IMPORTANT: Connect this to your actual backend registration API ---
    // Example using Fetch API (You'll replace this with your actual logic):
    /*
    fetch('/api/register', { // Replace '/api/register' with your backend registration endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, email: email, password: password }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(errorData.message || 'Registration failed');
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Registration successful:', data);
        alert('Registration successful! Please login.');
        closeRegisterModal(); // Close register modal
        openLoginModal(); // Optionally open login modal after successful registration
    })
    .catch(error => {
        console.error('Registration error:', error.message);
        alert('Registration failed: ' + error.message);
    });
    */

    // Placeholder for demonstration:
    alert('Registration form submitted! (Check console for data). Connect this to your backend.');
    // closeRegisterModal(); // Uncomment this line to close modal after submission (even if placeholder)
});

// --- Initial Setup/Event Listeners (if needed for other elements) ---
// Example: Smooth scrolling for hero section CTA (already in your HTML, this is just a reminder)
document.querySelector('.btn-cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
