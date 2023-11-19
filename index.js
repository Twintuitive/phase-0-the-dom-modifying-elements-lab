// I need to remove the main element.
var mainElement = document.getElementById('main');
mainElement.remove();

// Now, I'm going to create a new h1 element.
var newHeader = document.createElement('h1');

// I will give this h1 element an id of 'victory'.
newHeader.id = 'victory';

// I want this h1 element to say that I am the champion.
newHeader.textContent = 'John Doe is the champion'; // I'll replace 'John Doe' with my name.

// Finally, I'm going to add this new h1 element to my web page.
document.body.appendChild(newHeader);