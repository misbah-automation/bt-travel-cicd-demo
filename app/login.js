const demoUser = {
  email: 'qa@bttravel.demo',
  password: 'Test@13',
  displayName: 'QA Demo User',
};

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const loginError = document.getElementById('login-error');

const loginCard = document.querySelector('[data-testid="login-card"]');
const dashboard = document.getElementById('dashboard');
const logoutButton = document.getElementById('logout-button');

function clearErrors() {
  emailError.textContent = '';
  passwordError.textContent = '';
  loginError.textContent = '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showDashboard() {
  loginCard.classList.add('hidden');
  dashboard.classList.remove('hidden');
}

function showLoginPage() {
  dashboard.classList.add('hidden');
  loginCard.classList.remove('hidden');
}

function saveAuthenticationState() {
  const authState = {
    state: {
      isAuthenticated: true,
      token: 'fake-demo-token',
    },
  };

  localStorage.setItem('auth-storage', JSON.stringify(authState));
  localStorage.setItem('userDisplayName', demoUser.displayName);
}

function restoreAuthenticationState() {
  const savedAuthState = localStorage.getItem('auth-storage');

  if (!savedAuthState) {
    showLoginPage();
    return;
  }

  try {
    const parsedAuthState = JSON.parse(savedAuthState);

    if (parsedAuthState.state?.isAuthenticated === true) {
      showDashboard();
    } else {
      showLoginPage();
    }
  } catch {
    localStorage.removeItem('auth-storage');
    localStorage.removeItem('userDisplayName');
    showLoginPage();
  }
}

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  clearErrors();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let hasValidationError = false;

  if (email === '') {
    emailError.textContent = 'Email address is required.';
    hasValidationError = true;
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Enter a valid email address.';
    hasValidationError = true;
  }

  if (password === '') {
    passwordError.textContent = 'Password is required.';
    hasValidationError = true;
  }

  if (hasValidationError) {
    return;
  }

  const credentialsAreCorrect =
    email === demoUser.email &&
    password === demoUser.password;

  if (!credentialsAreCorrect) {
    loginError.textContent = 'Invalid email address or password.';
    return;
  }

  saveAuthenticationState();
  showDashboard();
});

logoutButton.addEventListener('click', function () {
  localStorage.removeItem('auth-storage');
  localStorage.removeItem('userDisplayName');

  loginForm.reset();
  clearErrors();
  showLoginPage();
});

restoreAuthenticationState();