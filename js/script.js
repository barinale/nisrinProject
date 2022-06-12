/** function slider **/
var slides = document.querySelector('.slider').children;
var prevSlide = document.querySelector(".prev");
var nextSlide = document.querySelector(".next");
var totalSlides = slides.length;
var index = 0;

prevSlide.onclick = function () {
    next("prev");
}
nextSlide.onclick = function () {
    next("next");
}

function next(direction) {
    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = totalSlides - 1;
        }
        else {
            index--;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active")
    }
    slides[index].classList.add("active");
} 