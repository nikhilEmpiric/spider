
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    const showPopupButton = document.querySelector(".showPopup");
    const hidePopupButton = document.getElementById("hidePopup");
    const popup = document.getElementById("popup");
    const cardface_box1 = document.querySelector(".cardface_box");
    const cardback1 = document.querySelector(".cardback");

    // Show the popup when the "Show Popup" button is clicked
    showPopupButton.addEventListener("click", function () {
        popup.style.display = "flex";
        cardface_box1.style.display = "none";
        cardback1.style.display = "none"
        });
 
    // Hide the popup when the "Hide Popup" button is clicked
    hidePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // const cardface_box = document.querySelector("cardface_box");
    const background1= document.getElementById("background");
    const card_face1= document.getElementById("card_face");
    const card_back1= document.getElementById("card_back");
    const bg = document.getElementById("bgcard");
    const cardface_box1 = document.querySelector(".cardface_box");
    const cardback1 = document.querySelector(".cardback");
    const bcc_button1 = document.querySelector(".bcc_button");

        // Hide the popup when the "Hide Popup" button is clicked
        card_face1.addEventListener("click", function () {
            card_face1.setAttribute('class', 'active'); 
            background1.classList.remove('active');
            card_back1.classList.remove('active');
            console.log("runned...")
            bg.style.display = "none";
            cardface_box1.style.display = "";
            cardback1.style.display = "none";
        });
        background1.addEventListener("click", function () {
            background1.setAttribute('class', 'active'); 
            card_back1.classList.remove('active');
            card_face1.classList.remove('active');
            console.log("runned...")
            bg.style.display = "";
            cardface_box1.style.display = "none";
            cardback1.style.display = "none";
        });
        card_back1.addEventListener("click", function () { 
            card_back1.setAttribute('class', 'active'); 
            background1.classList.remove('active');
            card_face1.classList.remove('active');
            console.log("runned...")
            cardback1.style.display = "";
            cardface_box1.style.display = "none";
            bg.style.display = "none";

        });
        
});
