const savedTheme = localStorage.getItem("synexus_theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

const heroTitle = document.querySelector(".hero h1");
const heroButton = document.querySelector(".Hero-button");

heroButton.addEventListener("click", () => {
    heroTitle.textContent = "Welcome to the Synexus Core!";
    heroTitle.classList.toggle("active-state");
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("#theme-toggle");
function updateThemeIcon() {
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

}
updateThemeIcon();
  menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("nav-active");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true" ;
    menuToggle.setAttribute("aria-expanded", !expanded);
});
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("synexus_theme", "dark");
    } else {
        localStorage.setItem("synexus_theme", "light");
    }
    updateThemeIcon();
});

const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const saveStatus = document.getElementById("save-status");
let saveTimer;
const savedData = localStorage.getItem("synexus_form_draft");

if (savedData) {
    const formData = JSON.parse(savedData);

    fullName.value = formData.name || "";
    email.value = formData.email || "";
}
function saveDraft() {

    const formData = {
        name: fullName.value,
        email: email.value
    };

    localStorage.setItem(
        "synexus_form_draft",
        JSON.stringify(formData)
    );

    saveStatus.textContent = "✔ Draft Saved Automatically";
    saveStatus.classList.add("show");

    clearTimeout(saveTimer);

    saveTimer = setTimeout(() => {
        saveStatus.classList.remove("show");
    }, 2000);
}

fullName.addEventListener("input", saveDraft);
email.addEventListener("input", saveDraft);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const nameValue = fullName.value.trim();
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
            localStorage.removeItem("synexus_form_draft");
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
const searchInput = document.getElementById("search-projects");
const modalOverlay = document.querySelector(".modal-overlay");
const modalTitle = document.querySelector(".modal-title");
const closeModal = document.querySelector(".close-modal");
function renderProjects(dataArray) {
     dynamicGrid.innerHTML = "";
    // Bonus: Show message if no projects match
    if (dataArray.length === 0) {
        dynamicGrid.innerHTML = "<p>No initiatives match your search.</p>";
        return;
    }

    // Loop through each project
    dataArray.forEach((project) => {

        const statusClass =
            project.status === "Active"
                ? "active-project"
                : "completed-project";

        const card = `
    <div class="initiative-card ${statusClass}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span>${project.status}</span>

        <button
            class="view-btn"
            data-title="${project.title}">
            View Details
        </button>
    </div>
`;

        dynamicGrid.innerHTML += card;
    });
}

// Initial render
renderProjects(projectsData);
// Real-time search
searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredProjects = projectsData.filter((project) => {
        return project.title.toLowerCase().includes(searchTerm);
    });

    renderProjects(filteredProjects);

});


// DAY 19 - Event Delegation
dynamicGrid.addEventListener("click", (e) => {

    const button = e.target.closest(".view-btn");
    if (button) {
        const title = button.getAttribute("data-title");
       modalTitle.textContent = title;
       modalOverlay.style.display = "flex";
}

});
closeModal.addEventListener("click", () => {

    modalOverlay.style.display = "none";
    

});
modalOverlay.addEventListener("click", (e) => {
if (e.target === modalOverlay) {
modalOverlay.style.display = "none";
}
});
const testimonialsData = [
    {
        name: "Frontend Engineer",
        quote: "Building projects with Synexus strengthened my frontend skills."
    },
    {
        name: "Backend Developer",
        quote: "The hands-on challenges made learning databases much easier."
    },
    {
        name: "Community Member",
        quote: "Every day brought a new opportunity to learn and collaborate."
    }
];
const memberName = document.getElementById("member-name");
const memberQuote = document.getElementById("member-quote");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
function updateTestimonial() {

    const currentData = testimonialsData[currentIndex];

    memberName.textContent = currentData.name;
    memberQuote.textContent = currentData.quote;

    currentIndex++;

    if (currentIndex === testimonialsData.length) {
        currentIndex = 0;
    }
}
updateTestimonial();
const carouselInterval = setInterval(updateTestimonial, 3000);
prevBtn.addEventListener("click", () => {

    clearInterval(carouselInterval);

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = testimonialsData.length - 1;
    }

    const currentData = testimonialsData[currentIndex];

    memberName.textContent = currentData.name;
    memberQuote.textContent = currentData.quote;
});
nextBtn.addEventListener("click", () => {

    clearInterval(carouselInterval);

    currentIndex++;

    if (currentIndex === testimonialsData.length) {
        currentIndex = 0;
    }

    const currentData = testimonialsData[currentIndex];

    memberName.textContent = currentData.name;
    memberQuote.textContent = currentData.quote;
});
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modalOverlay.style.display = "none";

    }

});