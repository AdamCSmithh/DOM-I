const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav bar selectors
const nav1 = document.querySelector('nav a');
const nav2 = nav1.nextElementSibling;
const nav3 = nav2.nextElementSibling;
const nav4 = nav3.nextElementSibling;
const nav5 = nav4.nextElementSibling;
const nav6 = nav5.nextElementSibling;
const navImg = document.querySelector('#logo-img');

//Call to Action selectors
const cta = document.querySelector(".cta");
const ctaText = document.querySelector(".cta-text");
const ctaH1 = ctaText.querySelector("h1");
const ctaButton = ctaText.querySelector("button");
const ctaImg = cta.querySelector("#cta-img");

//Main content selectors
const mainContent = document.querySelector(".main-content");
const topContent = mainContent.querySelector(".top-content");
const textContent = topContent.querySelector(".text-content");
const middleImg = document.querySelector("#middle-img");
const h4 = document.querySelectorAll("h4");
const p = document.querySelectorAll("p");

//Contact Selectors
const contact = document.querySelector(".contact");
const contactHeader = contact.querySelector("h4");
const footerP = contact.querySelectorAll("p");
const footer = document.querySelector("footer p");


//Nav section
nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];
navImg.src = siteContent["nav"]["img-src"];

//Call to Action section
ctaH1.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//Main content section
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
middleImg.src = siteContent["main-content"]["middle-img-src"];
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

//Contact section
contactHeader.textContent = siteContent["contact"]["contact-h4"];
footerP[0].textContent = siteContent["contact"]["address"];
footerP[1].textContent = siteContent["contact"]["phone"];
footerP[2].textContent = siteContent["contact"]["email"];

//Footer
footer.textContent = siteContent["footer"]["copyright"];
