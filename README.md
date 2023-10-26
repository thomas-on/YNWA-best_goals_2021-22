# YNWA-best_goals_2021-22

### The HTML structure
The body consists of a header and a main section. The header has a flattened HTML structure (see The CSS rules and styles below) while the main section has a typical parent:child structure rendered out by a JavaScript function.

### The CSS rules
The header was styled using grid template rules, allowing for the cleaner and flattened HTML to be used. Using CSS grid for the header allows for the easy creation of flexible layout.
The main section, grouped as one container, each for a particular goal event, was also styled using grid template rules, since the layout required both row and column direction.
The comments container was styled using flexbox, since it only needed a column flex-direction.

### The JavaScript functions
Functions renderAllGoals and renderEachGoal
Function enderAllGoals kicks off by rendering all the goals iteratively and by calling another function (renderEachGoal()) that renders each goal event separately as a template literal and displayed using innerHTML method.

#### Function handleLikeClick
This event is handled by a single document event listener targeted at the like icon.
An array filter method filters out the target event as a separate new array, by matching the unique ID (uuid) of both the clicked like icon and the event in the data file.
The returned target event will have its likes incremented or decremented, depending on whether it has been liked before.

#### Function handleCommentClick
This event is handled by a same document event listener but targeted at the comment icon.
Again the the target event is filtered out based on matching uuids and the returned target event comment status was flipped.
The comment container is toggled to display or hide when the comment icon is clicked.

### Responsive Design
The app layout automatically adapts to the user screen, and was designed using a mobile-first approach. Media queries were used to adapt the layout for larger screens.

### User Experience
The alt attribute was specified for all the images, to improve user experience for those using assistive technologies like screen readers.
Change of color scheme was also employed to indicate to the user that an icon have been clicked.
Comment section is hidden from user until the comment icon is clicked, leading to a cleaner user interface.

### Progressive Web Application
A web application manifest consisting of a JSON object is created to provide the app information to the browser, so that it can provide comparable user experience across multiple platforms.
