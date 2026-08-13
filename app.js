// ===============================
// GLOBAL FEATURES
// ===============================

function initThemeToggle() {
    const themeToggle = document.querySelector("#theme-toggle");

    if (!themeToggle) return;

    const savedTheme = localStorage.getItem("synexus_theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateThemeIcon(themeToggle);

    // Prevent duplicate listeners
    if (themeToggle.dataset.initialized === "true") return;
    themeToggle.dataset.initialized = "true";

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("synexus_theme", "dark");
        } else {
            localStorage.setItem("synexus_theme", "light");
        }

        updateThemeIcon(themeToggle);
    });
}


function updateThemeIcon(themeToggle) {
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
}


function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    if (menuToggle.dataset.initialized === "true") return;
    menuToggle.dataset.initialized = "true";

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");

        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            !expanded
        );
    });
}


// ===============================
// MEMBERSHIP FORM
// ===============================

function initMembershipForm() {
    const form = document.querySelector("form");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const saveStatus = document.getElementById("save-status");

    if (!form || !fullName || !email || !saveStatus) {
        return;
    }

    if (form.dataset.initialized === "true") return;
    form.dataset.initialized = "true";

    let saveTimer;

    // Load saved draft
    const savedData =
        localStorage.getItem("synexus_form_draft");

    if (savedData) {
        try {
            const formData = JSON.parse(savedData);

            fullName.value = formData.name || "";
            email.value = formData.email || "";
        } catch (error) {
            console.error("Invalid saved form draft.");
        }
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

        saveStatus.textContent =
            "✔ Draft Saved Automatically";

        saveStatus.classList.add("show");

        clearTimeout(saveTimer);

        saveTimer = setTimeout(() => {
            saveStatus.classList.remove("show");
        }, 2000);
    }


    fullName.addEventListener("input", saveDraft);
    email.addEventListener("input", saveDraft);


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameValue = fullName.value.trim();
        const emailValue = email.value.trim();


        if (nameValue === "") {
            fullName.style.borderColor = "red";
            alert("Please enter your full name.");
            return;
        }


        if (!emailValue.includes("@")) {
            email.style.borderColor = "red";
            alert("Please enter a valid email address.");
            return;
        }


        console.log("Application Ready for Server");

        localStorage.removeItem(
            "synexus_form_draft"
        );

        fullName.value = "";
        email.value = "";

        fullName.style.borderColor = "";
        email.style.borderColor = "";
    });
}


// ===============================
// UTILITY
// ===============================

function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


// ===============================
// PAGE INITIALIZERS
// ===============================

function initHomePage() {
    console.log("Home page initialized");
}


function initAboutPage() {
    console.log("About page initialized");
}


function initCoreTeamPage() {
    console.log("Core Team page initialized");
}


// ===============================
// INTERSECTION OBSERVER
// ===============================

function initScrollObserver() {
    const hiddenElements =
        document.querySelectorAll(".hidden");

    if (hiddenElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        }
    );


    hiddenElements.forEach((element) => {
        observer.observe(element);
    });
}


// ===============================
// INITIATIVES PAGE
// ===============================

