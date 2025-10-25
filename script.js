// Optional: You can add scroll animations or navbar shrink effects here
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});

document.getElementById('joinBtn').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default link behavior

    // Pre-fill email details
    const email = "info@artemgalle.com"; // your email
    const subject = "Joining Artem Galle";
    const body = "Hello,\n\nI am interested in joining Artem Galle. Please provide more details.\n\nThank you!";

    // Open user's email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});