// Button hover effects and smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".btn-start");
  startButton.addEventListener("mouseover", () => {
    startButton.style.transform = "scale(1.1)";
  });
  startButton.addEventListener("mouseout", () => {
    startButton.style.transform = "scale(1)";
  });

  const loginButton = document.querySelector(".btn-login");
  loginButton.addEventListener("click", () => {
    alert("Login functionality is under construction.");
  });

  const signupButton = document.querySelector(".btn-signup");
  signupButton.addEventListener("click", () => {
    alert("Sign-up functionality is under construction.");
  });
});
