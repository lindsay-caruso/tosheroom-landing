// Simple script to confirm form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", () => {
    alert("Thank you! Your message has been sent.");
  });
});
