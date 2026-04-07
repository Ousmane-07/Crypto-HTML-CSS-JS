const body = document.querySelector("body");
const modeSwitch = document.querySelector(".switch");

modeSwitch.addEventListener("click", () => {
    console.log("click"); 
    body.classList.toggle("dark");
})