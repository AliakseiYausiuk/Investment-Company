const burger = document.querySelector(".burger");
const btn = document.querySelectorAll(".btn");

burger.addEventListener("click", () => alert("Hellooo"));
btn.forEach((el) => el.addEventListener("click", () => alert("button click")));
