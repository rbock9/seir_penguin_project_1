# Project 1 Documentation
## by Rob Bock

## Introduction

As a student enrolled in General Assembly's Software Engineering - Immersive Remote boot camp, I was tasked with creating a game for my first project. Specifically, the game must be a 2-player competitive quiz game which pulls questions from a content management platform (Contentful), has responsive styling, uses jQuery, and is deployed on one or more websites.

As a lifelong fan of Nintendo video games, I chose to theme my game around the character Wario, a surly anti-hero from the Super Mario series. Writing the quiz questions and answers was a fairly simple and straightforward process, and I had a lot of fun styling the page layout to replicate Wario's body and color scheme.

## Technologies Used

- HTML
- CSS
- JS
- jQuery

## Challenges

For me, the most difficult part of the project was using jQuery's $.ajax function to pull quiz questions and answers from the Contentful database and into my game, but thankfully I used an excellent video tutorial series which greatly simplified that process for me. The tutorial also supplied most of the game logic, so most of my work involved styling and adding extra features/functionality to the game.

#### I had trouble with: 

Adding music and sound! Early in the process I decided to include sound effects and a background music function in my Javascript, but it wasn't long after including it that I realized having the sounds and music auto-play throughout the entire game could be somewhat grating and intrusive (much like Wario himself).

I was about halfway through building a toggle-able background music player in my Javascript when I discovered the process could be greatly simplified by just using the HTML audio element, so that's what I did! A Javascript-built music player may have been more impressive from a technical standpoint, but as William of Occam famously said, "the simplest solution is usually the best", and I've come to realize this is quite often true when coding.

#### I had fun with: 

Styling the game! One of the project requirements was to make the game have responsive styling, so I was able to make use of flexbox and em measurements to build the initial page with a mobile-first design approach.

During this process, I was repeatedly resizing my browser window to test how the page elements reacted, and I realized my game elements were vaguely reminiscent of Wario, who has been known to stretch and squeeze his elastic body in various ways throughout his games. 

This gave me the inspiration to style the page elements to look like Wario himself -- the header represents the top of Wario's head with his distinctive yellow cap, the question container was made to look like Wario's face, the answers box was Wario's body and purple overalls, and the player score containers at the bottom were perfect for replicating Wario's pointy green shoes.

Writing the alert messages in Wario's voice was also a blast, and I hope people enjoy the game, or at least find it mildly amusing.

#### Conclusion and random thoughts: 

I had a lot of fun with this project! In an ideal world I'd have more time to incorporate more features (like the browser alerts and the HTML music player) into my Javascript rather than using built-in elements, but I think this was overall a solid first project that made good use of the tools I've been introduced to thus far.

Also, for anyone interested, the background music is called "Greenhorn Forest" from the game "Wario World" for Nintendo GameCube.