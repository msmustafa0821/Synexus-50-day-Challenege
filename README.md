📅 Day 12 – Event-Driven Programming & Form Validation
🚀 Overview

Day 12 focused on building interactive web applications by responding to user actions through JavaScript events. Instead of creating static pages, I implemented event listeners to handle form submissions, validated user input, and prevented invalid data from being processed.

🎯 Objectives
Learn event-driven programming using JavaScript.
Capture and respond to form submission events.
Validate user inputs before processing.
Prevent default browser behavior using preventDefault().
🛠️ Technologies Used
HTML5
CSS3
Vanilla JavaScript
📚 Concepts Learned
addEventListener()
"submit" event
event.preventDefault()
DOM element selection
.value and .trim()
Basic form validation
Conditional statements (if...else)
Browser alerts
Console logging
💻 Features Implemented
Prevented page refresh on form submission.
Checked that the Name field is not empty.
Validated Email input by checking for the @ symbol.
Highlighted invalid fields using a red border.
Displayed alert messages for invalid inputs.
Logged "Application Ready for Server" when validation passed.
Cleared form fields after a successful submission.
📖 Key Takeaway

User input should never be trusted blindly. Client-side validation improves user experience by catching mistakes before data is sent to a server.

📅 Day 13 – Responsive Navigation & Mobile Menu
🚀 Overview

Day 13 was focused on improving the user experience across different screen sizes by implementing a responsive navigation menu. I built a mobile-friendly hamburger menu using JavaScript and CSS media queries while maintaining accessibility through ARIA attributes.

🎯 Objectives
Build a responsive navigation menu.
Toggle navigation links on mobile devices.
Improve accessibility using ARIA attributes.
Practice DOM manipulation with CSS classes.
🛠️ Technologies Used
HTML5
CSS3
Vanilla JavaScript
📚 Concepts Learned
querySelector()
classList.toggle()
addEventListener()
Media Queries
Mobile-first responsive design
ARIA attributes (aria-expanded)
CSS Flexbox
💻 Features Implemented
Created a hamburger menu for mobile devices.
Showed and hid navigation links dynamically.
Updated aria-expanded for better accessibility.
Used CSS media queries to adapt the layout across different screen sizes.
Improved navigation usability on smartphones and tablets.
📖 Key Takeaway

Responsive navigation is a fundamental part of modern web development. Combining JavaScript with CSS media queries creates interfaces that work seamlessly across devices.

📅 Day 14 – Dynamic DOM Rendering (Data vs. View)
🚀 Overview

Day 14 introduced one of the most important concepts in frontend development: separating data from presentation. Instead of hardcoding initiative cards directly in HTML, I stored project information inside JavaScript objects and dynamically generated the interface using loops and template literals.

🎯 Objectives
Separate application data from UI.
Generate HTML dynamically using JavaScript.
Render content from arrays of objects.
Implement conditional rendering based on project status.
🛠️ Technologies Used
HTML5
CSS3
Vanilla JavaScript
📚 Concepts Learned
Arrays
Objects
forEach()
Template Literals (`)
innerHTML
Dynamic DOM Rendering
Conditional Rendering
CSS Class Injection
💻 Features Implemented
Removed hardcoded initiative cards from HTML.
Created a projectsData array containing initiative information.
Dynamically generated initiative cards using forEach().
Injected cards into the DOM using innerHTML +=.
Added conditional CSS classes based on project status.
Displayed active projects with a green border.
Displayed completed projects with a gray border.
Successfully separated data from presentation logic.
📖 Key Takeaway

Modern frontend applications rarely hardcode UI elements. Instead, data drives the interface, allowing developers to build scalable, maintainable, and reusable applications. This concept forms the foundation for frameworks like React, Vue, and Angular.

🚀 Synexus Web Development Challenge

Days Completed: 12/50 • 13/50 • 14/50

Each day builds upon the previous one, gradually transforming a static webpage into a fully interactive, responsive, and dynamically rendered web application using HTML, CSS, and Vanilla JavaScript.
