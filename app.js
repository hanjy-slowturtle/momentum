const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);

function handleH1Click() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleH1Click);