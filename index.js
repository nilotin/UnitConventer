const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const meterDiv = document.getElementById("meter")
const literDiv = document.getElementById("liter")
const kiloDiv = document.getElementById("kilo")

convertBtn.addEventListener('click', function () {
    if (inputEl.value) {
        meterDiv.innerHTML = `<p>${inputEl.value} meters = ${meterToFeet()} feet ⎟ ${inputEl.value} feet = ${feetToMeter()} feet</p>`
        literDiv.innerHTML = `<p>${inputEl.value} meters = ${literToGallon()} feet ⎟ ${inputEl.value} feet = ${gallonToLiter()} feet</p>`
        kiloDiv.innerHTML = `<p>${inputEl.value} meters = ${kiloToPound()} feet ⎟ ${inputEl.value} feet = ${poundToKilo()} feet</p>`
    }
})

function meterToFeet() {
    let feet = inputEl.value * 3.281
    return feet.toFixed(3)
}

function feetToMeter() {
    let meter = inputEl.value / 3.281
    return meter.toFixed(3)
}

function literToGallon() {
    let gallon = inputEl.value * 0.264
    return gallon.toFixed(3)
}

function gallonToLiter() {
    let liter = inputEl.value / 0.264
    return liter.toFixed(3)
}

function kiloToPound() {
    let pound = inputEl.value * 2.204
    return pound.toFixed(3)
}

function poundToKilo() {
    let kilo = inputEl.value / 2.204
    return kilo.toFixed(3)
}