// Elements
const tabLogin = document.getElementById("tab-login");
const tabSignup = document.getElementById("tab-signup");
const formLogin = document.getElementById("form-login");
const formSignup = document.getElementById("form-signup");
const toastContainer = document.getElementById("toast-container");

// Tabs Logic
tabLogin.addEventListener("click", () => {
  // Update styles
  tabLogin.className = "flex-1 py-4 text-amber-500 border-b-2 border-amber-500 transition-colors";
  tabSignup.className = "flex-1 py-4 text-slate-500 border-b-2 border-transparent hover:text-slate-300 transition-colors";
  // Toggle visibility
  formLogin.classList.remove("hidden");
  formLogin.classList.add("block");
  formSignup.classList.remove("block");
  formSignup.classList.add("hidden");
});

tabSignup.addEventListener("click", () => {
  // Update styles
  tabSignup.className = "flex-1 py-4 text-amber-500 border-b-2 border-amber-500 transition-colors";
  tabLogin.className = "flex-1 py-4 text-slate-500 border-b-2 border-transparent hover:text-slate-300 transition-colors";
  // Toggle visibility
  formSignup.classList.remove("hidden");
  formSignup.classList.add("block");
  formLogin.classList.remove("block");
  formLogin.classList.add("hidden");
});

// Helper: Show Toast
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  const isSuccess = type === "success";
  
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl border ${
    isSuccess ? 'bg-emerald-950/90 border-emerald-900/50 text-emerald-200' : 'bg-red-950/90 border-red-900/50 text-red-200'
  } backdrop-blur-md transform transition-all duration-300 translate-x-full opacity-0`;
  
  toast.innerHTML = `
    <div class="${isSuccess ? 'text-emerald-500' : 'text-red-500'}">
      ${isSuccess 
        ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
        : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
      }
    </div>
    <p class="text-sm font-medium">${message}</p>
  `;
  
  toastContainer.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.remove("translate-x-full", "opacity-0");
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Data store helpers
function getUsers() {
  const users = localStorage.getItem('ryino_users');
  return users ? JSON.parse(users) : [];
}

function setUsers(users) {
  localStorage.setItem('ryino_users', JSON.stringify(users));
}

// Handle Sign Up
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  const password = document.getElementById("signup-password").value.trim();

  const users = getUsers();
  
  // Check if email exists
  if (users.find(u => u.email === email)) {
    showToast("Email sudah terdaftar. Silakan gunakan email lain atau Login.", "error");
    return;
  }

  // Create new user
  users.push({ name, email, password });
  setUsers(users);

  showToast("Akun berhasil dibuat! Silakan Login.", "success");
  
  // Switch to login tab
  formSignup.reset();
  setTimeout(() => {
    tabLogin.click();
  }, 1000);
});

// Handle Login
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value.trim();

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    showToast("Login berhasil! Mengalihkan...", "success");
    // Create session
    localStorage.setItem('ryino_session', JSON.stringify({
      name: user.name,
      email: user.email
    }));
    
    // Redirect to index
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    showToast("Email atau Password salah.", "error");
  }
});
