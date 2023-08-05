
let landingPage = document.querySelector(".landing-page");
let imgsArray = [
  "wallpaperflare1.jpg",
  "wallpaperflare2.jpg",
  "wallpaperflare3.jpg",
  "wallpaperflare4.jpg",
  "wallpaperflare5.jpg",
  "wallpaperflare6.jpg",
  "wallpaperflare7.jpg",
  "wallpaperflare8.jpg",
  "wallpaperflare9.jpg",
  "wallpaperflare10.jpg",
  "wallpaperflare11.jpg",
  "wallpaperflare12.jpg",
];

// Function To Randomize Imgs
function randomizeImgs() {
  backgroundInterval = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("/' + imgsArray[randomNumber] + '")';
  }, 3000);
}

randomizeImgs();

// Letter By Letter Text
var i = 0;
var txt = "كل شيء لتنظيم حفل الزفاف الخاص بك"; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Menu in Small media
function openNav() {
  var x = document.getElementById("mySidenav");
  x.classList.toggle('wdth')
}



// Show footer img in the main img onhover
function showOnHover(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}
function test() {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = expandedImg.alt;
}

function showOnHover2(imgs) {
  var expandImg = document.getElementById("expandedImg2");
  expandImg.src = imgs.src;
}
function test2() {
  var expandImg2 = document.getElementById("expandedImg2");
  expandImg2.src = expandedImg2.alt;
}

function showOnHover3(imgs) {
  var expandImg = document.getElementById("expandedImg3");
  expandImg.src = imgs.src;
}
function test3() {
  var expandImg3 = document.getElementById("expandedImg3");
  expandImg3.src = expandedImg3.alt;
}

function showOnHover4(imgs) {
  var expandImg = document.getElementById("expandedImg4");
  expandImg.src = imgs.src;
}
function test4() {
  var expandImg4 = document.getElementById("expandedImg4");
  expandImg4.src = expandedImg4.alt;
}



// First slider
const productContainers = [...document.querySelectorAll('.product-container')]
const PnxtBtn = [...document.querySelectorAll(' .nxt-btn')]
const PpreBtn = [...document.querySelectorAll(' .pre-btn')]

productContainers.forEach((item, i) => {
  let containerDimenstion = item.getBoundingClientRect()
  let containerWidth = containerDimenstion.width
  PnxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
  })
  PpreBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth
  })
  
})

// Second Slider 
const robesContainer = [
  ...document.querySelectorAll(".catalogues .robes-container"),
];
robesContainer.forEach((item) => {
  let containerDimenstion = item.getBoundingClientRect();
  let containerWidth = containerDimenstion.width;
  document.getElementById('nxt').addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  document.getElementById("pre").addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
// Catalogues

let MRobes = [
  ["wallpaperflare7", "pretty robe"],
  ["wallpaperflare5", "pretty cilkm"],
  ["wallpaperflare7", "pretty cilk"],
  ["wallpaperflare10", "pretty ilkm"],
  ["wallpaperflare8", "pretty clkm"],
];
let Suits = [
  ["wallpaperflare7", "pretty robe"],
  ["wallpaperflare5", "pretty cilkm"],
  ["wallpaperflare7", "pretty cilk"],
  ["wallpaperflare10", "pretty ilkm"],
  ["wallpaperflare8", "pretty clkm"],
];
let SRobes = [
  ["wallpaperflare7", "pretty robe"],
  ["wallpaperflare5", "pretty cilkm"],
  ["wallpaperflare7", "pretty cilk"],
  ["wallpaperflare10", "pretty ilkm"],
  ["wallpaperflare8", "pretty clkm"],
];
let Jewerly = [
  ["wallpaperflare1", "pretty robe"],
  ["wallpaperflare2", "pretty cilkm"],
  ["wallpaperflare3", "pretty cilk"],
  ["wallpaperflare4", "pretty ilkm"],
  ["wallpaperflare5", "pretty clkm"],
];
let Shoes = [
  ["wallpaperflare7", "pretty robe"],
  ["wallpaperflare5", "pretty cilkm"],
  ["wallpaperflare7", "pretty cilk"],
  ["wallpaperflare10", "pretty ilkm"],
  ["wallpaperflare8", "pretty clkm"],
];
let Lingerie = [
  ["wallpaperflare7", "pretty robe"],
  ["wallpaperflare5", "pretty cilkm"],
  ["wallpaperflare7", "pretty cilk"],
  ["wallpaperflare10", "pretty ilkm"],
  ["wallpaperflare8", "pretty clkm"],
];
let Accessories = [
  ["wallpaperflare7", "pretty robe"],
  ["wallpaperflare5", "pretty cilkm"],
  ["wallpaperflare7", "pretty cilk"],
  ["wallpaperflare10", "pretty ilkm"],
  ["wallpaperflare8", "pretty clkm"],
];
const slImgs = document.getElementsByClassName('robe-thumb')
const robeInf = document.getElementsByClassName("robe-inf");

function showMRobes() {
  for (let i = 0; i < MRobes.length; i++) {
    slImgs[i].src = "/" + MRobes[i][0] + ".jpg";
    robeInf[i].innerHTML = MRobes[i][1];
  }
}
function showSuits() {
  for (let i = 0; i < Suits.length; i++) {
    slImgs[i].src = "/" + Suits[i][0] + ".jpg";
    robeInf[i].innerHTML = Suits[i][1];
  }
}
function showSRobes() {
  for (let i = 0; i < SRobes.length; i++) {
    slImgs[i].src = "/" + SRobes[i][0] + ".jpg";
    robeInf[i].innerHTML = SRobes[i][1];
  }
}
function showJewerly() {
  for (let i = 0; i < Jewerly.length; i++) {
    slImgs[i].src = "/" + Jewerly[i][0] + ".jpg";
    robeInf[i].innerHTML = Jewerly[i][1];
  }
}
function showShoes() {
  for (let i = 0; i < Shoes.length; i++) {
    slImgs[i].src = "/" + Shoes[i][0] + ".jpg";
    robeInf[i].innerHTML = Shoes[i][1];
  }
}
function showLingerie() {
  for (let i = 0; i < Lingerie.length; i++) {
    slImgs[i].src = "/" + Lingerie[i][0] + ".jpg";
    robeInf[i].innerHTML = Lingerie[i][1];
  }
}
function showAccessories() {
  for (let i = 0; i < Accessories.length; i++) {
    slImgs[i].src = "/" + Accessories[i][0] + ".jpg";
    robeInf[i].innerHTML = Accessories[i][1];
  }
}

// honeymoon sliders Start

const hotelsContainer = [...document.querySelectorAll(".hotels-container")];
const restaurantsContainer = [...document.querySelectorAll(".restaurants-container")];
const placesContainer = [...document.querySelectorAll(".places-container")];

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function openButton(evt, buttonName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(buttonName).style.display = "block";
  evt.currentTarget.className += " active";

hotelsContainer.forEach((item) => {
  let containerDimenstion = item.getBoundingClientRect();
  let containerWidth = containerDimenstion.width;
  document.getElementById("h-nxt").addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  document.getElementById("h-pre").addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});


  restaurantsContainer.forEach((item) => {
    let containerDimenstion = item.getBoundingClientRect();
    let containerWidth = containerDimenstion.width;
    document.getElementById("r-nxt").addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });
    document.getElementById("r-pre").addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });
  placesContainer.forEach((item) => {
    let containerDimenstion = item.getBoundingClientRect();
    let containerWidth = containerDimenstion.width;
    document.getElementById("p-nxt").addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });
    document.getElementById("p-pre").addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });
}

// honeymoon sliders End