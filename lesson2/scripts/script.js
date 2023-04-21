const options = {year:"numeric"}
document.querySelector("#currentyear").textContent = new Date().toLocaleDateString("en-US", options)

document.getElementById('lastmodified').innerHTML = (document.lastModified);