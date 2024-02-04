document.addEventListener("DOMContentLoaded",function(){
    const sec12Content=`
    <div class="container">
    <div class="full-subs">
        <div class="subs">
            <h1>Subscribe to Newsletter</h1>
            <p>Subscribe for the latest newsletters, achievements, news and events.</p>
        </div>
        <div class="form">
            <form action="#" method="post">
                <input type="text" id="name" name="name" placeholder="Type Name" required>
                <input type="email" id="email" name="email" placeholder="Type Email" required>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</div>

    `;
    const sec12Section=document.getElementById("newsletter");
    if(sec12Section){
        sec12Section.innerHTML=sec12Content;
    }


});