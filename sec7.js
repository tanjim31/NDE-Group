document.addEventListener("DOMContentLoaded",function(){
    const sec7Content=`
    <div class="container">
    <div class="full-stratigies">
        <div class="full-text-left">
            <div class="text-left">
                <p>NDE Group</p>
                <h1>The Strategies</h1>
                <p class="spc">Since then it has been progressing with tremendous pace 
                    in the industrial area of Bangladesh. A large number 
                    of people are employed by the group and cared for as 
                    members of the NDE family. The non-profit concerns are 
                    also involved in sustaining development of the country & 
                    for social welfare.</p>
            </div>
        </div>

        <div class="full-image-right">
            <div class="employee-img">
                <img id="empimg" alt="">
            </div>
        </div>
    </div>
</div>
    
    `;
    const sec7Section=document.getElementById("sec-7");
    if(sec7Section){
        sec7Section.innerHTML=sec7Content;
    }

    //Image adding
    const imageSource={
        image:"/Images/site.png"
 
    }
    document.getElementById("empimg").src=imageSource.image;

});



document.addEventListener("DOMContentLoaded", function () {
    const LeftSection = document.querySelector(".full-text-left");
    const imgRightSection = document.querySelector(".full-image-right");

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0)";
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = entry.target.classList.contains('full-text-left') ? "translateX(-80px)" : "translateX(80px)";
            }
        });
    }

    const options = {
        threshold: 0.3,
    };

    const observerLeft = new IntersectionObserver(handleIntersection, options);
    const observerRight = new IntersectionObserver(handleIntersection, options);

    observerLeft.observe(LeftSection);
    observerRight.observe(imgRightSection);
});
