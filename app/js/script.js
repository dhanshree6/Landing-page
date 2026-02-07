!function ($) {
  "use strict";
  // *********************************************
  //     document ready start 🚩
  // ****************************
  //  console.log("Script loaded!");


  // Your Code 🗒️!function ($) {
  "use strict";
  // *********************************************
  //     document ready start 🚩
  // ****************************
  
  const form = document.getElementById('myform');
  const firstNameInput = document.getElementById('fname');
  const lastNameInput  = document.getElementById('lname');
  const mobileInput    = document.getElementById('mobile');
  const emailInput     = document.getElementById('email');

  const nameRegex  = /^[A-Za-z ]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validate();
  });

  // Clear errors while typing
  form.addEventListener("input", () => {
    document.querySelectorAll(".msg").forEach(el => {
      el.textContent = "";
      el.classList.remove("error");
    });
  });

  function validate() {

    const firstName = firstNameInput.value.trim();
    const lastName  = lastNameInput.value.trim();
    const mobile    = mobileInput.value.trim();
    const email     = emailInput.value.trim();

    // First Name
    if (firstName === "") {
      setErrorMsg(firstNameInput, "Please fill First name");
    } else if (firstName.length <= 2 || !nameRegex.test(firstName)) {
      setErrorMsg(firstNameInput, "Enter valid First name");
    } else {
      setSuccess(firstNameInput);
    }

    // Last Name
    if (lastName === "") {
      setErrorMsg(lastNameInput, "Please fill Last name");
    } else if (lastName.length <= 2 || !nameRegex.test(lastName)) {
      setErrorMsg(lastNameInput, "Enter valid Last name");
    } else {
      setSuccess(lastNameInput);
    }

    // Mobile
    if (mobile === "") {
      setErrorMsg(mobileInput, "Please fill Mobile Number");
    } else if (!phoneRegex.test(mobile)) {
      setErrorMsg(mobileInput, "Enter valid 10-digit number");
    } else {
      setSuccess(mobileInput);
    }

    // Email
    if (email === "") {
      setErrorMsg(emailInput, "Please fill Email");
    } else if (!emailRegex.test(email)) {
      setErrorMsg(emailInput, "Enter valid Email");
    } else {
      setSuccess(emailInput);
    }
  }

  function setErrorMsg(input, message) {
    const field = input.closest('.field');
    const msg = field.querySelector('.msg');
    msg.textContent = message;
    msg.classList.add("error");
  }

  function setSuccess(input) {
    const field = input.closest('.field');
    const msg = field.querySelector('.msg');
    msg.textContent = "";
    msg.classList.remove("error");
  }

  $(document).ready(function () {
    // *********************************************
    //     Slider start 🚩
    // ****************************
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: false,
      prevArrow: `<button class="prev" type="button">←</button>`,
      nextArrow: `<button class="next" type="button">→</button>`
    });
  });

  // *********************************************
  //     Do not write your code below. ✋😠
  // ****************************
}.call(window, window.jQuery); // jquery initializer
