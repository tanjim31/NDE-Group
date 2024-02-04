document.addEventListener("DOMContentLoaded", function(){
    const sec3Content=`
    <div class="carousel-container">
    <div class="carousel-slide">
        <img id="img1" alt="Image 1">
        <div class="caption">
            <div class="cap-name">
                <h2 class="name-head">NDE Group</h2>
                <div class="cap-para">
                    <p>NDE house the head office of NDE group</p>
                    <p class="loc">Located in Banani Dhaka</p>
                    <a href="#" class="com">Our Companies</a>
                </div>
            </div>
        </div>
    </div>
    <div class="carousel-slide">
        <img id="img2" alt="Image 2">
        <div class="caption">
            <div class="cap-name">
                <h2 class="name-head">NDE Group</h2>
                <div class="cap-para">
                    <p>THE LARGEST GROUP OF COMPANY IN BANGLADESH</p>
                    <p class="loc">NDE Group is one of the largest Bangladeshi industrial 
                        conglomerates. </p>
                    <a href="#" class="com">Our Companies</a>
                </div>
            </div>
        </div>
    </div>
    <button class="prev-btn" onclick="prevSlide()">❮</button>
    <button class="next-btn" onclick="nextSlide()">❯</button>
    <button class="prev-btn2" onclick="prevSlide()">_</button>
    <button class="next-btn2" onclick="nextSlide()">_</button>
 
</div>

    `;

    const sec3Section=document.getElementById("sec-3");
    if(sec3Section){
        sec3Section.innerHTML=sec3Content;
    }


    //Image through JS
    const imageSources = {
        image1:"/Images/NDE_building.jpg",
        image2: "/Images/building-image-big.jpg",
    };
        
   document.getElementById("img1").src=imageSources.image1;
   document.getElementById("img2").src=imageSources.image2;



//This is for image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    showSlide(currentSlide - 1);

}

function nextSlide() {
    showSlide(currentSlide + 1);
   
}

// Event listener for the previous button
    const prevBtn = document.querySelector('.prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

// Event listener for the next button
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

// Add two more buttons to the existing variables
    const prevBtn2 = document.querySelector('.prev-btn2');
    const nextBtn2 = document.querySelector('.next-btn2');

// Add event listeners to the new buttons
    prevBtn2.addEventListener('click', prevSlide);
    nextBtn2.addEventListener('click', nextSlide);


// Show the initial slide
showSlide(currentSlide);

// Auto change slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 2500);



});