# Frontend Mentor - Body Mass Index Calculator solution

This is my solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Mobile

![](/src/assets/images/mb01.png)

![](/src/assets/images/mb02.png)

#### Tablet

![](/src/assets/images/tab01.png)

#### Desktop

![](/src/assets/images/dt01.png)

### Links

- Solution URL: [solution](https://github.com/roodhouse/frontend-mentor-bmi)
- Live Site URL: [live site](https://bmi.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

Styling the radio buttons was the first challenge in this project. I leaned about the appearance and accent-color properties. Also how to require a change on hover, a different change on checked and another different change on checked&hovered. Here is my rather long tailwindcss for an input in this project:

```js
<input name='selection' type="radio" id='metric' value='metric' className='mr-[18px] w-[31px] h-[31px] appearance-none rounded-[50%] border border-solid border-borders checked:bg-blue checked:border-[8px] checked:border-solid checked:border-[#d8e2e7] hover:border-blue checked:hover:bg-blue checked:hover:border-[#d8e2e7]'/>
```
The next challenge that has been difficult is while in tablet view how to keep the image scaled correctly and not sacrifice a piece of the image. I am using object-fit: cover on the image and it scales nicely. However, the rounded edges of the image are not visible. If I allow do not use object-fit: cover then the rounded edges are visible but the image does not scale correctly.

#### Without object fit
![](/src/assets/images/noObjectFit.png)

#### With object fit
![](/src/assets/images/objectFit.png)

I got a lot of practice with passing props between components with this project. I am still not where I want to be but I am becoming more comfortable with it. Another thing I was able to do was to use a conditional inside of the return of a component. I've done this before but was able to use it this time for a solution to a problem was having. Here is the code:

```js
return (
    <>
      <div id="bottomResultsContainer" className='p-8 bg-blue rounded-2xl flex flex-col md:rounded-[16px_999px_999px_16px] md:h-[185px] md:flex-wrap md:justify-center'>
    {isNaN(userBMI) ? (
      <>
        <div id="welcomeContainer">
          <div id="welcomeHeading" className='font-["Inter"] text-white text-2xl tracking-[-1.2px] font-semibold mb-4'>
            <h1>Welcome!</h1>
          </div>
          <div id="welcomeCopy" className='font-["Inter"] text-white text-sm leading-[150%] font-normal'>
            <p>Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        </div>
      </>
    ): (
      <>
        <div id='resultsHeading' className='font-["Inter"] font-semibold leading-[150%] text-white md:w-[50%] md:pb-2 xl:text-base xl:leading-[150%]'>
          <p>Your BMI is...</p>
        </div>
        <div id='resultsNumber' className='font-["Inter"] mb-6 text-5xl font-semibold leading-[110%] tracking-[-2.4px] text-white md:w-[50%] md:mb-0 md:pb-4 xl:text-[64px] xl:tracking-[-3.2px] xl:pb-0'>
          <p>{isNumber()}</p>
        </div>
        <div id='resultsInfo' className='font-["Inter"] text-sm font-normal leading-[150%] text-white md:w-[50%]'>
          <p>{bmiOutput()}<span className='font-semibold'>{idealWeight()}</span></p>
        </div>
      </>
    )}
    </div>
    </>
  )
```

### Useful resources

- [radio button styling](https://bryntum.com/blog/3-ways-to-style-radio-buttons-with-modern-css/) - This article helped me with the styling of the radio buttons.

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)