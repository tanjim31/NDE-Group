document.addEventListener("DOMContentLoaded",function(){
    const sec10Content=`
    <div class="container">
    <div class="achiev">
        <h1>Achievements</h1>
    </div>
    <div class="full-achi">
        <div class="left-img">
            <img id="achi" alt="">
        </div>
        <div class="middle-img">
            <img id="achi2" alt="">
            <img id="achi3" alt="">
        </div>
        <div class="right-img">
            <img id="achi4" alt="">
            <img id="achi5" alt="">
        </div>
    </div>
</div>
    
    `;

    const sec10Section=document.getElementById("achievement");
    if(sec10Section){
        sec10Section.innerHTML=sec10Content;
    }


     //Image adding
     const imageSource={
        image1:"/Images/Achi(main).jpg",
        image2:"/Images/Ach2.jpg",
        image3:"/Images/Ach3.jpg",
        image4:"/Images/achievement(nde).png",
        image5:"/Images/Ach6.jpg",
 
    }
    document.getElementById("achi").src=imageSource.image1;
    document.getElementById("achi2").src=imageSource.image2;
    document.getElementById("achi3").src=imageSource.image3;
    document.getElementById("achi4").src=imageSource.image4;
    document.getElementById("achi5").src=imageSource.image5;


});



document.addEventListener("DOMContentLoaded", function () {
    const achievement = document.querySelector(".full-achi");

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0)";
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = "translateX(80px)";
            }
        });
    }

    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(achievement);
});
