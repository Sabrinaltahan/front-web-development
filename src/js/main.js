import _ from "lodash";

console.log(_.concat([10,15,20],[40,50]));

// Toggle menu on mobile
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
