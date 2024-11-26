// Initialize Firebase
const firebaseConfig = {
    // Your Firebase config object here
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// DOM elements
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authContainer = document.getElementById('auth-container');
const profileContainer = document.getElementById('profile-container');
const quizContainer = document.getElementById('quiz-container');
const userPhoto = document.getElementById('userPhoto');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

// Login function
const loginWithGoogle = async () => {
    try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        updateUI(user);
    } catch (error) {
        console.error('Error during login:', error.message);
    }
};

// Logout function
const logout = async () => {
    try {
        await auth.signOut();
        showLoginPage();
    } catch (error) {
        console.error('Error during logout:', error.message);
    }
};

// Update UI with user info
const updateUI = (user) => {
    if (user) {
        // Show profile and quiz
        authContainer.style.display = 'none';
        profileContainer.style.display = 'block';
        quizContainer.style.display = 'block';
        
        // Update profile info
        userPhoto.src = user.photoURL;
        userName.textContent = user.displayName;
        userEmail.textContent = user.email;
    } else {
        showLoginPage();
    }
};

// Show login page
const showLoginPage = () => {
    authContainer.style.display = 'block';
    profileContainer.style.display = 'none';
    quizContainer.style.display = 'none';
};

// Event listeners
loginBtn.addEventListener('click', loginWithGoogle);
logoutBtn.addEventListener('click', logout);

// Check auth state on page load
auth.onAuthStateChanged((user) => {
    updateUI(user);
});

// Function to handle sign-in
function signInWithGoogle() {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful sign-in
      const user = result.user;
      console.log("Signed in user:", user);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error signing in:", error);
    });
}

// Monitor auth state changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});
