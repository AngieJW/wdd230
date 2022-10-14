const options = {
    year: "numeric",
}
document.querySelector("#currentyear").textContent = new Date().toLocaleDateString("en-US", options);

let lastUpdate = (document.lastModified);
document.getElementById("lastupdated").innerHTML = lastUpdate;

const date = new Date();
let fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
document.getElementById("currentdate").innerHTML = fullDate;

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton")
x.onclick = toggleMenu;