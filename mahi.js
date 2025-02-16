// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let confirmation = document.getElementById("confirmation");

    if (name && email && message) {
        confirmation.innerText = "✅ Message Sent Successfully!";
        confirmation.style.color = "green";
    } else {
        confirmation.innerText = "❌ Please fill all fields!";
        confirmation.style.color = "red";
    }
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect
let typingText = "Creative Developer";
let i = 0;
function typeEffect() {
    if (i < typingText.length) {
        document.getElementById("typing-text").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
    }
}
window.onload = typeEffect;
