# 🚀 Synexus Web Development Challenge — Days 23–27

A five-day progression focused on turning the Synexus website into a more interactive, stateful, and API-driven application using **Vanilla JavaScript**.

---

# 🗓️ Day 23: Event Delegation & Interactive Modals

## 🎯 Problem Statement

Static buttons and cards are not enough for a modern web application. The goal of Day 23 was to introduce interactive UI components using **Event Delegation** and reusable modal behavior.

Instead of attaching individual listeners to every dynamically generated element, a single parent listener was used to handle interactions efficiently.

## 🛠️ Concepts Covered

* Event Delegation
* `event.target`
* `closest()`
* Dynamic event handling
* Modal overlays
* Opening and closing modals
* Keyboard interaction with `Escape`
* DOM manipulation

## ⚙️ Implementation

A click listener was attached to the main project grid:

```javascript
dynamicGrid.addEventListener("click", (e) => {
    const button = e.target.closest(".view-btn");

    if (!button) return;

    const title =
        button.getAttribute("data-title");

    modalTitle.textContent = title;
    modalOverlay.style.display = "flex";
});
```

The modal can also be closed by:

* Clicking the close button
* Clicking outside the modal
* Pressing the `Escape` key

## 🧠 Key Learning

Event Delegation makes dynamic interfaces easier to manage because a single parent listener can handle events from multiple child elements.

---

# 🗓️ Day 24: Stateful UI & Local Storage

## 🎯 Problem Statement

A task tracker should not lose its data whenever the page refreshes. Day 24 focused on building a **stateful task management system** using JavaScript objects and `localStorage`.

## 🛠️ Concepts Covered

* JavaScript state
* Arrays of objects
* CRUD operations
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`
* Dynamic DOM rendering
* Checkbox state management
* Delete functionality

## ⚙️ Task State

Each task is represented as an object:

```javascript
{
    id: Date.now(),
    text: taskText,
    completed: false
}
```

The complete task state is stored in:

```javascript
localStorage.setItem(
    "taskState",
    JSON.stringify(taskState)
);
```

When the application loads, the saved state is restored:

```javascript
let taskState =
    JSON.parse(
        localStorage.getItem("taskState")
    ) || [];
```

## ✨ Features

* Add tasks
* Mark tasks as completed
* Delete tasks
* Persist tasks after refresh
* Dynamically render the task list

## 🧠 Key Learning

The UI should reflect a central state rather than relying only on manually changing individual DOM elements.

---

# 🗓️ Day 25: Kanban Board & Drag-and-Drop

## 🎯 Problem Statement

Task management becomes more visual when tasks can be moved between workflow stages. Day 25 introduced a **Kanban Board** with native HTML5 drag-and-drop functionality.

## 🛠️ Concepts Covered

* HTML5 Drag and Drop API
* `dragstart`
* `dragend`
* `dragover`
* `drop`
* DOM movement
* Dynamic task positioning
* Local Storage persistence

## ⚙️ Board Structure

The board contains three workflow columns:

```text
To Do → In Progress → Done
```

Each task card can be dragged between columns.

During dragging:

```javascript
card.classList.add("is-dragging");
```

When dropped:

```javascript
column.appendChild(draggedElement);
```

## 💾 Persistence

The Kanban state is saved using:

```javascript
localStorage.setItem(
    "synexus_kanban",
    JSON.stringify(boardState)
);
```

The saved board is restored when the page loads.

## 🧠 Key Learning

Drag-and-drop interactions can be combined with persistent application state to create a functional project-management interface.

---

# 🗓️ Day 26: REST API & GitHub Contributor Lookup

## 🎯 Problem Statement

The Synexus platform needed a way to dynamically retrieve information about community developers instead of relying entirely on static content.

Day 26 introduced the **GitHub REST API** and asynchronous JavaScript.

## 🛠️ Concepts Covered

* REST APIs
* `fetch()`
* `async/await`
* Promises
* HTTP responses
* JSON parsing
* API error handling
* Dynamic DOM rendering
* External data integration

## 🔗 GitHub API

The application requests GitHub user information using:

```javascript
const response =
    await fetch(
        `https://api.github.com/users/${username}`
    );
```

The response is converted into a JavaScript object:

```javascript
const data =
    await response.json();
