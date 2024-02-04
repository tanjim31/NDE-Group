document.addEventListener("DOMContentLoaded", function(){
    sec2Content=`
    <div class="container">
    <div class="full-info">
        <div class="right-logo">
            <div class="main-logo">
                <a href="#">
                    <img id="imglogo" alt="logo">
                </a>
            </div>
            <div class="group-name">
                <h2>NDE GROUP</h2>
            </div>
        </div>
        <div class="toll">
            <div class="phone">
                <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="hotline">
                <p class="fee">Toll Free: 08000017709</p>
                <p class="line">Hot Line:17709</p>
            </div>
        </div>
        <div class="email">
            <div class="envelop">
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="info">
                <p>Email us</p>
                <p class="net">info@nde.net</p>
            </div>
        </div>
        <div class="quality">
            <div class="name">
                <p>" Quality First "</p>
                <p>- Imran Mustafiz</p>
            </div>
        </div>
    </div>
</div>
    `;

    const sec2Section= document.getElementById("sec-2");
    if(sec2Section){
        sec2Section.innerHTML=sec2Content;
    }

     //Image adding
     const imageSource={
        image:"/Images/NDESSL Logo PNG.png"
 
    }
    document.getElementById("imglogo").src=imageSource.image;




});