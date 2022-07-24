
const menuButton = document.querySelector(".menu-box");
const menu = document.querySelector(".menu-container");
const xButton = document.querySelector(".x-button");
const popupContainer = document.querySelector(".popup-container");
const contactButton = document.querySelector(".contact-button");

let isOpen = false;
let popIsOpen = false;

menuButton.addEventListener("click", () => {
    if(!isOpen){
        menu.classList.add("open");
        menuButton.classList.add("open");
        isOpen = true;
    }else{
        menu.classList.remove("open");
        menuButton.classList.remove("open");
        isOpen = false;
    }
})

document.querySelectorAll(".link").forEach(e => e.addEventListener("click", () =>{
    menu.classList.remove("open");
    menuButton.classList.remove("open");
    isOpen = false;
}))

contactButton.addEventListener("click", () => {
    if(!popIsOpen){
        popupContainer.classList.add("open");
        popIsOpen = true;
    }
})

xButton.addEventListener("click", () => {
    if(popIsOpen){
        popupContainer.classList.remove("open");
        popIsOpen = false;
    }
})

document.querySelector(".popup-button").addEventListener("click", () => {
    const name = document.getElementById("name-field").value = "";
    const message = document.getElementById("message-field").value = "";
    alert("Sent!")
})
