document.addEventListener("DOMContentLoaded", () => {
    // Update footer year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Attach click events for navigation
    document.querySelectorAll("[data-nav]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute("data-nav");
            window.location.href = targetPage;
        });
    });

    // Highlight active nav item based on current page
    let currentPage = window.location.pathname.split("/").pop();

    // If no filename (root URL), treat as index.html
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    document.querySelectorAll("[data-nav]").forEach(link => {
        if (link.getAttribute("data-nav") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Responsive nav toggle
function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}