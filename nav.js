document.addEventListener("DOMContentLoaded",function(){
    const navContent=`
    <div class="container">
    <div class="full-nav">
        <ul>
            <li><a href="#home"> Home</a></li>
            <li class="dropdown">
                <a href="#about">About Us</a>
                <div class="dropdown-content">
                    <!-- Add your dropdown content here -->
                    <a href="#aboutf">About Founder</a><hr>
                    <a href="#directors">Board of Directors</a><hr>
                    <a href="#message">Chairman's Message</a><hr>
                    <a href="#mission">Mission & Vision</a><hr>
                </div>
            </li>
            <li><a href="#pro">Products</a></li>
            <li class="dropdown2">
                <a href="#media">Media</a>
                <div class="dropdown-content2">
                    <!-- Add your dropdown content here -->
                    <a href="#about">News & Events</a><hr>
                    <a href="#directorsss">Image Gallary</a><hr>
                    <a href="#message">Video</a><hr>
                    <a href="#newsletter">Newsletter</a><hr>
                </div>
            </li>
            <li><a href="#achievement">Achievement</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </div>
</div>
    
    `;
    const navSection=document.getElementById("navbar");
    if(navSection){
        navSection.innerHTML=navContent;
    }


});