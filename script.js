
// Welcome Message
console.log("Welcome to my GitHub Profile!");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button Click Animation
document.querySelectorAll("a").forEach(button => {
    button.addEventListener("click", function() {
        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

// Dynamic Year
const year = new Date().getFullYear();

console.log("Current Year: " + year);

// Profile Greeting
window.addEventListener("load", function() {
    console.log("Profile Website Loaded Successfully!");
});
