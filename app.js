



function scrollToTop() {
    window.scrollTo({top: 0, behavior:'smooth'});
}





const menuBtn = document.getElementById("hemburger");
const navMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
});

const bottemBtn = document.getElementById("close-bottem");
const cookibtn = document.getElementById("cookies-btn");
const bottem = document.getElementById("fixed-bottem");

bottemBtn.addEventListener("click", () => {
    bottem.classList.add("hidden");
});

cookibtn.addEventListener("click", () => {
    bottem.classList.add("hidden");
});

const messageBtn = document.getElementById("message-btn");
const messageText = document.getElementById("message-text");

messageBtn.addEventListener("click", () => {
    messageText.classList.toggle("hidden");
});


const consultationBtn = document.getElementById("consultation-btn");
const consultationForm = document.getElementById("consultation-form");
const consultationClosebtn = document.getElementById("consultation-form-close");

consultationBtn.addEventListener("click", () => {
    consultationForm.classList.toggle("hidden");
});

consultationClosebtn.addEventListener("click", () => {
    consultationForm.classList.toggle("hidden");
})

console.log(consultationBtn, consultationForm);



