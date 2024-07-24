# Frontend Mentor - Galleria slideshow site solution

This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
    - [How I built the masonary layout](#how-i-built-the-masonary-layout)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slideshow and view each painting in a lightbox

### Screenshot

- desktop

![Screen Shot 2567-07-24 at 16 52 10](https://github.com/user-attachments/assets/9a0796f0-6b26-46b7-b0ca-5a5811283c8b)
![Screen Shot 2567-07-24 at 16 59 48](https://github.com/user-attachments/assets/788e5763-35f5-4f35-bcfa-a0889fc154e6)

- tablet

![Screen Shot 2567-07-24 at 17 00 16](https://github.com/user-attachments/assets/72c1ec2f-451e-4967-ac1a-886caa31d819)
![Screen Shot 2567-07-24 at 17 01 09](https://github.com/user-attachments/assets/e2ce5d6c-cb0d-46b8-8b33-88d81a942dbe)

- mobile

![Screen Shot 2567-07-24 at 17 01 52](https://github.com/user-attachments/assets/d061537c-a1d9-40ad-bb0d-b49f1e8f8b0b)
![Screen Shot 2567-07-24 at 17 02 15](https://github.com/user-attachments/assets/a7a59462-d38c-4502-8598-6a83239dd6be)

### Links

- Solution URL: [GitHub repo](https://github.com/Wannika123/fem-gallery)
- Live Site URL: [vercel](https://fem-gallery-9aokm2mhx-wannika-kuankachorns-projects.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- TypeScript

#### How I built the masonary layout

At First, I thought I had to install some npm. But I came across a very clever solution (see below for the source): by dividing grid rows into a small fraction, and do some calculation (using the height of an image) to find how many rows certain image need to span.

But in my case, there's a problem:

By setting `grid-template-rows: repeat(auto-fill, 5px)`, I didn't get every row height to be 5px as expected, but only the first row, and the other rows collaspe to fit the image. The above-mentioned solution doesn't seem to have this problem, I don't know if it's because it uses tailwind-CSS in that case (in my case, it's just pure CSS). But I learned that there's a property `grid-auto-rows` to set the height of the rows that are not explicitly set in `grid-template-rows`. And by setting `grid-auto-rows: 5px`, it works as I want.

But I came to another problem:

In the design of this challenge, each image has its own specific place in the grid layout, so that every column finishes neatly in the same row. But with the default placement, I didn't get that. 

And then I got to learn the behavior of the grid layout that I've never realized before: 

What I understood before is that the grid items place itself in the column consecutively, but it's actually not so. Rather, 'grid items place itself in the column that has the least rows occupied first', 'row' is the first priority, not 'column'. Anyway, I tried to fix that with `grid-column`. But then, I came to another problem:

By pushing certain grid item to the column that I wanted, I also pushed all the later grid items to later row (the row where pushed grid item ends) as well, and leaving the earlier rows blank. How I solved this problem is just desperately trying all the grid property, by typing 'grid' and see what property that VS code suggests. And I saw `grid-auto-flow`, I didn't know what it's used for, but I tried that, and then tried some of its values, then it came to this value: `grid-auto-flow: dense`. And then everything worked as I wanted.

I researched more about `grid-auto-flow`, and what `grid-auto-flow: dense` does is that it places grid items to fill any holes in the grid. The value `row dense` also works as well.

### What I learned

I started this project because I wanted to try more advanced features of NextJS. But it turned out that the most challenging thing in this project is 'CSS'. I think I learn quite a lot.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=NFQwi5AnG_s&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm) - Playlist on how to build an image gallery.

## Author

- Frontend Mentor - [@Wannika123](https://www.frontendmentor.io/profile/Wannika123)

## Acknowledgments

I have to thank Dave Gray, the teacher in the above-mentioned playlist.
