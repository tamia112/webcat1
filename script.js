// Simple popup welcome message for the homepage
window.addEventListener("DOMContentLoaded", function() {
    const messageElement = document.getElementById("welcomeMessage");
  
    if (messageElement) {
      const visitorName = prompt("Welcome! Please enter your name:");
      if (visitorName && visitorName.trim() !== "") {
        messageElement.textContent = `Hello, ${visitorName}! We're glad to have you here.`;
      } else {
        messageElement.textContent = "Welcome, valued visitor!";
      }
    }
  });
  