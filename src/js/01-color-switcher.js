
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body
const bStart = document.querySelector("[data-start]")
const bEnd = document.querySelector("[data-stop]")
let timerId;
bStart.addEventListener("click", () => {
    bStart.disabled = true
    changeColor()
    timerId = setInterval(() => {        
       changeColor()
    }, 1000);
})
const changeColor = function () {
    const color = getRandomHexColor();
    body.style.backgroundColor=color
}
bEnd.addEventListener("click", () => {
    clearInterval(timerId);
    bStart.disabled = false
})