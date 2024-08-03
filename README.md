# 1. What is ES6 and what are the new features introduced in ES6?
**ES6 (ECMAScript 6)**, also known as ECMAScript 2015, is a major update to the JavaScript programming language. It introduced a vast array of new features that significantly improved code readability, maintainability, and efficiency.

### Core Language Improvements
* **let and const:** Introduced block-scoped variables, offering better control over variable lifetimes compared to `var`.
* **Arrow functions:** Provide a concise syntax for writing functions, especially useful for short functions and callbacks.
* **Template literals:** Allow for string interpolation using backticks (``), making string manipulation easier and more readable.
* **Default and rest parameters:** Provide flexibility in function arguments, allowing default values and gathering remaining arguments into an array.
* **Destructuring:** Offers a concise way to extract values from arrays and objects into variables.
* **Classes:** Introduced a syntax for creating object-oriented classes, making code more structured and easier to understand.
* **Modules:** Enable modular code organization, promoting code reusability and better structure.

### Data Structures
* **Maps and Sets:** New data structures for storing key-value pairs and unique values, respectively.
* **Promises:** A way to handle asynchronous operations more cleanly than callbacks.

### Other Notable Features
* **Iterators and generators:** Provide more control over iteration and asynchronous programming.
* **Symbol:** A new primitive data type for creating unique identifiers.
* **Enhanced object literals:** Improved syntax for creating objects.
* **Spread and rest operators:** Versatile operators for working with arrays and objects.

# 2. What is Event Bubble and Event Delegation in JS?
## Event Bubbling and Event Delegation in JavaScript

### Event Bubbling
Event bubbling is a concept in the DOM (Document Object Model) where an event, once triggered on an element, propagates up through its parent elements until it reaches the root element (usually the `document` object).

**Example:**
Imagine clicking a button inside a div. The click event will first be handled by the button, then by the div, and finally by the document.

### Event Delegation
Event delegation is a technique that leverages event bubbling to handle events on multiple child elements efficiently. Instead of attaching event listeners to each child element, you attach a single event listener to a parent element. When an event occurs on a child element, it bubbles up to the parent, and the event listener on the parent can determine which child element was the target.

**Benefits of Event Delegation:**
* Improved performance: Fewer event listeners to manage.
* Dynamically added elements: Event handlers automatically work on new elements.
* Code organization: Centralized event handling.

**Example:**
To handle clicks on multiple list items within an unordered list, you can attach a click event listener to the unordered list and then check the target element of the event to determine which list item was clicked.

```javascript
const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent + ' was clicked');
  }
});
```

# 3. What is the difference between localstorage , session storage and cookies.
## Local Storage, Session Storage, and Cookies
### Local Storage
* **Persistence:** Data persists even after the browser is closed.
* **Scope:** Data is accessible within the same origin (domain, protocol, port).
* **Capacity:** Typically 5MB or more (browser-dependent).
* **Usage:** Storing user preferences, application data, offline data.

### Session Storage
* **Persistence:** Data is only available for the current browser session.
* **Scope:** Data is accessible within the same origin (domain, protocol, port) and tab.
* **Capacity:** Typically 5MB or more (browser-dependent).
* **Usage:** Storing temporary data, shopping cart items, user session information.

### Cookies
* **Persistence:** Data can be set to expire at a specific time or persist indefinitely.
* **Scope:** Can be accessible by the server, but typically limited to the same domain.
* **Capacity:** Very limited, usually around 4KB.
* **Usage:** Storing user authentication, tracking user sessions, personalization.

### Comparison Table

| Feature | Local Storage | Session Storage | Cookies |
|---|---|---|---|
| Persistence | Long-term | Session-based | Expiry-based |
| Scope | Same origin | Same origin and tab | Same domain (can be server-accessible) |
| Capacity | Large (5MB+) | Large (5MB+) | Small (4KB) |
| Usage | Preferences, app data | Temporary data, session info | Authentication, tracking, personalization |

### Key Differences
* **Persistence:** Local storage is long-term, session storage is for a single session, and cookies can have various expiration times.
* **Scope:** Local storage and session storage are limited to the client-side, while cookies can be accessed by the server.
* **Capacity:** Local storage and session storage have much larger storage capacities than cookies.
* **Security:** Cookies are more exposed to security risks due to their ability to be sent to the server with every request.

**When to use which:**
* **Local Storage:** Store data that needs to persist across browser sessions, such as user preferences or application settings.
* **Session Storage:** Store temporary data that is only needed for the current session, such as shopping cart items or form data.
* **Cookies:** Store small pieces of data that need to be sent to the server, such as authentication tokens or user tracking information.


# 4. In CSS what is the difference between display inline , display inline block and display block?
## Understanding Display: Inline, Inline-Block, and Block

The `display` property in CSS controls how an element is displayed on a page. The three main values for this property are `inline`, `inline-block`, and `block`.

### Display: Inline
* Elements are displayed in line with other content.
* Do not start a new line.
* Cannot set width or height.
* Margins and padding only affect horizontal spacing.

**Example:**
```css
span {
  display: inline;
}
```
# 5. What are new features in CSS3?

## CSS3: A Revolution in Styling

CSS3 brought a significant leap forward in web design, offering a plethora of new features that enhanced creativity and efficiency. Here's a breakdown of some key features:

### Visual Enhancements
* **Rounded Corners:** Create smooth edges on elements using `border-radius`.
* **Box Shadows:** Add depth and dimension with `box-shadow`.
* **Text Shadows:** Improve text readability and aesthetics with `text-shadow`.
* **Gradients:** Design stunning backgrounds with `linear-gradient` and `radial-gradient`.
* **Opacity:** Control element transparency with `opacity`.
* **Multiple Backgrounds:** Layer multiple images or colors on elements.

### Layout and Flexibility
* **Flexbox:** A powerful layout model for creating responsive and flexible designs.
* **Grid Layout:** A two-dimensional grid system for complex layouts.
* **Columns:** Create multi-column layouts with `column-count`, `column-width`, and `column-gap`.
* **Responsive Design:** Build websites that adapt to different screen sizes using media queries.

### Animations and Transitions
* **Transitions:** Create smooth changes in property values over time.
* **Animations:** Define complex animations with keyframes and timing functions.
* **Transforms:** Rotate, scale, skew, or translate elements.

### Typography
* **Font Faces:** Embed custom fonts into your website.
* **Text-decoration:** Enhance text appearance with various decorations.
* **Word-wrap:** Improve text readability on different screen sizes.

### Other Notable Features
* **Selectors:** Improved selectors for more precise styling.
* **Media Queries:** Create responsive designs based on screen size, orientation, and other factors.
* **Generated Content:** Dynamically generate content using CSS.

**Example:**
```css
/* Rounded corners */
div {
  border-radius: 10px;
}

/* Box shadow */
button {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

/* Gradient */
body {
  background: linear-gradient(to right, red, yellow);
}
```
