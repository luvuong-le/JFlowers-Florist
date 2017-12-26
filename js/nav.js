let toggleDropdown = document.getElementById('toggle-dropdown');

let dropdown = document.getElementById('dropdown-list-flowers');

let symbol = document.getElementById("toggle-symbol");

toggleDropdown.addEventListener("click", (e) => {
    /* Show the dropdown nav */
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        symbol.classList.remove("fa-caret-right");
        symbol.classList.toggle("fa-caret-down");
    } else {
        dropdown.style.display = "none";
        symbol.classList.remove("fa-caret-down");
        symbol.classList.toggle("fa-caret-right");
    }
    
});

let toggleDropdown2 = document.getElementById('toggle-dropdown-2');

let dropdown2 = document.getElementById('dropdown-list-flowers-2');

let symbol2 = document.getElementById("toggle-symbol-2");

toggleDropdown2.addEventListener("click", (e) => {
    /* Show the dropdown nav */
    if (dropdown2.style.display === "none" || dropdown2.style.display === "") {
        dropdown2.style.display = "block";
        symbol2.classList.remove("fa-caret-right");
        symbol2.classList.toggle("fa-caret-down");
    } else {
        dropdown2.style.display = "none";
        symbol2.classList.remove("fa-caret-down");
        symbol2.classList.toggle("fa-caret-right");
    }

});

// Side Bar Nav 

let open = document.getElementById("open-btn");
let sideNav = document.getElementById("side-menu");
let close = document.getElementById("closeBtn");

open.addEventListener("click", () => {
    sideNav.style.width = "250px";
});

close.addEventListener("click", () => {
    sideNav.style.width = "0px";
});

/* ---------------------------------------------------------------------------------
    Scroll Down 
*------------------------------------------------------------------------------- */

document.getElementById("down-arrow").addEventListener("click", () => {
    let sections = document.getElementsByTagName('section');
    
    sections[1].scrollIntoView({ behavior: "smooth", block: "start"});
});

