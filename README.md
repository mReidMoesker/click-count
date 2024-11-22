# Click counter

This project is designed for JavaScript beginners, specifically their first interaction with DOM content.

<h2>How to create this app:</h2>

1. Make an HTML layout. It doesn't have to be complicated, just a <button> and a <p> tag, as shown below.
```
    <div class="container center flex">
      <div class="click-button">
        <button class="click-here">Click here</button>
      </div>
    </div>
    <div class="center flex">
      <div class="counter">
        <p class="click-count">Click the button to start the game</p>
      </div>
    </div>
```
The reason I added so many <div> tags is so that I can center the button and the text, but you can use any creative design you want.
<hr>
2. Add styling. Styling is very important, especially for a fun atmosphere like the one in this application. I centered the button and text in my example, aand gave the web page a blue tint.

Make sure to use a CSS reset before adding any styling!
```
@charset "utf-8";

html {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 100%;
  height: 500px;
  margin-inline: auto;
}

.flex {
  display: flex;
}

.flex-between {
  justify-content: space-between;
}

.center {
  justify-content: center;
  align-items: center;
}

body {
  background-color: #6196ff;
  margin: 0px;
}
```

To center the button and text, all you have to do is put the button in a <div> tag with the container, center and flex classes. Do the same with the text, but remove the container tag, as seen in the HTML example.

You can style the button and text any way you want, but I did it this way:
```
button {
  width: 300px;
  height: 200px;
  background-color: aqua;
  color: blue;
  border: 1px solid #000000;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 400;
  transition: 4ms ease;
  cursor: pointer;
}

button:hover {
  background-color: blue;
  color: aqua;
  transition: 4ms ease;
}

p {
  font-weight: 600;
}
```

<hr>
3. Make the program work using Javascript.
Your code is looking good so far! All you need to do now is add functionality.
To do this, all you need to do is create a variable with the value zero, as seen below:

```
'use strict';

let clickCount = 0;
```
This will be where the information for the amount of clicks counted will be stored. It is set to zero by default, so that we start with the actual number of clicks when we add functionality.

next, you will need to select 2 elements from the web page. Your button, and your text. If you added a class to your button and text, you are set for this next step. If not, go back to your HTML and quickly add a class.

to access the elements, we will be using a built-in JavaScript function called ```querySelector()```. This function searches for a class or id, then adds it to your JavaScript code to be programmed, and in this case we will be using the prefix "document" to tell JavaScript to use our HTML document.
Here is what it should look like:
```
const button = document.querySelector('.click-button');
const display = document.querySelector('.click-count');
```

Next, you need to add a function called an 'event listener'. The name speaks for itself, all this function does is listen for an event, specifically the one you tell it to wait for. In this case, we will be using 'click', and using the prefix 'button', to tell the event listener to wait for the button to be clicked.
```
button.addEventListener('click')
```

Now we have an event listener, but it doesn't actually do anything. In order for the event listener to activate, we need to make it into an arrow function, like so:
```
button.addEventListener('click', () => )
```

Now we have to make the listener change our variable, clickCount, whenever the button is clicked. We can do so by adding ```{clickCount++}``` after the arrow in the arrow function. This will tell the event listener to increase the variable's value by 1 whenever it detects a click.
```
button.addEventListener('click', () => {clickCount++}
```

In order to display the information we have recieved, we now have to tell the event listener to change the text of the <p> tags. We can do this by adding on to our event listener, like so:
```
button.addEventListener('click', () => {clickCount++; display.innerText = `You clicked ${clickCount} times.`;})
```

Now, your web app should be fully operational! Have fun!
