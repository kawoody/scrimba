const theNumberInput = document.getElementById('the-number-input')
let theNumber = theNumberInput.value
const theNumberEls = document.querySelectorAll('.the-number')

//Grab each span element that will show a converted amount
const convMetersToFeet = document.getElementById('conv-meters2feet')
const convFeetToMeters = document.getElementById('conv-feet2meters')
const convLitersToGal = document.getElementById('conv-liters2gal')
const convGalToLiters = document.getElementById('conv-gal2liters')
const convKgToLb = document.getElementById('conv-kg2lb')
const convLbToKg = document.getElementById('conv-lb2kg')


theNumberInput.addEventListener("input", function() {
    
    //If there is a value in the input, make theNumber equal to it, otherwise theNumber is 0
    theNumberInput.value ? theNumber = theNumberInput.value : theNumber = 0
    
    //Insert THE NUMBER to the text content of each element with class .the-number
    for (const element of theNumberEls) {
        element.textContent = theNumber
    }
    
    //Conversion calculations to nearest 3 decimal places
    convMetersToFeet.textContent = (theNumber * 3.28084).toFixed(3)
    convFeetToMeters.textContent = (theNumber * 0.3048).toFixed(3)
    convLitersToGal.textContent = (theNumber * 0.2641722).toFixed(3)
    convGalToLiters.textContent = (theNumber * 3.78540967).toFixed(3)
    convKgToLb.textContent = (theNumber * 2.20462262185).toFixed(3)
    convLbToKg.textContent = (theNumber * 0.45359237).toFixed(3)
})