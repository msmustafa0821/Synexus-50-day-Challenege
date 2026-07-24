🚀 Synexus 50-Day Web Development Challenge📅 Day 8: UI Micro-Interactions & Hover State Enhancements🎯 ObjectiveElevate the user experience of the Synexus landing page by implementing smooth, accessible, and high-performance micro-interactions using modern CSS properties.🔑 Key ImplementationsProfile Card Elevation: Engineered a clean 3D lift effect on .profile-card:hover using transform: translateY(-5px) paired with multi-layered box-shadow transitions.Navigation Link Hover Effects: Integrated smooth color transitions (transition: color 0.3s ease) across global navigation anchors for immediate visual feedback.Form CTA Polish: Added interactive state feedback on the membership submission button including hover elevation, active press-down states, and disabled styling (cursor: not-allowed).Performance Optimization: Leveraged CSS GPU-accelerated properties (transform, opacity) over costly layout reflows (top, margin) to maintain a locked 60fps interaction pipeline.🛠️ Key Code SnippetCSS/* Card Lift & Shadow Transition */
.profile-card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}




📅 Day 9: Web Accessibility (A11y) Standards & Audit🎯 ObjectiveAudit and refactor the codebase to align with WCAG 2.1 AAA guidelines, ensuring keyboard accessibility, screen-reader compatibility, and achieving a 100/100 Lighthouse Accessibility score.🔑 Key ImplementationsKeyboard Skip Link: Built a visually hidden .skip-link element that brings keyboard users directly to <main id="main-content">, bypassing repetitive navigation menus upon tapping Tab.Keyboard Focus Ring (:focus-visible): Applied global :focus-visible outline indicators to all interactive elements (a, button, input, textarea) using custom CSS variables, preventing focus-state loss during keyboard navigation.Screen Reader Audit: Upgraded all alt text attributes to provide meaningful context (e.g., changing alt="Logo" to alt="Synexus Community Logo") and verified structural heading hierarchy (h1 $\rightarrow$ h3).Color Contrast Refactoring: Adjusted body and subtext color variables (var(--text-color)) against light background containers to pass strict WCAG 4.5:1 minimum contrast thresholds.Automated Testing: Conducted Chrome Lighthouse audits to verify accessibility metrics and DOM compliance.🛠️ Key Code SnippetHTML<!-- Accessibility: Keyboard Skip Navigation Link -->
<a href="#main-content" class="skip-link">Skip to main content</a>
CSS/* Accessibility: Keyboard-only Focus Ring Indicator */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 3px;
}
📊 Tech Stack & StandardsLanguages: HTML5, CSS3Layout Engine: CSS Grid, Flexbox, Custom CSS Variables (:root)Standards: WCAG 2.1 Guidelines, Chrome Lighthouse Audits
