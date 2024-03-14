document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    const showPopupButton = document.getElementById("showPopup");
    const hidePopupButton = document.getElementById("hidePopup");
    const popup = document.getElementById("popup");

    // Show the popup when the "Show Popup" button is clicked
    showPopupButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Hide the popup when the "Hide Popup" button is clicked
    hidePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});