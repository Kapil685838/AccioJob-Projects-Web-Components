// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// below js for active class in navbar
// let nav_items = document.getElementsByClassName('nav-item');
let nav_items = document.querySelectorAll('#navbar > .nav-item');
console.log(nav_items);

nav_items.forEach((item) => {
  item.addEventListener('click', myActive);
});

function myActive(event) {
  nav_items.forEach((item) => {
    if (item == event.target) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}