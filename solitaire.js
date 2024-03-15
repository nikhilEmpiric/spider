
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