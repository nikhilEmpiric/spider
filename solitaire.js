document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    let showPopupButton = document.querySelector(".showPopup");
    let hidePopupButton = document.getElementById("hidePopup");
    let popup = document.getElementById("popup");
    let cardface_box1 = document.querySelector(".cardface_box");
    let cardback1 = document.querySelector(".cardback");
    let background1 = document.getElementById("background");
    let card_face1 = document.getElementById("card_face");
    let card_back1 = document.getElementById("card_back");
    let bg = document.getElementById("bgcard");

    // Show the popup when the "Show Popup" button is clicked.\

    if (showPopupButton) {
        showPopupButton.addEventListener("click", function () {
            popup.style.display = "flex";
            cardface_box1.style.display = "none";
            cardback1.style.display = "none"
            background1.setAttribute('class', 'active');
            card_back1.classList.remove('active');
            card_face1.classList.remove('active');
            bg.style.display = "grid";
            // console.log("15");
        });
        // Hide the popup when the "Hide Popup" button is clicked
        hidePopupButton.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // const cardface_box = document.querySelector("cardface_box");
    const background1 = document.getElementById("background");
    const card_face1 = document.getElementById("card_face");
    const card_back1 = document.getElementById("card_back");
    const bg = document.getElementById("bgcard");
    const cardface_box1 = document.querySelector(".cardface_box");
    const cardback1 = document.querySelector(".cardback");
    const bcc_button1 = document.querySelector(".bcc_button");

    if (card_face1) {
        // Hide the popup when the "Hide Popup" button is clicked
        card_face1.addEventListener("click", function () {
            card_face1.setAttribute('class', 'active');
            background1.classList.remove('active');
            card_back1.classList.remove('active');
            console.log("runned...")
            bg.style.display = "none";
            cardface_box1.style.display = "grid";
            cardback1.style.display = "none";
        });
        background1.addEventListener("click", function () {
            background1.setAttribute('class', 'active');
            card_back1.classList.remove('active');
            card_face1.classList.remove('active');
            console.log("runned...")
            bg.style.display = "grid";
            cardface_box1.style.display = "none";
            cardback1.style.display = "none";
        });
        card_back1.addEventListener("click", function () {
            card_back1.setAttribute('class', 'active');
            background1.classList.remove('active');
            card_face1.classList.remove('active');
            console.log("runned...")
            cardback1.style.display = "grid";
            cardface_box1.style.display = "none";
            bg.style.display = "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    const showPopup = document.querySelector(".setting");
    const hidePopupButton = document.getElementById("setting_hidePopup");
    const setting_popup = document.getElementById("setting_popup");
    const daily = document.getElementById("daily");
    const events = document.getElementById("events");
    const days = document.getElementById("days");
    const event = document.getElementById("event");

    if (showPopup) {
        // Show the popup when the "Show Popup" button is clicked
        showPopup.addEventListener("click", function () {
            setting_popup.style.display = "flex";
            event.style.display = "none";
            days.style.display = "";
            daily.setAttribute('class', 'active');
            events.classList.remove('active');
        });

        // Hide the popup when the "Hide Popup" button is clicked
        hidePopupButton.addEventListener("click", function () {
            setting_popup.style.display = "none";
        });
        daily.addEventListener("click", function () {
            days.style.display = "";
            event.style.display = "none";
            daily.setAttribute('class', 'active');
            events.classList.remove('active');
        });
        events.addEventListener("click", function () {
            days.style.display = "none";
            event.style.display = "";
            daily.classList.remove('active');
            events.setAttribute('class', 'active');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the popup
    // let start_welcom = document.getElementById("start_welcome");
    let welcom = document.getElementById("welcome");
    let start_welcome_popup = document.querySelector(".start_welcome_popup");
    let accept = document.getElementById("accept");

    // Show the popup when the "Show Popup" button is clicked

    // Hide the popup when the "Hide Popup" button is clicked
    if (accept) {
        accept.addEventListener("click", function () {
            start_welcome_popup.style.display = "none";
            start_welcome.style.display = "block";
        });
        welcom.addEventListener("click", function () {
            // start_welcome_popup.style.display = "flex";
        });
    }
  
});