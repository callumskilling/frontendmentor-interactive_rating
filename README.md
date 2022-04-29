# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: https://www.frontendmentor.io/solutions/rating-submission-using-javascript-r1tbmeKH9
- Live Site URL: https://callumskilling.github.io/frontendmentor-interactive_rating/

## My process

I started with the HTML and styled with a mobile first approach. After getting a starting point with the conten, I then tackled the Javascript to retrieve what I needed from the DOM and write the function that would provide the inner HTML for the result on the second state.

### Built with

- HTML
- CSS custom properties
- Flex
- Mobile-first workflow

### What I learned

I struggled with keeping my pseudo CSS working after a user selects their rating, the color change prompted on hovering stopped working, I have not **yet** found the solution to this.

I did enjoy using custom properties in my CSS and noticing small parts of the design that make it look a lot more professional and less flat:

```css
:root {
    --color-primary-orange: hsl(25,97%,53%);
    --color-neutral-white: hsl(0,0%,100%);
    --color-neutral-light-grey: hsl(217, 12%,63%);
    --color-dark-dark-blue: hsl(213,19%,18%);
    --color-dark-dark-blue-gradient: radial-gradient(at top,hsl(213,19%,18%), hsl(213,19%,18%, 0.3));
    --color-dark-very-dark-blue: hsl(216,12%,8%);
}
```
And I thought this would be a great time for using a switch statement:

```js
switch (number) {
        case 1:
            ratingOne.style.backgroundColor = "var(--color-neutral-light-grey)";
            ratingOne.style.color = "var(--color-neutral-white)";
            ratingStatement.innerHTML="You selected 1 out of 5";
            break;
```

### Continued development

Definitely want to learn more about how I could have kept the pseudo css working after my function ran.

### Useful resources

https://www.pureref.com - Primarily a drawing tool but it has been handy to use when I have not yet gone Pro with my Frontend Mentor membership so I didn't get the design files, just jpegs.

## Author

- Website - Callum Skilling (https://www.callumskilling.me)
