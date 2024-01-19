// home slider 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
} 


// tab menu 
 function openMenu(menuItem) {
    var i;
    var x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(menuItem).style.display = "block";
}

//hamburger menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-menu");
let icon = menu.querySelector(".fa-bars");
menu.onclick = () => {
    // menu.classList.toggle('x');
    console.log("hello");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-square-xmark");
    }
    else {
        icon.classList.replace("fa-square-xmark","fa-bars");
    }
     navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('open');
    navlist.classList.remove('open');
};

