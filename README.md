# 🚀 Synexus Web Development Challenge — Days 28 & 29

## 🔍 Day 28 — Real-Time API Search

### 🎯 Objective

Modernize the Synexus platform with a **Real-Time API Search** feature that fetches GitHub developer data while preventing excessive API requests.

### 🛠️ Technologies & Concepts

* Vanilla JavaScript (ES6+)
* GitHub REST API
* `fetch()`
* `async/await`
* Debouncing
* `AbortController`
* API error handling
* Dynamic DOM rendering

### ⚙️ What I Built

* Added real-time GitHub username search.
* Used **debouncing** to wait before sending an API request.
* Used `AbortController` to cancel previous requests when a new search starts.
* Fetched GitHub profile information dynamically.
* Fetched and displayed the user's latest repositories.
* Added loading and empty states.
* Added handling for GitHub `403` / `429` rate-limit responses.
* Integrated the feature into the existing SPA architecture.

### 🧠 Key Learning

Instead of sending an API request on every keystroke:

```text
User types
    ↓
Debounce delay
    ↓
API Request
    ↓
GitHub Response
    ↓
Update UI
```

This reduces unnecessary requests and provides a smoother search experience.

---

# 📤 Day 29 — Two-Way Data Streams (POST Requests)

### 🎯 Objective

Move from only **consuming API data** to also **sending user-generated data** using HTTP `POST` requests.

### 🛠️ Technologies & Concepts

* Vanilla JavaScript
* `fetch()`
* HTTP `POST`
* HTTP Headers
* `Content-Type`
* JSON serialization
* `JSON.stringify()`
* `async/await`
* HTTP `201 Created`
* UI loading states

### ⚙️ What I Built

Added a **"Propose an Initiative"** form to the Initiatives page.

Users can enter:

* Initiative title
* Initiative description

The form then sends the data to JSONPlaceholder using a `POST` request.

### 📦 POST Payload

```js
const newInitiative = {
    title: titleInput.value.trim(),
    body: descriptionInput.value.trim(),
    userId: 1
};
```

### 🌐 Request Configuration

```js
{
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newInitiative)
}
```

### 🛡️ Defensive UI

Implemented the bonus challenge:

* Submit button becomes disabled during the request.
* Button text changes to **"Submitting..."**.
* `finally` restores the button after the request completes.
* Successful requests display a confirmation message.
* Form resets after a `201 Created` response.

### 🎨 UI Improvements

Added custom CSS for:

* Modern proposal card
* Styled inputs and textarea
* Focus animations
* Synexus-themed submit button
* Success feedback
* Dark-mode support
* Mobile responsiveness

### 🧠 Key Learning

Day 29 introduced the complete two-way API flow:

```text
User Input
    ↓
JavaScript Object
    ↓
JSON.stringify()
    ↓
POST Request
    ↓
Server
    ↓
JSON Response
    ↓
UI Feedback
```

> **Note:** JSONPlaceholder is being used as a mock API, so the submitted proposal demonstrates the complete POST workflow but is not permanently stored in the Synexus database.

---

## 🏆 Days 28–29 Outcome

Across these two days, Synexus evolved from primarily **reading external API data** to supporting both **API consumption and API communication**.

### Skills Strengthened

* Real-time API integration
* Debounced search
* Request cancellation
* REST API concepts
* GET vs POST
* JSON serialization
* HTTP headers
* Async JavaScript
* API error handling
* Loading states
* Responsive UI development
* Defensive frontend programming

**Days 28 & 29 — Completed ✅**
