const heroTitle = document.querySelector(".hero h1");
const heroButton = document.querySelector(".Hero-button");

heroButton.addEventListener("click", () => {
    heroTitle.textContent = "Welcome to the Synexus Core!";
    heroTitle.classList.toggle("active-state");
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", function() {
navLinks.classList.toggle("nav-active");
const expanded = menuToggle.getAttribute("aria-expanded") === "true" ;
menuToggle.setAttribute("aria-expanded", !expanded);
});
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const fullName = document.getElementById("full-name");
  const nameValue = fullName.value.trim();
  const email = document.getElementById("email");
    const emailValue = email.value.trim();
    if (nameValue === "") {
     fullName.style.borderColor = "red";
     alert("Please enter your full name.");
}
else if (!emailValue.includes("@")) {
email.style.borderColor = "red";
alert("Please enter a valid email address.");
}
else {
console.log("Application Ready for Server");
fullName.value = "";
email.value = "";
}
});
const projectsData = [
    {
        title: "AI Research Lab",
        description: "Building AI-powered solutions for real-world problems.",
        status: "Active"
    },
    {
        title: "Web Development Bootcamp",
        description: "Training students in modern frontend and backend technologies.",
        status: "Active"
    },
    {
        title: "Hackathon 2026",
        description: "A 24-hour innovation challenge for developers.",
        status: "Completed"
    },
    {
        title: "Cyber Security Club",
        description: "Learning ethical hacking and cybersecurity practices.",
        status: "Active"
    }
];
const dynamicGrid = document.getElementById("dynamic-grid");
projectsData.forEach((project) => {

    const statusClass =
        project.status === "Active"
            ? "active-project"
            : "completed-project";

    const card = `
        <div class="initiative-card ${statusClass}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span>${project.status}</span>
        </div>
    `;

    dynamicGrid.innerHTML += card;
});