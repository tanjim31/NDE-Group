document.addEventListener("DOMContentLoaded",function(){
    const sec9Content=`
    <div class="container">
    <div class="full-sec9">
        <div class="directors">
            <h1>Board Of Corporate Directors</h1>
        </div>
        <div class="pic-card">
            <div class="cardss">
                <div class="box-card">
                    <img id="chairman" alt="">
                    <div class="text">Imran Mustafiz</div>
                    <p>Chairman</p>

                </div>
            </div>
            <div class="cardss">
                <div class="box-card">
                    <img id="vice" alt="">
                    <div class="text">Raihan Mustafiz</div>
                    <p>Vice Chairman</p>

                </div>
            </div>
            <div class="cardss">
                <div class="box-card">
                    <img id="md" alt="">
                    <div class="text">Rizwan Mustafiz</div>
                    <p>Managing Director</p>

                </div>
            </div>
        </div>
       
    </div>
</div>
    
    `;

    const sec9Section=document.getElementById("directors");
    if(sec9Section){
        sec9Section.innerHTML=sec9Content;
    }

       //Image adding
    const imageSource={
        image1:"/Images/Imran-Mustafiz(chairman).jpg",
        image2:"/Images/Raihan-Mustafiz(vc).png",
        image3:"/Images/Rizwan-Mustafiz(md).jpg"
 
    }
    document.getElementById("chairman").src=imageSource.image1;
    document.getElementById("vice").src=imageSource.image2;
    document.getElementById("md").src=imageSource.image3;



});