```

## 👤 Contributor Lookup

Users can enter a GitHub username and retrieve:

* Profile avatar
* Name
* Username
* Bio

The information is dynamically inserted into:

```html
<div id="dev-profile-card"></div>
```

## ⚠️ Error Handling

Invalid usernames are handled using:

```javascript
if (!response.ok) {
    throw new Error(
        "GitHub user not found"
    );
}
```

A `try/catch` structure prevents API failures from breaking the application.

## 🧠 Key Learning

External APIs allow a frontend application to consume real-world data and dynamically update the interface.

---

# 🗓️ Day 27: API Array Iteration & Dynamic Feeds

## 🎯 Problem Statement

Fetching a single GitHub profile was only the beginning. Real applications need to process **arrays of data** such as social feeds, repositories, products, and project lists.

Day 27 extended the Community Contributor Lookup to fetch and display the developer's **six most recently updated public repositories**.

## 🛠️ Concepts Covered

* REST API arrays
* Query parameters
* `Array.forEach()`
* Dynamic HTML generation
* DOM clearing
* Empty states
* Logical OR (`||`)
* Multiple API requests
* Repository cards

## 🔗 Repository Endpoint

The GitHub repository endpoint uses:

```javascript
https://api.github.com/users/${username}/repos?sort=updated&per_page=6
```

### Query Parameters

```text
sort=updated
```

Sorts repositories based on their latest updates.

```text
per_page=6
```

Limits the response to six repositories.

## 🔄 Repository Rendering

The returned repository array is iterated using:

```javascript
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
```

## 🧹 Clearing Previous Results

Before rendering new search results:

```javascript
reposGrid.innerHTML = "";
```

This prevents repositories from previous searches from stacking with the new results.

## 📭 Empty State

If the developer has no public repositories:

```javascript
if (repos.length === 0) {

    reposGrid.innerHTML =
        "<p>No public repositories found.</p>";

    return;
}
```

## 🛡️ Null Fallback

GitHub repositories may not have descriptions.

Instead of displaying:

```text
null
```

the application uses:

```javascript
repo.description ||
"No description provided."
```

## 🎯 Final GitHub Lookup Flow

```text
User enters GitHub username
          ↓
Fetch GitHub profile
          ↓
Display contributor profile
          ↓
Fetch repositories
          ↓
Sort by recently updated
          ↓
Limit to 6 repositories
          ↓
Check empty state
          ↓
Iterate with forEach()
          ↓
Generate repository cards
          ↓
Display repository links
```

---

# 🧠 Overall Learning — Days 23–27

Across these five days, the Synexus project evolved from a collection of interactive components into a more structured JavaScript application.

### Day 23

**Event Delegation + Modals**

Learned how to efficiently handle dynamic UI interactions.

### Day 24

**State Management + CRUD**

Learned how to maintain application state and persist it using Local Storage.

### Day 25

**Drag-and-Drop Kanban**

Built a visual task workflow with persistent board state.

### Day 26

**REST API Integration**

Connected Synexus to the GitHub API and displayed live developer information.

### Day 27

**API Arrays + Dynamic Feeds**

Processed repository arrays and dynamically generated repository cards.

---

# 🚀 Final Result

By the end of Day 27, Synexus includes:

* 🌙 Persistent Dark Mode
* 📱 Responsive Navigation
* 📝 Membership Form
* 💾 Local Storage Persistence
* 📋 Task Tracker
* 🗂️ Kanban Board
* 🖱️ Drag-and-Drop Tasks
* 🔍 Initiative Search
* 🪟 Interactive Modals
* 👤 GitHub Contributor Lookup
* 📡 REST API Integration
* 📚 Dynamic Repository Feed
* 🔄 Recently Updated Repository Sorting
* 📭 Empty States
* 🛡️ Null Data Fallbacks
* 🧭 SPA Hash Router

---

# 📚 Resources

* [MDN Web Docs — Event Delegation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
* [MDN Web Docs — localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [MDN Web Docs — HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
* [MDN Web Docs — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [GitHub REST API Documentation](https://docs.github.com/en/rest)
* [GitHub — List repositories for a user](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user)
* [MDN — Array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN — Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

---

# 🏁 Progress

**Day 23 → Day 27 Complete ✅**

> From interactive DOM components to persistent state, drag-and-drop workflows, and real-time GitHub API data — Synexus is becoming a fully interactive JavaScript application.
