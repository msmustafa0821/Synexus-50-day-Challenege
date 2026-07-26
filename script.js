const heroTitle = document.querySelector(".hero h1");
const heroButton = document.querySelector(".Hero-button");

heroButton.addEventListener("click", () => {
    heroTitle.textContent = "Welcome to the Synexus Core!";
    heroTitle.classList.toggle("active-state");
});