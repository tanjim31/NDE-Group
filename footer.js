document.addEventListener("DOMContentLoaded", function(){
    const footerContent=`
    <div class="container">
    <div class="full-footer">
        <div class="left-footer">
            <h1>NDE Group</h1>
            <p>The Largest Group of Company in Bangladesh</p>
            <p>Connect with Social Media</p>
        </div>
        <div class="middle-footer">
            <h2>Contact Us</h2>
            <p> <i class="fa fa-phone" aria-hidden="true"></i> +880 96131 16609 (Overseas)</p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> info@nde.net</p>
            <p>House: 22, Road: 4, Block: C, Banani, Dhaka, Bangladesh.</p>
            <p>Sun to Thu - 9:00am to 7:00pm (Friday,Saturday Closed) Between 9:00 AM to 7:00 PM, Except on Government Holidays</p>
            <img src="Images/play.png" alt="">
        </div>
        <div class="right-footer">
            <div class="left-right">
                <h2>Important Links</h2>
                <ul>
                    <li>Book</li>
                    <li>Survey</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Condition</li>
                </ul>
            </div>
            <div class="right-right">
                <ul>
                    <li>FAQ</li>
                    <li>Trust</li>
                    <li>Contact Center</li>
                    <li>E-Commerce Shop</li>
                </ul>
            </div>
        </div>
       
    </div>
    <div class="down-footer">
        <p>© Copyright © 2021 NDE Group. All rights reserved. Developed by <span>NDE GROUP IT</span></p>
    </div>
</div>
    
    `;

    const footerSection=document.getElementById("contact");
    if(footerSection){
        footerSection.innerHTML=footerContent;
    }


});