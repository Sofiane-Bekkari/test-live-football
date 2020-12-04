// get a date for current year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// show and hide navbar items
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navbar');

burger.addEventListener('click', function(){
    navBar.classList.toggle('show-nav');
} );