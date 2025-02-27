// Initialize EmailJS
(function () {
    emailjs.init("linotesiorna@gmail.com"); // Replace with your EmailJS User ID
})();

// Listen for form submit
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;

    // Send email using EmailJS
    emailjs.sendForm("your-service-id", "your-template-id", form)
        .then(function (response) {
            console.log("Success", response);
            alert("Message sent successfully!");
        })
        .catch(function (error) {
            console.error("Failed to send message", error);
            alert("Oops! Something went wrong.");
        });
});

// Scroll Up Button Functionality
const scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

