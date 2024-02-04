

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var scrollUpBtn = document.querySelector('.scroll-up-btn');
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add('show'); //display the button
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    document.querySelector('.scroll-up-btn').addEventListener('click', function () {
        window.scrollTo({  //Listens for a click event on an element with the class 'scroll-up-btn' (presumably the scroll-to-top button
            top: 0,
            behavior: 'smooth'
        });
    });
});





















