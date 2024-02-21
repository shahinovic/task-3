const colors = [
  { first: "#B799FF", second: "#ECF2FF" },
  { first: "#4649FF", second: "#146C94" },
  { first: "#27E1C1", second: "#0EA293" },
  { first: "#05BFDB", second: "#088395" },
  { first: "#9DB2BF", second: "#526D82" },
  { first: "#088395", second: "#93BFCF" },
  { first: "#87CBB9", second: "#05BFDB" },
];

const span1 = document.querySelector(".app .text h1 span:nth-child(1)");
const h1 = document.querySelector(".app .text h1 span:nth-child(2)");
const span2 = document.querySelector(".app .text h1 span:nth-child(3)");
const h2 = document.querySelector(".app .content h2");
const p1 = document.querySelector(".app .content p:nth-of-type(1)");
const p2 = document.querySelector(".app .content p:nth-of-type(2)");
const elements = [span1, h1, span2, h2, p1, p2];
console.log("🚀 ~ file: app.js:18 ~ elements:", elements);

const pagesImages = [
  [
    `<img src='images/nexgtv-entertainment-mobile-app-development.png' />`,
    `<img src='images/nexgtv-mobile-app-ui-design.png' />`,
  ],
  [
    `<img src='images/veme-blockchain-app-developed.png' />`,
    `<img src='images/veme-app-ui-design.png' />`,
  ],
  [
    `<img src='images/nasa-fitness-tracking-mobile-app.png' />`,
    `<img src='images/measure-total-body-weight-through-fitness-app.png' />`,
  ],
  [
    `<img src='images/domi-img1.png' />`,
    `<img src='images/ux-strategy-for-mobile-app-devlopment.png' />`,
    `<img src='images/pizza_box.png' />`,
    `<img src='images/dominos-bread.png' />`,
    `<img src='images/dominos-bread1.png' />`,
  ],
  [
    '<img src="images/karavan-social-networking-app-screen.png" />',
    '<img src="images/social-networking-app-case-study.png" />',
    '<img src="images/developers-for-social-media-app.png" />',
    '<img src="images/karavan_2.png" />',
    '<img src="images/karavan-social-networking-app-screen-2.png" />',
  ],
  [`<img src='images/erp-app-development-service.png'/>`],

  [
    `<img src='images/melltoo-img2.png'/>`,
    `<img src='images/melltoo-img1.png'/>`,
  ],
];

const textContent = [
  {
    span1: "",
    h1: "25M+ Downloads",
    span2: "on appstore & google playstore",

    h2: "ABC 123",
    p1: "we are the best web development",
    p2: "company in the world",
  },
  {
    span1: "The Next Big",
    h1: "Blockchain",
    span2: "Revolution",

    h2: "ABC 234",
    p1: "we are the best web development",
    p2: "company in the world",
  },
  {
    span1: "Powered by advance",
    h1: "<img style='width:100%' src='images/nasa-mobile-app.png' />",
    span2: "algorithms",

    h2: "ABC 456",
    p1: "we are the best web development",
    p2: "company in the world",
  },

  {
    span1: "Redefining",
    h1: "UX Strategy",
    span2: "and UI Design",

    h2: "ABC 789",
    p1: "we are the best web development",
    p2: "company in the world",
  },

  {
    span1: "Text Headline",
    h1: "Text Headline",
    span2: "Footer Headline",

    h2: "ABC 147",
    p1: "we are the best web development",
    p2: "company in the world",
  },
  {
    span1: "Developing ERP Solutions for",
    h1: "Text Headline",
    span2: "in furniture industry",

    h2: "ABC 456",
    p1: "we are the best web development",
    p2: "company in the world",
  },
  {
    span1: "Biggest Classfields",
    h1: "East Asia",
    span2: "Countries",

    h2: "ABC 23478",
    p1: "we are the best web development",
    p2: "company in the world",
  },
];

const setDate = (domElements, content, index) => {
  for (let i = 0; i < domElements.length; i++) {
    domElements[i].innerHTML =
      content[index][`${Object.keys(content[index])[i]}`];
  }
};
// Get all dots-nav elements
var dots = document.querySelectorAll(".dotsst");

// line
const line = document.querySelector("#Opaque_Ring");

// text div
const text = document.querySelector(".text");

// images div
const imgs = document.querySelector(".imgs");

// circle div

const circle = document.querySelector(".circle");

const app = document.querySelector(".app");

window.onload = () => {
  for (let i = 1; i < dots.length; i++) {
    dots[i].style.opacity = "0";
    app.classList.add("active");
  }
};

// Calculate the height of each section
var sectionHeight = app.clientHeight;

// Calculate the total scrollable height
var totalScrollHeight = sectionHeight * (dots.length - 1);

var previousSectionIndex = 0; // Initialize previousSectionIndex

// Listen for scroll event
window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the current section index
  var currentSectionIndex = Math.floor(scrollPosition / sectionHeight);

  // Calculate the next section index based on scroll direction
  var nextSectionIndex;
  if (scrollPosition < totalScrollHeight) {
    nextSectionIndex = Math.floor(scrollPosition / sectionHeight);
  } else {
    nextSectionIndex = dots.length - 1;
  }

  // app.classList.remove("active");
  console.log(
    "🚀 ~ file: app.js:180 ~ previousSectionIndex:",
    previousSectionIndex
  );
  console.log(
    "🚀 ~ file: app.js:180 ~ currentSectionIndex:",
    currentSectionIndex
  );
  if (currentSectionIndex !== previousSectionIndex) {
    app.classList.remove("active");
    setTimeout(() => {
      app.classList.add("active"); // Add "active" class to app
    }, 100);
    previousSectionIndex = currentSectionIndex; // Update previousSectionIndex
  }

  // Set the opacity for each dot based on the next section index
  for (var i = 0; i < dots.length; i++) {
    imgs.innerHTML = "";
    imgs.innerHTML = pagesImages[currentSectionIndex].join(" ");

    if (i <= nextSectionIndex) {
      setDate(elements, textContent, currentSectionIndex);
      imgs.dataset.index = currentSectionIndex;
      text.style.backgroundColor = colors[i].first;
      circle.style.backgroundColor = colors[i].first;
      imgs.style.backgroundColor = colors[i].second;
      dots[i].style.opacity = "1";
      line.style.strokeDasharray = `${i * 135}, 1000`;
    } else {
      dots[i].style.opacity = "0";
    }
  }
});
