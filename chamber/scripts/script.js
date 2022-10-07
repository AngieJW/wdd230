const options = {
    year: "numeric",
}
document.querySelector("#currentyear").textContent = new Date().toLocaleDateString("en-US", options);

let lastUpdate = (document.lastModified);
document.getElementById("lastupdated").innerHTML = lastUpdate;