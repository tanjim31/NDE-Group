document.addEventListener("DOMContentLoaded",function(){
    const sec11Content=`
    <div class="container">
    <div class="full-projects">
        <div class="projects">
            <h1>Completed Projects</h1>
        </div>
        <div class="project-cards">
            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="glass" alt="Project 1">
                    <p>Glass Tower</p>
                </div>
                <div class="card-back">
                    <p>Location: Suhrawardy Udyan, Dhaka, Bangladesh</p>
                    <p>Description:	4.88m x 4.88m base 45.73m height Glass Tower.
                    27'-0" certain area of pile foundation.
                    16 Number of pile having diameter 800mm with 26m long.</P>
                    <p>Completed on	November, 2013 </p>
                </div>
            </div>

            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="bgmea" alt="Project 2">
                    <p>BGMEA Complex at Uttara.</p>
                </div>
                <div class="card-back">
                    <p>Location: Uttara, Dhaka</p>
                    <p>Description:	Construction of 15 Storied (13+2B Storied) BGMEA
                     Complex at Sector-17 Block H1, Avenue -06, Uttara, 3rd Phase.</P>
                    <p>Period: July, 2018 - June, 2021 </p>
                </div>
                
            </div>

            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="cricket" alt="Project 2">
                    <p>Civil Works of National Cricket Stadium, Dhaka</p>
                </div>
                <div class="card-back">
                    <p>Location: Dhaka, Bangladesh</p>
                    <p>Description:	RCC frame structure works.
                    Total floor area of about 28,624.53 m2.</P>
                   <p>Completed: on	February, 2011 </p>
                </div>
            </div>

            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="dse" alt="Project 2">
                    <p>Office Building Complex of Dhaka Stock Exchange</p>
                </div>
                <div class="card-back">
                    <p>Location: Dhaka, Bangladesh</p>
                    <p>Description:	13 storied building.
                    3 basements.Per floor area 42,397 m2.</P>
                   <p>Completed: December, 2021 </p>
                </div>
            </div>

            <div class="card" onclick="flipCard(this)">
               
                <div class="card-front">
                    <img id="fge" alt="Project 2">
                    <p>Franco German Embassy Building</p>
                </div>
                <div class="card-back">
                    <p>Location: Baridhara, Dhaka, Bangladesh</p>
                    <p>Description:	Construction of 5 storied buildings with basement.
                    Plinth area 2091 sqm.</P>
                   <p>Period: 2013 - 2017</p>
                </div>
            </div>

            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="for" alt="Project 2">
                    <p>Construction of 8-storied Building at Foreign Ministry</p>
                </div>
                <div class="card-back">
                    <p>Location: Dhaka, Bangladesh.</p>
                    <p>Description:	Construction of 8-Storied Building with 8-Storied Foundation including internal Sanitary & Water Supply, Internal Electrification work, External 
                    Sanitary & Water Supply and others Ancillary works at Foreign Ministry, Dhaka.</P>
                   <p>Period: July, 2019 - November, 2022</p>
                </div>
            </div>

            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="rwm" alt="Project 2">
                    <p>13 storied Building at PWD EM Division- 8</p>
                </div>
                <div class="card-back">
                    <p>Location: Mirpur, Dhaka.</p>
                    <p>Description:	Construction of 13 storied Building having 650 sft 6 unit each floor in/c. internal sanitary & water supply works, gas connection, internal 
                    electrification works at PWD EM Division- 8, Mirpur Section-6, Mirpur, Dhaka.</P>
                   <p>Period: December, 2020 - Continuing</p>
                </div>
            </div>
            <div class="card" onclick="flipCard(this)">
                <div class="card-front">
                    <img id="apron" alt="Project 2">
                    <p>Extension of Apron Towards North at HSIA, Dhaka</p>
                </div>
                <div class="card-back">
                    <p>Location	Kurmitola, Dhaka</p>
                    <p>Description:	Extension of Apron towards north of the existing Export Cargo Apron
                     at Hazrat Shahjalal International Airport (Phase – II), Kurmitola, Dhaka..</P>
                   <p>Period: September, 2018- December, 2020</p>
                </div>
            </div>
            <!-- Add more cards similarly -->
        </div>
    </div>
</div>

    `;
    const sec11Section=document.getElementById("project");
    if(sec11Section){
        sec11Section.innerHTML=sec11Content;
    }

    //Image adding
    const imageSource={
        image1:"/Images/Glass-Tower2-200x200.jpg",
        image2:"/Images/BGMEA-3-200x200.jpg",
        image3:"/Images/Cricket-Stadium-200x200.jpg",
        image4:"/Images/DSE-2-200x200.jpg",
        image5:"/Images/FGE-Drone-Shot-200x200.jpg",
        image6:"/Images/FOR-1-200x200.jpg",
        image7:"/Images/RWM-Image-1-scaled-200x200.jpg",
        image8:"/Images/Apron-Hanger-200x200.jpg",
 
    }
    document.getElementById("glass").src=imageSource.image1;
    document.getElementById("bgmea").src=imageSource.image2;
    document.getElementById("cricket").src=imageSource.image3;
    document.getElementById("dse").src=imageSource.image4;
    document.getElementById("fge").src=imageSource.image5;
    document.getElementById("for").src=imageSource.image6;
    document.getElementById("rwm").src=imageSource.image7;
    document.getElementById("apron").src=imageSource.image8;

   

});

//Project card flip
function flipCard(card) {
    card.classList.toggle("flipped");
}

