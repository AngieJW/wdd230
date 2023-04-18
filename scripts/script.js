//const options = {weekday:"long", day: "numeric", month:"long", year:"numeric"}
// to have the full date option : document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString("en-US", options)

const options = {year:"numeric"}
document.querySelector("#currentyear").textContent = new Date().toLocaleDateString("en-US", options)

document.getElementById('lastmodified').innerHTML = (document.lastModified)