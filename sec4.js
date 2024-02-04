document.addEventListener("DOMContentLoaded", function(){
    const sec4Content=`
    <div class="container">
    <div class="full-card">
        <div class="about-group">
            <div class="know">
                <p>All you need to know</p>
            </div>
            <div class="abt">
                <h2>About NDE Group</h2>
            </div>
        </div>
        <div class="box">
            <div class="card-1">
                <img id="img1s" alt="">
                <p>Since</p>
                <h2><span>1950</span></h2>
            </div>
            <div class="card-2">
                <img id="img2s" alt="">
                <p>Units</p>
                <h2><span>31</span></h2>
            </div>
            <div class="card-3">
                <img id="img3s" alt="">
                <p>Employees</p>
                <h2><span>35053</span></h2>
            </div>
            <div class="card-4">
                <img id="img4s" alt="">
                <p>National Acheivements</p>
                <h2><span>25</span></h2>
            </div>
        </div>
    </div>
</div>
    
    `;

    const sec4Section=document.getElementById("sec-4");
    if(sec4Section){
        sec4Section.innerHTML=sec4Content;
    }


       //Image through JS
       const imageSources = {
        image1:"/Images/Group_873.svg",
        image2: "/Images/Group_874.svg",
        image3: "/Images/Group_875-1.svg",
        image4: "/Images/Acheivement.png",
    };
        
   document.getElementById("img1s").src=imageSources.image1;
   document.getElementById("img2s").src=imageSources.image2;
   document.getElementById("img3s").src=imageSources.image3;
   document.getElementById("img4s").src=imageSources.image4;
  

});

// document.addEventListener("DOMContentLoaded", function () {
//     const boxSection = document.querySelector(".box");
  
//     function isElementInViewport(el) {
//       const rect = el.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }
  
//     function handleScroll() {
//       if (isElementInViewport(boxSection)) {
//         // Check if the section is in the viewport
//         boxSection.style.opacity = 1;
//         boxSection.style.transform = "translateY(0)";
//       } else {
//         // Reset the effect when the section is out of view
//         boxSection.style.opacity = 0;
//         boxSection.style.transform = "translateY(-55px)";
//       }
//     }
  
//     window.addEventListener("scroll", handleScroll);
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//     const imgRightSection = document.querySelector(".box");

//     function handleIntersection(entries, observer) {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 imgRightSection.style.opacity = 1;
//                 imgRightSection.style.transform = "translateY(0)";
//             } else {
//                 imgRightSection.style.opacity = 0;
//                 imgRightSection.style.transform = "translateY(-55px)";
//             }
//         });
//     }

//     const options = {
//         threshold: 0.1, 
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);

//     observer.observe(imgRightSection);
// });

document.addEventListener("DOMContentLoaded", function () {
    // Select the element with the class "box"
    const imgRightSection = document.querySelector(".box");

    // Define a callback function to be executed when the observed element changes its intersection with the viewport
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            // Check if the observed element is currently intersecting with the viewport
            if (entry.isIntersecting) {
                // If intersecting, set opacity to 1 and reset the translateY transformation
                imgRightSection.style.opacity = 1;
                imgRightSection.style.transform = "translateY(0)";
            } else {
                // If not intersecting, set opacity to 0 and move the element up (translateY)
                imgRightSection.style.opacity = 0;
                imgRightSection.style.transform = "translateY(-55px)";
            }
        });
    }

    // Options for the Intersection Observer
    const options = {
        threshold: 0.1, // Defines the percentage of the target element that must be visible for the callback to be triggered
    };

    // Create a new Intersection Observer instance with the defined callback and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the target element
    observer.observe(imgRightSection);
});

