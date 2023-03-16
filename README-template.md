# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.jpg)




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-HTML
-CSS
-Create-react-app
-Validator 



### What I learned

This was a great project to practice my react skills. It was tricky to create an error on the form. I ended up using form validation. 

```js 

  function handleSubmit(event) {
    event.preventDefault();
    const validEmail = validator.isEmail(formData.email);

    // takes previous state and updates boolen base on validator
    setData((prev) => ({
      ...prev,
      valid: validEmail,
    }));
  }



```
This code above allows the validator to validator the form data when the submit button is clicked. 

```js 


{formData.valid === false && (
              <p className="form-error">Oops! Please Check your email</p>

```

This code above is a conditional render if the form data is false. So if not valid, the "oops" info will show up. 

### Continued development

I want to focus on more React hooks and how to simplify my code in the future. Also, working on the CSS of background images. 


## Author

- Website - [coltensiemer.dev]
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/coltensiemer)


