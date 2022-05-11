    // Your JavaScript goes here
let hamburger = document.getElementsByClassName('fa-bars')[0];
hamburger.addEventListener("click", open_side_nav);

let close = document.getElementsByClassName('fa-close')[0];
close.addEventListener("click", close_side_nav);

function open_side_nav() {
    document.getElementsByClassName("side-nav-container")[0].style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function close_side_nav() {
    document.getElementsByClassName("side-nav-container")[0].style.width = "0px";
}

let scrollUp = document.getElementsByClassName('scroll-up-button')[0];
scrollUp.addEventListener("click", function() {
    window.scrollBy(0,scrollY);
});

document.addEventListener("scroll", function() {
    let a = document.getElementsByClassName("side-nav-container")[0].style.width;
    if (a >= "0px" && scrollY >= 8) {
        document.getElementsByClassName("side-nav-container")[0].style.width = "0px";
    }
    if(scrollY >= 225) {
        document.getElementsByClassName('scroll-up-button')[0].style.display = "block";
    }
    if(scrollY == 0) {
        document.getElementsByClassName('scroll-up-button')[0].style.display = "none";
    }
});

let z = document.getElementsByClassName('daksh-heading')[0];
z.addEventListener("mouseover" , function() {
    document.getElementsByClassName('daksh-heading')[0].style.letterSpacing = "20px";
    document.getElementsByClassName("daksh-heading")[0].style.transitionTimingFunction = "linear";
});

z.addEventListener("mouseleave", function() {
    document.getElementsByClassName('daksh-heading')[0].style.letterSpacing = "0px";
});