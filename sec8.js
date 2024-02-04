document.addEventListener("DOMContentLoaded",function(){
    const sec8Content=`
    <div class="container">
    <div class="full-product">
       
        <div class="pro-profile">
            <h2>Our Product</h2>
        </div>
        <div class="pro-text">
            <p>In this era of mass production, as it is very hard to stand out with one product,
                NDE Group focuses on making the best in all sectors.</p>
        </div>

        <!--This portion search bar-->
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Search by product name" onkeyup="handleKeyUp(event)">
            <button onclick="searchProducts()"><img id="sicon" alt=""></button>
            
           
        </div>
              
        <!-- //This portion for pop-up -->
        <div class="popup-container" id="productPopup">
            <div class="popup-content">
                <span class="close-btn" onclick="closePopup()">&times;</span>
                <!-- <img id="popupProductImage" src="" alt="Product Image">
                <h3 id="popupProductName"></h3>
                <h3 id="popupProductDetails"></h3> -->
                <div class="popup-flex-container">
                    <div class="popup-image-container">
                        <img id="popupProductImage" src="" alt="Product Image">
                    </div>
                    <div class="popup-text-container">
                        <h3 id="popupProductName"></h3>
                        <h3 id="popupProductSize"></h3>
                        <h3 id="popupProductDetails"></h3>
                        <!-- Add other product information here -->
                    </div>
                </div>
          
            </div>
        </div>

        <!-- This portion is for slider -->
        <div class="pro5-div" id="card-slider">
            <div class="cards">
                <img src="Images/HR Plate.jpg" id="hr" alt="">
                <p>HR Plate</p>
                <h2>Product Size: 2400x6000mm Gr-50</h2>
                <h1>Description: HR Plates are versatile steel plates with a textured surface, produced through a hot rolling process. </h1>
            </div>
            <div class="cards">
                <img src="Images/Checkered Plate.jpg" id="checkered" alt="">
                <p>Checkered Plate</p>
                <h2>Product Size: 1500×5800mm Local</h2>
                <h1>Description: Checkered Plate is a versatile metal plate with a raised pattern, offering anti-skid properties and finding applications in flooring</h1>
                
            </div>
            <div class="cards">
                <img src="Images/Decking.jpg" id="decking" alt="">
                <p>Decking</p>
                <h2>Product Size: 1219mm Zincalume, AZ-100 India</h2>
                <h1>Description: Decking provides a versatile and aesthetically pleasing solution for extending living spaces outdoors.</h1>
            </div>
            <div class="cards">
                <img src="Images/Purlin.jpg" id="purlin" alt="">
                <p>Purlin</p>
                <h2>Product Size: 1050mm HDG, Z-150 China</h2>
                <h1>Description: Purlins are integral components in the framing system of buildings, ensuring the structural integrity and functionality of the roof or wall </h1>
               
            </div>
            <div class="cards">
                <img src="Images/Roofing and Wall Sheeting.jpg" id="roofing" alt="">
                <p>Roofing and Wall Sheeting</p>
                <h2>Product Size: 1220mm Pure White, AZ-150 China</h2>
                <h1>Description: Roofing and wall sheeting contribute significantly to the functionality, durability, and visual appeal of buildings</h1>
            </div>
        </div>
        <!--  slider End -->


        <div class="product-div">
            <div class="cards">
                <img src="Images/HR Plate.jpg" id="hr" alt="">
                <p>HR Plate</p>
                <h2>Product Size: 2400x6000mm Gr-50</h2>
                <h1>Description: HR Plates are versatile steel plates with a textured surface, produced through a hot rolling process.  </h1>
            </div>
            <div class="cards">
                <img src="Images/Checkered Plate.jpg" id="checkered" alt="">
                <p>Checkered Plate</p>
                <h2>Product Size: 1500×5800mm Local</h2>
                <h1>Description: Checkered Plate is a versatile metal plate with a raised pattern, offering anti-skid properties and finding applications in flooring</h1>
            </div>
            <div class="cards">
                <img src="Images/Decking.jpg" id="decking" alt="">
                <p>Decking</p>
                <h2>Product Size: 1219mm Zincalume, AZ-100 India</h2>
                <h1>Description: Decking provides a versatile and aesthetically pleasing solution for extending living spaces outdoors.</h1>
                </div>
            <div class="cards">
                <img src="Images/Purlin.jpg" id="purlin" alt="">
                <p>Purlin</p>
                <h2>Product Size: 1050mm HDG, Z-150 China</h2>
                <h1>Description: Purlins are integral components in the framing system of buildings, ensuring the structural integrity and functionality of the roof or wall</h1>
            </div>
            <div class="cards">
                <img src="Images/Roofing and Wall Sheeting.jpg" id="roofing" alt="">
                <p>Roofing and Wall Sheeting</p>
                <h2>Product Size: 1220mm Pure White, AZ-150 China</h2>
                <h1>Description: Roofing and wall sheeting contribute significantly to the functionality, durability, and visual appeal of buildings</h1>
            </div>
            <div class="cards">
                <img src="Images/steel beam.webp" id="steel" alt="">
                <p>Steel Beam</p>
                <h2>Product Size: 4inch flange width and 1/4 inch thickness</h2>
                <h1>Description: Steel beams are critical components in the construction industry, and their selection depends on factors such as the specific structural requirements</h1>
            </div>
            <div class="cards">
                <img src="Images/Roofing and Wall Sheeting.jpg" id="roofing" alt="">
                <p>Roofing and Wall Sheeting</p>
                <h2>Product Size: 1220mm Pure White, AZ-150 China</h2>
                <h1>Description: Roofing and wall sheeting contribute significantly to the functionality, durability, and visual appeal of buildings</h1>
            </div>
            <div class="cards">
                <img src="Images/Roofing and Wall Sheeting.jpg" id="roofing" alt="">
                <p>Roofing and Wall Sheeting</p>
                <h2>Product Size: 1220mm Pure White, AZ-150 China</h2>
                <h1>Description: Roofing and wall sheeting contribute significantly to the functionality, durability, and visual appeal of buildings</h1>
            </div>
            <div class="cards">
                <img src="Images/HR Plate.jpg" id="hr" alt="">
                <p>HR Plate</p>
                <h2>Product Size: 2400x6000mm Gr-50</h2>
                <h1>Description: HR Plates are versatile steel plates with a textured surface, produced through a hot rolling process.  </h1>
            </div>
            <div class="cards">
                <img src="Images/Roofing and Wall Sheeting.jpg" id="roofing" alt="">
                <p>Roofing and Wall Sheeting</p>
                <h2>Product Size: 1220mm Pure White, AZ-150 China</h2>
                <h1>Description: Roofing and wall sheeting contribute significantly to the functionality, durability, and visual appeal of buildings</h1>
            </div>
            <div class="cards">
                <img src="Images/Checkered Plate.jpg" id="checkered" alt="">
                <p>Checkered Plate</p>
                <h2>Product Size: 1500×5800mm Local</h2>
                <h1>Description: Checkered Plate is a versatile metal plate with a raised pattern, offering anti-skid properties and finding applications in flooring</h1>
            </div>
            <div class="cards">
                <img src="Images/Checkered Plate.jpg" id="checkered" alt="">
                <p>Checkered Plate</p>
                <h2>Product Size: 1500×5800mm Local</h2>
                <h1>Description: Checkered Plate is a versatile metal plate with a raised pattern, offering anti-skid properties and finding applications in flooring </h1>
            </div>
            <div class="cards">
                <img src="Images/HR Plate.jpg" id="hr" alt="">
                <p>HR Plate</p>
                <h2>Product Size: 2400x6000mm Gr-50</h2>
                <h1>Description: HR Plates are versatile steel plates with a textured surface, produced through a hot rolling process.  </h1>
            </div>
            
        </div>
       
        <div class="bttn">
            <a href="#" id="viewProductsBtn"><button>View All Products</button></a>
        </div>
    </div>
</div>
    
    `;

    const sec8Section=document.getElementById("pro");
    if(sec8Section){
        sec8Section.innerHTML=sec8Content;
    }

     //Image adding
     const imageSource={
        image1:"/Images/HR Plate.jpg",
        image2:"/Images/Checkered Plate.jpg",
        image3:"/Images/Decking.jpg",
        image4:"/Images/Purlin.jpg",
        image5:"/Images/Roofing and Wall Sheeting.jpg",
        image6:"/Images/steel beam.webp",
        image7:"/Images/icons8-search-50.png"
 
    }
    document.getElementById("hr").src=imageSource.image1;
    document.getElementById("checkered").src=imageSource.image2;
    document.getElementById("decking").src=imageSource.image3;
    document.getElementById("purlin").src=imageSource.image4;
    document.getElementById("roofing").src=imageSource.image5;
    document.getElementById("steel").src=imageSource.image6;
    document.getElementById("sicon").src=imageSource.image7;




// event listener to the "View All Products" button
var isCardsHidden = false;
document.getElementById('viewProductsBtn').addEventListener('click', function(event) {
    // Prevent the default behavior (page reload) of the button
    event.preventDefault();

    // Select all cards
    var hiddenCards = document.querySelectorAll('.product-div .cards');
    
    // Toggle the display property for each hidden card
    hiddenCards.forEach(function(card) {
        card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
    });
    
    // Hide the pro5-div
    var pro5Div = document.querySelector('.pro5-div');
    pro5Div.style.display = isCardsHidden ? 'flex' : 'none';

     // Update the variable to reflect the current state
     isCardsHidden = !isCardsHidden;
});



//Product Card slider
const cardsSlider = document.querySelector('.pro5-div');
const cardWidth = document.querySelector('.cards').offsetWidth;
let isHovered = false;

// Pause sliding on hover
cardsSlider.addEventListener('mouseover', () => {
    isHovered = true;
});

cardsSlider.addEventListener('mouseout', () => {
    isHovered = false;
});


function nextSlide() {
    if (!isHovered) {
        cardsSlider.style.transition = 'transform 0.7s ease-in-out';
        cardsSlider.style.transform = `translateX(-${cardWidth}px)`; // left e move

        setTimeout(() => {
            cardsSlider.style.transition = 'none';
            cardsSlider.style.transform = 'translateX(0)';
            cardsSlider.appendChild(cardsSlider.firstElementChild);
        }, 700);
    }
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds



// event listener to each card for showing the popup
document.querySelectorAll('.product-div .cards').forEach(function(card) {
    card.addEventListener('click', function() {

        // Get the product name and image source from the clicked card
        var productName = card.querySelector('p').innerText;
        var productDetails = card.querySelector('h1').innerText;
        var productSize = card.querySelector('h2').innerText;
        var productImageSrc = card.querySelector('img').src;

        // Show the popup with product information
        showPopup(productName,productDetails,productSize, productImageSrc);

          // Show all child elements of the clicked card inside the popup
          document.getElementById('productPopup').querySelectorAll('*').forEach(function(element) {
            element.style.display = 'block';
        });
    });
});

document.querySelectorAll('.pro5-div .cards').forEach(function(card) {
    card.addEventListener('click', function() {

        // Get the product name and image source from the clicked card
        var productName = card.querySelector('p').innerText;
        var productDetails = card.querySelector('h1').innerText;
        var productSize = card.querySelector('h2').innerText;
        var productImageSrc = card.querySelector('img').src;

        // Show the popup with product information
        showPopup(productName,productDetails,productSize, productImageSrc);

         // Show all child elements of the clicked card inside the popup
         document.getElementById('productPopup').querySelectorAll('*').forEach(function(element) {
            element.style.display = 'block';
        });
    });
});



// Function to show the popup with product information
function showPopup(productName,productDetails,productSize, productImageSrc) {
    // Set the product name and image in the popup

    document.getElementById('popupProductName').innerText = productName;
    document.getElementById('popupProductDetails').innerText = productDetails;
    document.getElementById('popupProductSize').innerText = productSize;
    document.getElementById('popupProductImage').src = productImageSrc;
 

       // Show the popup
       var popup = document.getElementById('productPopup');
       popup.style.display = 'block';
   
     // Get the clicked card
    var clickedCard = document.querySelector('.product-div .cards.clicked' || '.pro5-div .cards.clicked' );

    // Show all elements inside the clicked card in the popup
    clickedCard.style.display = 'block';
    clickedCard.querySelectorAll('*').forEach(function(element) {
        element.style.display = 'block';
    });
}

});


// Function to close the popup
function closePopup() {
    document.getElementById('productPopup').style.display = 'none';
}



//Search Product

    //Search on press enter
     function handleKeyUp(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    }

  

    function searchProducts() {
        var input = document.getElementById('searchInput');
        var filter = input.value.trim().toUpperCase();
        var productCards = document.querySelectorAll('.product-div .cards');
        var sliderDiv = document.querySelector('.pro5-div');
        var viewAllBtn = document.getElementById('viewProductsBtn');
    
        // Show all cards initially
        productCards.forEach(function (card) {
            card.style.display = 'block';
        });
    
        // Show the slider and "View All Products" button when input is empty
        if (filter === '') {
            sliderDiv.style.display = 'flex';
            viewAllBtn.style.display = 'block';
    
            // Hide all cards in .product-div when input is empty
            productCards.forEach(function (card) {
                card.style.display = 'none';
            });
    
            return; // Exit the function early when input is empty
        }
    
        // Hide the slider and "View All Products" button
        sliderDiv.style.display = 'none';
        viewAllBtn.style.display = 'none';
    
        // Show cards that match the input
        productCards.forEach(function (card) {
            var name = card.querySelector('p');
            var txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) === -1) {
                card.style.display = 'none';
            }
        });
    }
    











