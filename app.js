// get a date for current year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// show and hide navbar items
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navbar');

burger.addEventListener('click', function(){
    navBar.classList.toggle('show-nav');
} );


// add functionality to dropdown menu
const btnChevron = document.querySelectorAll('.fa-chevron-down');
const listItems = document.querySelector('.list-items');
const listContent = document.querySelectorAll('.dropdown-content');
//console.log(btnChevron);
//console.log(listItems);
//console.log(listContent);

listItems.addEventListener('click', function(e){
    const id = e.target.dataset.id
    //console.log(e.target.dataset.id);
    if (id) {
        // if already id exsist remove active 
        listContent.forEach((content) => {
                content.classList.remove('active');
            });

        // add active for specific id 
        const element = document.getElementById(id);
                console.log(element)
                element.classList.add("active");

        }

});

