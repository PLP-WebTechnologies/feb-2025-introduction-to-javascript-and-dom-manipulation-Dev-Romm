
const button = document.getElementById("btn");
const paragraph = document.getElementsByClassName("pg");
button.addEventListener("click", () => {
    alert("Button clicked!");
    paragraph[0].innerHTML = "<p>WELCOME TO JAVASCRIPT DOM</p>";
    button.textContent = "Clicked!";
    button.style.backgroundColor = "yellow";
    button.style.color = "black";
    button.style.border = "2px solid black";
    button.style.outline = "1px dotted red";
    button.style.fontSize = "20px";
    button.style.display = "block";
    button.style.margin = "0 auto";
});