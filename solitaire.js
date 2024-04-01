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
      cardback1.style.display = "none";
      background1.setAttribute("class", "active");
      card_back1.classList.remove("active");
      card_face1.classList.remove("active");
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
      card_face1.setAttribute("class", "active");
      background1.classList.remove("active");
      card_back1.classList.remove("active");
      console.log("runned...");
      bg.style.display = "none";
      cardface_box1.style.display = "grid";
      cardback1.style.display = "none";
    });
    background1.addEventListener("click", function () {
      background1.setAttribute("class", "active");
      card_back1.classList.remove("active");
      card_face1.classList.remove("active");
      console.log("runned...");
      bg.style.display = "grid";
      cardface_box1.style.display = "none";
      cardback1.style.display = "none";
    });
    card_back1.addEventListener("click", function () {
      card_back1.setAttribute("class", "active");
      background1.classList.remove("active");
      card_face1.classList.remove("active");
      console.log("runned...");
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
      daily.setAttribute("class", "active");
      events.classList.remove("active");
    });
    // Hide the popup when the "Hide Popup" button is clicked
    hidePopupButton.addEventListener("click", function () {
      setting_popup.style.display = "none";
    });
    daily.addEventListener("click", function () {
      days.style.display = "";
      event.style.display = "none";
      daily.setAttribute("class", "active");
      events.classList.remove("active");
    });
    events.addEventListener("click", function () {
      days.style.display = "none";
      event.style.display = "";
      daily.classList.remove("active");
      events.setAttribute("class", "active");
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

// const arr = [
//     { title:"1 suit" , profile:"img/Check.svg" },
//     { title:"2 Suit" , profile:"img/Check.svg" },
//     { title:"4 Suit" , profile:"img/Check.svg" }
// ]

// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the buttons and the popup
//   const box_n_o_s = document.querySelector(".box_n_o_s");
//   const suit_conut = document.getElementById("suit_conut");
// //   const two = document.querySelector(".two");
// //   const three = document.querySelector(".three");
//   const one_suit = document.getElementById("one_suit");
// //   const two_suit = document.getElementById("two_suit");
// //   const three_suit = document.getElementById("three_suit");

//   // Set default display for "1 Suit"
// //   one_suit.style.display = "block";

//   // Add event listeners to the suit buttons
//   arr.forEach((el) => {
//     console.log("button",el.title);
//     suit_conut.textContent=el.title;
//     one_suit.style.

//     // button.addEventListener("click", function () {

//     //   // Hide all suit options
//     // //   [one_suit, two_suit, three_suit].forEach((suit) => {
//     // //     suit.style.display = "none";
//     // //     console.log("124554");
//     // //   });

//     //   // Show only the corresponding suit option
//     // //   if (this === box_n_o_s) {
//     // //     one_suit.style.display = "block";
//     // //   } else if (this === two) {
//     // //     two_suit.style.display = "block";
//     // //   } else if (this === three) {
//     // //     three_suit.style.display = "block";
//     // //   }
//     // });
//   });
// });

const arr = [
  {
    title: "1 suit",
    profile: "img/Check.svg",
    desc: "Choosing the number of suits is only available in the standard game mode",
  },
  {
    title: "2 Suit",
    profile: "img/Check.svg",
    desc: "The game starts with one suit. An easier way to play.",
  },
  {
    title: "4 Suit",
    profile: "img/Check.svg",
    desc: "The game starts with two suits. A more challenging way to play, winning happens more rarely.",
  },
  {
    desc:"The game starts with Four suits. This mode is for experienced players."
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the container where rows will be added
  const container = document.querySelector(".container");

  // Set the default index for the selected suit
  let selectedIndex = 0;

  // Loop through the array and create a row for each item
  arr.forEach((el, index) => {
    // Create a new row div
    const row = document.createElement("div");
    row.classList.add("row");

    // Create a p tag for title
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = el.title;

    // Create an img tag for the image
    const image = document.createElement("img");
    image.src = el.profile;
    image.alt = "Image";

    // Hide the image if it's not the default selected suit
    if (index !== selectedIndex) {
      image.style.display = "none";
    }

    // Add click event listener to each title
    titleParagraph.addEventListener("click", () => {
      // Hide the currently displayed image
      const currentImage = container.querySelector("img");
      currentImage.style.display = "none";

      // Update the selected index
      selectedIndex = index;

      // Show the image for the selected suit
      image.style.display = "block";
    });

    // Append title and image to the row
    row.appendChild(titleParagraph);
    row.appendChild(image);

    // Append the row to the container
    container.appendChild(row);
  });
});
