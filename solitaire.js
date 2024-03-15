
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    const showPopupButton = document.querySelector(".showPopup");
    const hidePopupButton = document.getElementById("hidePopup");
    const popup = document.getElementById("popup");
 
    // Show the popup when the "Show Popup" button is clicked
    showPopupButton.addEventListener("click", function () {
        popup.style.display = "flex";
    });
 
    // Hide the popup when the "Hide Popup" button is clicked
    hidePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

});


document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    const card_face = document.getElementById("card_face");
    const bgcard = document.getElementById("bgcard");
    const cardface = document.getElementById("cardface");
 
    // Show the popup when the "Show Popup" button is clicked
    card_face.addEventListener("click", function () {
        cardface.style.display = "absolute";
        top ="0px";
    });
 
    // Hide the popup when the "Hide Popup" button is clicked
    card_face.addEventListener("click", function () {
        bgcard.style.display = "none";
    });

});