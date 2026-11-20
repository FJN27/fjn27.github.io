
document.addEventListener("DOMContentLoaded", async () => {
    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    try {
        const response = await fetch("/navbar.html");

        if (!response.ok) {
            throw new Error(`Navbar loading failed: ${response.status}`);
        }

        navbar.innerHTML = await response.text();

        // Physics dropdown
        const button = navbar.querySelector(".dropdown-button");
        const menu = navbar.querySelector(".dropdown-menu");

        if (button && menu) {
            button.removeAttribute("onclick");

            button.addEventListener("click", (event) => {
                event.stopPropagation();
                menu.classList.toggle("show");
            });

            document.addEventListener("click", (event) => {
                if (!event.target.closest(".dropdown")) {
                    menu.classList.remove("show");
                }
            });
        }
    } catch (error) {
        console.error("Error loading navigation:", error);
    }
});
