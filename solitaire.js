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
  let home = document.getElementById("home");

  // Show the popup when the "Show Popup" button is clicked

  // Hide the popup when the "Hide Popup" button is clicked
  if (accept) {
    accept.addEventListener("click", function () {
      start_welcome_popup.style.display = "none";
      // start_welcome.style.display = "block";
      setTimeout(() => { home.style.display = "flex"; } , 1000);
      
    });
    welcom.addEventListener("click", function () {
      // start_welcome_popup.style.display = "block";
    });
  }
});

const arr = [
  {
    title: "1 suit",
    profile: "img/Check.svg",
    desc: "The game starts with one suit. An easier way to play.",
  },
  {
    title: "2 Suit",
    profile: "img/Check.svg",
    desc: "The game starts with two suits. A more challenging way to play, winning happens more rarely.",
  },
  {
    title: "4 Suit",
    profile: "img/Check.svg",
    desc: "The game starts with Four suits. This mode is for experienced players.",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the container where rows will be added
  const container = document.querySelector(".container");

  // Set the default index for the selected suit
  let selectedIndex = 0;

  // Create a heading paragraph tag
  const headingParagraph = document.createElement("p");
  headingParagraph.textContent =
    "Choosing the number of suits is only available in the standard game mode";

    if(container){
      container.appendChild(headingParagraph);
    }  

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

    // Add click event listener to each title
    row.addEventListener("click", () => {
      // Hide all images
      container.querySelectorAll("img").forEach((img, idx) => {
        if (idx === index) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });

      // Update the selected index
      selectedIndex = index;
    });

    // Append title and image to the row
    row.appendChild(titleParagraph);
    row.appendChild(image);

    // Hide all images except the default selected suit
    if (index !== selectedIndex) {
      image.style.display = "none";
    }

    // Create a wrapper div and append the row to it
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(row);

    // Create a subparagraph p element and set its text content
    const subparagraph = document.createElement("p");
    subparagraph.textContent = el.desc;
    wrapper.appendChild(subparagraph);

    // Add styles to the wrapper div
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.rowGap = " 20px";
    wrapper.style.marginBottom = "30px";

    // Append the wrapper to the container
    if(container){
      container.appendChild(wrapper);
    } 
    
  });
});

// ==========================background card===============================================//
const cardbgData = [
  {
    cardname: "Classic Cloth",
    cardimg: "./img/classic-cloth.png",
  },
  {
    cardname: "Medieval",
    cardimg: "./img/medieval.png",
  },
  {
    cardname: "Paradise",
    cardimg: "./img/paradise_king.png",
  },
  {
    cardname: "Pirates",
    cardimg: "./img/pirates.png",
  },
  {
    cardname: "Beach",
    cardimg: "./img/beach.png",
  },
  {
    cardname: "Bloom",
    cardimg: "./img/bloom.png",
  },
  {
    cardname: "Forest",
    cardimg: "./img/forest.png",
  },
  {
    cardname: "Meadow",
    cardimg: "./img/meadow.png",
  },
  {
    cardname: "Aquarium",
    cardimg: "./img/aquarium.png",
  },
  {
    cardname: "Bloom",
    cardimg: "./img/bloom.png",
  },
  {
    cardname: "Medieval",
    cardimg: "./img/medieval.png",
  },
  {
    cardname: "Pirates",
    cardimg: "./img/pirates.png",
  },
  {
    cardname: "Beach",
    cardimg: "./img/beach.png",
  },
  {
    cardname: "Medieval",
    cardimg: "./img/medieval.png",
  },
  {
    cardname: "Bloom",
    cardimg: "./img/bloom.png",
  },
];

const postcontainer = document.querySelector(".card-img");

const postMethods = () => {
  cardbgData.map((postData) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card-box");
    postElement.innerHTML = `
    <img src="${postData.cardimg}" alt="change">
    <p class="card-name">${postData.cardname}</p>
    `;
    if(postcontainer){
      postcontainer.appendChild(postElement);
    } 
   
  });
};

postMethods();

// ==========================Card Face===============================================//

const cardfaceData = [
  {
    cardimg: "img/card_k9.png",
  },
  {
    cardimg: "img/k9_bleck.png",
  },
  {
    cardimg: "img/k9_blue.png",
  },
  {
    cardimg: "img/k9_bleck.bg.png",
  },
  {
    cardimg: "img/k9_red.bleck.png",
  },
  {
    cardimg: "img/k9_red.png",
  },
  // Add more objects as needed
];

const cardFaceContainer = document.querySelector(".cardface_box");

const faceDataCardImages = () => {
  cardfaceData.forEach((postData) => {
    const cardFaceElement = document.createElement("div"); // Renamed to cardFaceElement
    cardFaceElement.classList.add("card_face");

    // Create one more <div> element
    const additionalDiv = document.createElement("div");
    additionalDiv.classList.add("image_face_box");
    additionalDiv.innerHTML = `
      <img src="${postData.cardimg}" alt="change">
    `;
    // Append the additional div to the cardFaceElement
    if (cardFaceElement){
      cardFaceElement.appendChild(additionalDiv);
    }

    if (cardFaceContainer) {
      cardFaceContainer.appendChild(cardFaceElement);
    } 
  });
};

faceDataCardImages();

// ==========================Card Back ===============================================// 

const cardbackData = [
  {
    cardimg: "img/classic-cloth_bg.png",
  },
  {
    cardimg: "img/medieval_bg.png",
  },
  {
    cardimg: "img/paradise_king_bg.png",
  },
  {
    cardimg: "img/forest_bg.png",
  },
  {
    cardimg: "img/meadow_bg.png",
  },
  {
    cardimg: "img/pirates_bg.png",
  },
  // Add more objects as needed
];

const cardBackContainer = document.querySelector(".cardback");

const backDateCardImages = () => {
  cardbackData.forEach((postData) => {
    const cardBackElement = document.createElement("div"); // Renamed to cardElement
    cardBackElement.classList.add("card_face");

    // Create one more <div> element
    const cardImageContainer = document.createElement("div"); // Renamed to imageBox
    cardImageContainer.classList.add("image_face_box");
    cardImageContainer.innerHTML = `
      <img src="${postData.cardimg}" alt="change">
    `;
    // Append the additional div to the cardFaceElement
    if (cardBackElement){
      cardBackElement.appendChild(cardImageContainer);
    }

    if (cardBackContainer) {
      cardBackContainer.appendChild(cardBackElement);
    } 
  });
};

backDateCardImages();

// ========================== Settings ===============================================// 
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons and the popup
  let showPopupNumbersuits = document.getElementById("number_of_suits");
  let setting = document.getElementById("setting");
  let number_of_suits = document.querySelector(".number_of_suits");
  let ravshellPopup = document.getElementById("ravshellPopup");
  // Show the popup when the "Show Popup" button is clicked.\

  if (showPopupNumbersuits) {
    showPopupNumbersuits.addEventListener("click", function () {
      number_of_suits.style.display = "block";
      setting.style.display = "none";
      // console.log("15");
    });
    // Hide the popup when the "Hide Popup" button is clicked
    ravshellPopup.addEventListener("click", function () {
      number_of_suits.style.display = "none";
      setting.style.display = "block";
    });
  }
});

