const copyYear = document.querySelector(copyYear);
const currentYear = new Date().getFullYear();
copyYear = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById("lastmodified").textContent = lastModified;

