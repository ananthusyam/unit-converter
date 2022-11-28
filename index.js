
const inputEL = document.getElementById("input-el")
const convBtn = document.getElementById("conv-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convBtn.addEventListener("click", function() {
    render(inputEL.value)
})
function render(no) {
    let length = ""
    let volume = ""
    let mass = ""
    length += `${no} meters = ${(no * 3.2808).toFixed(3)} feet | ${no} feet = ${(no * 0.3048).toFixed(3)} meters`
    volume += `${no} liters = ${(no * 0.2642).toFixed(3)} gallons | ${no} gallons = ${(no * 3.7854).toFixed(3)} liters`
    mass += `${no} kilos = ${(no * 2.2046).toFixed(3)} pounds | ${no} pounds = ${(no * 0.4536).toFixed(3)} kilos` 
    lengthEl.innerHTML = length
    volumeEl.innerHTML = volume
    massEl.innerHTML = mass
}