document.addEventListener("DOMContentLoaded", function(){
    const sec5Content=`
    <div class="container">
    <div class="full-img-text">
        <div class="full-img-left">
            <div class="founder-img">
                <img src="Images/MD.jpg" id="founderimg" alt="founder-image">
            </div>
            <h1>Founder Of NDE </h1>
        </div>
        <div class="full-img-right">
            <h2>One of the biggest conglomerates in Bangladesh.</h2>
            <p>The legacy of NDE GROUP is over half a century old and over 
                the years NDE has established itself as the full of 
                confidence and much revered industrial family of Bangladesh.
                 It consists of 24 big concerns with diverse activities & 
                 different products.</p>
            <p>NDE Group launched its venture as a small jute trader more 
                than 50 years ago</p>
            <div class="bttn">
                <a href="#"><button>View Details</button></a>
            </div>
            
        </div>
    </div>
</div> 
    `;
    const sec5Section= document.getElementById("aboutf");
    if(sec5Section){
        sec5Section.innerHTML=sec5Content;
    }

    const imageSource={
        image:"/Images/MD.jpg",
    }
    document.getElementById("founderimg").src=imageSource.image;


});


document.addEventListener("DOMContentLoaded", function () {
    const imgLeftSection = document.querySelector(".full-img-left");

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                imgLeftSection.style.opacity = 1;
                imgLeftSection.style.transform = "translateX(0)";
            } else {
                imgLeftSection.style.opacity = 0;
                imgLeftSection.style.transform = "translateX(-90px)";
            }
        });
    }

    const options = {
        threshold: 0.2, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(imgLeftSection);
});



//this is for founder pic text
document.addEventListener("DOMContentLoaded", function () {
    const imgRightSection = document.querySelector(".full-img-right");

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                imgRightSection.style.opacity = 1;
                imgRightSection.style.transform = "translateX(0)";
            } else {
                imgRightSection.style.opacity = 0;
                imgRightSection.style.transform = "translateX(90px)";
            }
        });
    }

    const options = {
        threshold: 0.1, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(imgRightSection);
});