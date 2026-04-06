const body = document.querySelector("body");
const modeSwitch = document.querySelector(".toggle-switch");

modeSwitch.addEventListener("click", () => { 
    body.classList.toggle("dark");
})