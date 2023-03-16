"use strict";

const sec = document.querySelector(".s"), // подключение к секундной
      min = document.querySelector(".m"), // Минутная
      hor = document.querySelector(".h"), // Часовая
      hoursNumber = document.querySelector(".hours"),
      minutesNumber = document.querySelector(".minutes");

const tabs = document.querySelectorAll(".tabsItem"),
      tabsContent = document.querySelectorAll(".tabsContentItem");

tabs[1].addEventListener("click", () => {
    tabs[1].setAttribute("class", "tabsItem active");
    tabs[0].setAttribute("class", "tabsItem");
    tabsContent[1].setAttribute("class", "stopwatch tabsContentItem active");
    tabsContent[0].setAttribute("class", "stopwatch tabsContentItem");
});

tabs[0].addEventListener("click", () => {
    tabs[0].setAttribute("class", "tabsItem active");
    tabs[1].setAttribute("class", "tabsItem");
    tabsContent[0].setAttribute("class", "stopwatch tabsContentItem active");
    tabsContent[1].setAttribute("class", "stopwatch tabsContentItem");
});



function clock() {
    let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

sec.style = `transform: rotate(${seconds}deg)`;
min.style = `transform: rotate(${minutes}deg)`;
hor.style = `transform: rotate(${hours + (minutes / 12)}deg)`;

hoursNumber.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
minutesNumber.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

sec.animate([
    {transform: `rotate(${seconds}deg)`},
    {transform: `rotate(${seconds + 6}deg)`},
],
{
    fill: "forwards",
    duration: 1000,
    easing: "linear"
}
)

setTimeout(() => {
    clock();
}, 1000);
}

clock();
