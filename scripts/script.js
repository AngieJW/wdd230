const year = new Date().getFullYear();
document.querySelector('#currentyear').textContent = year;

const lastModified = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = lastModified;