function initInitiativesPage() {
    const dynamicGrid =
        document.getElementById("dynamic-grid");

    const searchInput =
        document.getElementById("search-projects");

    const modalOverlay =
        document.querySelector(".modal-overlay");

    const modalTitle =
        document.querySelector(".modal-title");

    const closeModal =
        document.querySelector(".close-modal");


    if (
        !dynamicGrid ||
        !searchInput ||
        !modalOverlay ||
        !modalTitle ||
        !closeModal
    ) {
        return;
    }


    if (dynamicGrid.dataset.initialized === "true") {
        return;
    }

    dynamicGrid.dataset.initialized = "true";


    const projectsData = [
        {
            title: "AI Research Lab",
            description:
                "Building AI-powered solutions for real-world problems.",
            status: "Active"
        },

        {
            title: "Web Development Bootcamp",
            description:
                "Training students in modern frontend and backend technologies.",
            status: "Active"
        },

        {
            title: "Hackathon 2026",
            description:
                "A 24-hour innovation challenge for developers.",
            status: "Completed"
        },

        {
            title: "Cyber Security Club",
            description:
                "Learning ethical hacking and cybersecurity practices.",
            status: "Active"
        }
    ];


    function renderProjects(dataArray) {
        dynamicGrid.innerHTML = "";

        if (dataArray.length === 0) {
            dynamicGrid.innerHTML =
                "<p>No initiatives match your search.</p>";
            return;
        }


        dataArray.forEach((project) => {

            const statusClass =
                project.status === "Active"
                    ? "active-project"
                    : "completed-project";


            const card = `
                <div class="initiative-card hidden ${statusClass}">

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


        initScrollObserver();
    }


    renderProjects(projectsData);


    function searchProjects() {
        const searchTerm =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredProjects =
            projectsData.filter((project) => {

                return project.title
                    .toLowerCase()
                    .includes(searchTerm);

            });


        renderProjects(filteredProjects);
    }


    const debouncedSearch =
        debounce(searchProjects, 300);


    searchInput.addEventListener(
        "input",
        debouncedSearch
    );


    // Event delegation
    dynamicGrid.addEventListener("click", (e) => {

        const button =
            e.target.closest(".view-btn");

        if (!button) return;


        const title =
            button.getAttribute("data-title");


        modalTitle.textContent = title;

        modalOverlay.style.display = "flex";
    });


    closeModal.addEventListener("click", () => {
        modalOverlay.style.display = "none";
    });


    modalOverlay.addEventListener("click", (e) => {

        if (e.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }

    });


    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            modalOverlay.style.display = "none";
        }

    });
}


// ===============================
// TESTIMONIAL CAROUSEL
// ===============================

function initTestimonials() {
    const memberName =
        document.getElementById("member-name");

    const memberQuote =
        document.getElementById("member-quote");

    const prevBtn =
        document.getElementById("prev-btn");

    const nextBtn =
        document.getElementById("next-btn");


    if (
        !memberName ||
        !memberQuote ||
        !prevBtn ||
        !nextBtn
    ) {
        return;
    }


    if (memberName.dataset.initialized === "true") {
        return;
    }

    memberName.dataset.initialized = "true";


    const testimonialsData = [
        {
            name: "Frontend Engineer",
            quote:
                "Building projects with Synexus strengthened my frontend skills."
        },

        {
            name: "Backend Developer",
            quote:
                "The hands-on challenges made learning databases much easier."
        },

        {
            name: "Community Member",
            quote:
                "Every day brought a new opportunity to learn and collaborate."
        }
    ];


    let currentIndex = 0;


    function updateTestimonial() {
        const currentData =
            testimonialsData[currentIndex];

        memberName.textContent =
            currentData.name;

        memberQuote.textContent =
            currentData.quote;
    }


    updateTestimonial();


    let carouselInterval =
        setInterval(() => {

            currentIndex++;

            if (
                currentIndex ===
                testimonialsData.length
            ) {
                currentIndex = 0;
            }

            updateTestimonial();

        }, 3000);


    function resetCarousel() {
        clearInterval(carouselInterval);

        carouselInterval =
            setInterval(() => {

                currentIndex++;

                if (
                    currentIndex ===
                    testimonialsData.length
                ) {
                    currentIndex = 0;
                }

                updateTestimonial();

            }, 3000);
    }


    prevBtn.addEventListener("click", () => {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex =
                testimonialsData.length - 1;
        }

        updateTestimonial();
        resetCarousel();
    });


    nextBtn.addEventListener("click", () => {

        currentIndex++;

        if (
            currentIndex ===
            testimonialsData.length
        ) {
            currentIndex = 0;
        }

        updateTestimonial();
        resetCarousel();
    });
}


// ===============================
// TASK TRACKER
// ===============================

function initTaskTracker() {
    const taskInput =
        document.querySelector("#task-input");

    const addTaskBtn =
        document.querySelector("#add-task-btn");

    const taskList =
        document.querySelector("#task-list");


    if (
        !taskInput ||
        !addTaskBtn ||
        !taskList
    ) {
        return;
    }


    if (taskList.dataset.initialized === "true") {
        return;
    }

    taskList.dataset.initialized = "true";


    let taskState =
        JSON.parse(
            localStorage.getItem("taskState")
        ) || [];


    function saveTasks() {
        localStorage.setItem(
            "taskState",
            JSON.stringify(taskState)
        );
    }


    function renderTasks() {
        taskList.innerHTML = "";


        taskState.forEach((task) => {

            const li =
                document.createElement("li");


            li.innerHTML = `
                <input
                    type="checkbox"
                    data-id="${task.id}"
                    ${task.completed ? "checked" : ""}
                >

                <span class="${
                    task.completed
                        ? "completed-task"
                        : ""
                }">
                    ${task.text}
                </span>

                <button
                    class="delete-btn"
                    data-id="${task.id}">
                    &times;
                </button>
            `;


            taskList.appendChild(li);
        });
    }


    addTaskBtn.addEventListener("click", () => {

        const taskText =
            taskInput.value.trim();


        if (taskText === "") {
            return;
        }


        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };


        taskState.push(newTask);

        saveTasks();
        renderTasks();

        taskInput.value = "";
    });


    taskList.addEventListener("click", (e) => {

        if (
            e.target.classList.contains(
                "delete-btn"
            )
        ) {

            const targetId =
                Number(
                    e.target.getAttribute(
                        "data-id"
                    )
                );


            taskState =
                taskState.filter(
                    (task) =>
                        task.id !== targetId
                );


            saveTasks();
            renderTasks();

            return;
        }


        if (e.target.type === "checkbox") {

            const targetId =
                Number(
                    e.target.getAttribute(
                        "data-id"
                    )
                );


            const task =
                taskState.find(
                    (task) =>
                        task.id === targetId
                );


            if (!task) return;


            task.completed =
                !task.completed;


            saveTasks();
            renderTasks();
        }

    });


    renderTasks();
}


// ===============================
// KANBAN BOARD
// ===============================

function initKanbanBoard() {
    const columns =
        document.querySelectorAll(".column");

    const taskCards =
        document.querySelectorAll(".task-card");


    if (
        columns.length === 0 ||
        taskCards.length === 0
    ) {
        return;
    }


    // Restore saved Kanban board
    const savedBoard =
        localStorage.getItem(
            "synexus_kanban"
        );


   if (savedBoard) {

    try {

        const boardState =
            JSON.parse(savedBoard);

        columns.forEach((column) => {

            const columnId =
                column.dataset.column ||
                column.id;

            const cardContainer =
                column.querySelector(".task-list") ||
                column;

            // Remove original cards
            cardContainer.innerHTML = "";

            // Restore saved cards
            if (boardState[columnId]) {

                boardState[columnId].forEach(
                    (taskHTML) => {

                        cardContainer.insertAdjacentHTML(
                            "beforeend",
                            taskHTML
                        );

                    }
                );
            }

        });

    } catch (error) {

        console.error(
            "Could not restore Kanban board."
        );

    }
}

    const cards =
        document.querySelectorAll(".task-card");


    cards.forEach((card) => {

        card.addEventListener(
            "dragstart",
            () => {
                card.classList.add(
                    "is-dragging"
                );
            }
        );


        card.addEventListener(
            "dragend",
            () => {
                card.classList.remove(
                    "is-dragging"
                );
            }
        );

    });


    columns.forEach((column) => {

        column.addEventListener(
            "dragover",
            (e) => {
                e.preventDefault();
            }
        );


        column.addEventListener(
            "drop",
            () => {

                const draggedElement =
                    document.querySelector(
                        ".is-dragging"
                    );


                if (!draggedElement) {
                    return;
                }


                column.appendChild(
                    draggedElement
                );


                saveKanbanBoard();
            }
        );

    });
}


// ===============================
// KANBAN LOCAL STORAGE
// ===============================

function saveKanbanBoard() {
    const columns =
        document.querySelectorAll(".column");


    if (columns.length === 0) {
        return;
    }


    const boardState = {};


    columns.forEach((column, index) => {

        const columnId =
            column.dataset.column ||
            column.id ||
            `column-${index}`;


        boardState[columnId] =
            Array.from(
                column.querySelectorAll(
                    ".task-card"
                )
            ).map((card) => card.outerHTML);

    });


    localStorage.setItem(
        "synexus_kanban",
        JSON.stringify(boardState)
    );
}


// ===============================
// SPA ROUTER
// ===============================

function router() {
    const appRoot = document.querySelector("#app-root");

    if (!appRoot) return;

    const path =
        window.location.hash.slice(1) || "/";

    const routes = {

      "/": `
    <section>
        <h1>Welcome to Synexus</h1>
        <p>This is the Home page.</p>

        <h2>Membership Application</h2>

        <form id="membership-form">

            <input
                type="text"
                id="full-name"
                placeholder="Full Name"
            >

            <input
                type="email"
                id="email"
                placeholder="Email"
            >

            <button type="submit">
                Apply
            </button>

            <p id="save-status"></p>

        </form>
    </section>
`,

        "/about": `
            <section>
                <h1>About Synexus</h1>
                <p>This is the About page.</p>
            </section>
        `,

        "/initiatives": `
            <section class="initiatives-section">

                <h1>Our Initiatives</h1>

                <input
                    type="text"
                    id="search-projects"
                    placeholder="Search initiatives..."
                >

                <div id="dynamic-grid"></div>

                <div class="modal-overlay">

                    <div class="modal">

                        <button class="close-modal">
                            &times;
                        </button>

                        <h2 class="modal-title"></h2>

                    </div>

                </div>

            </section>
            <section class="proposal-section">
    <h2>Propose an Initiative</h2>

    <form id="proposal-form">
        <input
            type="text"
            id="proposal-title"
            placeholder="Initiative title"
            required
        >

        <textarea
            id="proposal-description"
            placeholder="Describe your initiative"
            required
        ></textarea>

        <button type="submit" id="proposal-submit">
            Submit Proposal
        </button>
    </form>

    <p id="proposal-message"></p>
</section>
        `,

     "/core-team": `
<section>

    <h1>Synexus Core Team</h1>

    <p>This is the Core Team page.</p>

    <h2>Community Contributor Lookup</h2>

    <input
        type="text"
        id="github-username"
        placeholder="Enter GitHub username"
    >

    <div id="dev-profile-card"></div>

    <div id="repos-grid" class="initiatives-grid"></div>
        <!-- TASK TRACKER -->

        <h2>Task Tracker</h2>

        <div class="task-tracker">

            <input
                type="text"
                id="task-input"
                placeholder="Enter a task"
            >

            <button id="add-task-btn">
                Add Task
            </button>

            <ul id="task-list"></ul>

        </div>


        <!-- KANBAN BOARD -->

        <h2>Kanban Board</h2>

        <div class="kanban-board">

            <div
                class="column"
                id="todo"
                data-column="todo"
            >

                <h3>To Do</h3>

                <div class="task-list">

                    <div
                        class="task-card"
                        draggable="true"
                    >
                        Build Homepage
                    </div>

                    <div
                        class="task-card"
                        draggable="true"
                    >
                        Fix Navigation
                    </div>

                </div>

            </div>


            <div
                class="column"
                id="in-progress"
                data-column="in-progress"
            >

                <h3>In Progress</h3>

                <div class="task-list">

                    <div
                        class="task-card"
                        draggable="true"
                    >
                        Build SPA Router
                    </div>

                </div>

            </div>


            <div
                class="column"
                id="done"
                data-column="done"
            >

                <h3>Done</h3>

                <div class="task-list">

                    <div
                        class="task-card"
                        draggable="true"
                    >
                        Dark Mode
                    </div>

                </div>

            </div>

        </div>

    </section>
`,
    };


    const view = routes[path];


    appRoot.innerHTML = view || `
        <section class="not-found">
            <h1>404</h1>
            <p>Page not found.</p>
        </section>
    `;
   initGitHubLookup();

 if (path === "/") {
    initHomePage();
    initMembershipForm();
    initTestimonials();
    initScrollObserver();
}

if (path === "/about") {
    initAboutPage();
    initScrollObserver();
}

if (path === "/initiatives") {
    initInitiativesPage();
    initProposalForm();
    initScrollObserver();
}

if (path === "/core-team") {
    initCoreTeamPage();
    initTaskTracker();
    initKanbanBoard();
    initTestimonials();
    initScrollObserver();
}
}

// ===============================
// PROPOSAL FORM
// ===============================

function initProposalForm() {
    const form = document.querySelector("#proposal-form");

    if (!form) return;

    const titleInput =
        document.querySelector("#proposal-title");

    const descriptionInput =
        document.querySelector("#proposal-description");

    const submitButton =
        document.querySelector("#proposal-submit");

    const message =
        document.querySelector("#proposal-message");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const newInitiative = {
            title: titleInput.value.trim(),
            body: descriptionInput.value.trim(),
            userId: 1
        };

        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
        message.textContent = "";

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",

                    headers: {
                        "Content-type":
                            "application/json; charset=UTF-8"
                    },

                    body: JSON.stringify(newInitiative)
                }
            );

            const data = await response.json();

            if (response.status === 201) {
                message.textContent =
                    `Proposal submitted successfully! ID: ${data.id}`;

                form.reset();
            } else {
                message.textContent =
                    "Failed to submit proposal.";
            }

        } catch (error) {

            console.error(
                "Proposal submission error:",
                error
            );

            message.textContent =
                "Something went wrong. Please try again.";

        } finally {

            submitButton.disabled = false;
            submitButton.textContent =
                "Submit Proposal";
        }
    });
}
// ===============================
// ROUTER NAVIGATION
// ===============================

function initRouter() {
    window.addEventListener("hashchange", router);
}
// ===============================
// APPLICATION ENGINE
// ===============================

function initApp() {
    console.log("Synexus App Engine Started");

    // Global features — initialized once
    initThemeToggle();
    initMobileMenu();
}
    // Router
    initRouter();

    // Load current route
    router();


// ===============================
// START APPLICATION
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    initApp
);
// ===============================
// GITHUB DEVELOPER LOOKUP
// ===============================

function initGitHubLookup() {

    const githubUsername =
        document.querySelector("#github-username");

    const profileCard =
        document.querySelector("#dev-profile-card");

    const reposGrid =
        document.querySelector("#repos-grid");


    if (
        !githubUsername ||
        !profileCard ||
        !reposGrid
    ) {
        return;
    }


if (githubUsername.dataset.initialized === "true") {
    return;
}

githubUsername.dataset.initialized = "true";
   let controller;
   async function getDeveloperProfile(username) {

    if (username === "") {
        profileCard.innerHTML = "";
        reposGrid.innerHTML = "";
        return;
    }
    if (controller) {
    controller.abort();
}

controller = new AbortController();

    try {

        profileCard.innerHTML = `
            <p>Fetching data...</p>
        `;
            reposGrid.innerHTML = "";


            // ===============================
            // FETCH PROFILE
            // ===============================

        const response =
    await fetch(
        `https://api.github.com/users/${username}`,
        {
            signal: controller.signal
        }
    );

            if (!response.ok) {

    if (
        response.status === 403 ||
        response.status === 429
    ) {
        throw new Error(
            "API Rate Limit exceeded. Please wait a moment."
        );
    }

    throw new Error(
        "GitHub user not found"
    );
}

            const data =
                await response.json();


            // ===============================
            // DISPLAY PROFILE
            // ===============================

            profileCard.innerHTML = `
                <img
                    src="${data.avatar_url}"
                    alt="${data.name || data.login}"
                >

                <h3>
                    ${data.name || data.login}
                </h3>

                <p>
                    ${data.bio || "No bio available."}
                </p>
            `;


            // ===============================
            // FETCH REPOSITORIES
            // ===============================

const reposResponse =
    await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
        {
            signal: controller.signal
        }
    );

if (
    reposResponse.status === 403 ||
    reposResponse.status === 429
) {
    throw new Error(
        "API Rate Limit exceeded. Please wait a moment."
    );
}

const repos =
    await reposResponse.json();


            // ===============================
            // EMPTY STATE
            // ===============================

            reposGrid.innerHTML = "";

            if (repos.length === 0) {

                reposGrid.innerHTML =
                    "<p>No public repositories found.</p>";

                return;
            }


            // ===============================
            // RENDER REPOSITORIES
            // ===============================

            repos.forEach((repo) => {

                reposGrid.innerHTML += `
                    <div class="initiative-card">

                        <h3>
                            ${repo.name}
                        </h3>

                        <p>
                            ${
                                repo.description ||
                                "No description provided."
                            }
                        </p>

                        <a
                            href="${repo.html_url}"
                            target="_blank">
                            View Repository
                        </a>

                    </div>
                `;

            });


        } catch (error) {

    if (error.name === "AbortError") {
        return;
    }

    profileCard.innerHTML = `
        <p>${error.message}</p>
    `;

    reposGrid.innerHTML = "";

}
}


   const debouncedSearch = debounce(() => {

    const username =
        githubUsername.value.trim();

    getDeveloperProfile(username);

}, 500);

githubUsername.addEventListener(
    "input",
    debouncedSearch
);

}