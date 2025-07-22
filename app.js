



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





const menuBtn = document.getElementById("hemburger");
const navMenu = document.getElementById("mobile-menu");


if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
}



const bottemBtn = document.getElementById("close-bottem");
const cookibtn = document.getElementById("cookies-btn");
const bottem = document.getElementById("fixed-bottem");

if (bottemBtn && bottem) {
    bottemBtn.addEventListener("click", () => {
        bottem.classList.add("hidden");
    });
}


if (cookibtn && bottem) {
    cookibtn.addEventListener("click", () => {
        bottem.classList.add("hidden");
    });
}


const consultationBtn = document.getElementById("consultation-btn");
const consultationForm = document.getElementById("consultation-form");
const consultationClosebtn = document.getElementById("consultation-form-close");


if (consultationBtn && consultationForm) {
    consultationBtn.addEventListener("click", () => {
        consultationForm.classList.toggle("hidden");
    });
}


if (consultationClosebtn && consultationForm) {
    consultationClosebtn.addEventListener("click", () => {
        consultationForm.classList.toggle("hidden");
    })
}


const about_btn = document.getElementById("showAbout-btn");
const about = document.getElementById("about");

if (about_btn && about) {
    about_btn.addEventListener("click", () => {
        about.classList.toggle("hidden")
    })
}


// Navactive

const links = document.querySelectorAll(".nav-link"); // sab nav links select karega
const currentPage = window.location.pathname.split("/").pop(); // current file name jaise "about.html"

if (links && currentPage) {
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            // agar link current page ka hai, to usme Tailwind ke color wale class daal do
            link.classList.add("text-red-700",);
        }
    });
}

function increaseQty() {
    let qtyInput = document.getElementById('quantity');
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQty() {
    let qtyInput = document.getElementById('quantity');
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}






