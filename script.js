// =====================
// Time Display (Home)
// =====================
const timeElement = document.querySelector('[data-testid="profile-time"]');

if (timeElement) {
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.textContent = `Current time: ${timeString}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// =====================
// Contact Form Validation
// =====================
const form = document.getElementById("contactForm");

if (form) {
  const success = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    success.textContent = "";

    const fields = [
      { id: "name", min: 1 },
      { id: "email", pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ },
      { id: "subject", min: 1 },
      { id: "message", min: 10 },
    ];

    fields.forEach(({ id, min, pattern }) => {
      const input = document.getElementById(id);
      const error = document.getElementById("error-" + id);
      error.textContent = "";
      input.classList.remove("invalid");

      if (!input.value.trim()) {
        error.textContent = "This field is required.";
        input.classList.add("invalid");
        valid = false;
      } else if (pattern && !pattern.test(input.value)) {
        error.textContent = "Please enter a valid email address.";
        input.classList.add("invalid");
        valid = false;
      } else if (min && input.value.length < min) {
        error.textContent = `Must be at least ${min} characters.`;
        input.classList.add("invalid");
        valid = false;
      }
    });

    if (valid) {
      success.textContent = "✅ Message sent successfully!";
      form.reset();
    }
  });
}
