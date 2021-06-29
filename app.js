const title = document.querySelector("div.hello:first-child h1");

console.log(title);

function handleTitleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);