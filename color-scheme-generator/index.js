import {getColorsArray, getColorSchemeOutputHtml} from './functions.js'

document.getElementById('color-widget-form').addEventListener('submit', (e) => {
    const seedColor = document.getElementById('seed-color').value.slice(1)
    const schemeChoice = document.getElementById('color-scheme-select').value
    
    e.preventDefault()
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeChoice}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('color-scheme-output').innerHTML = getColorSchemeOutputHtml(getColorsArray(seedColor, data))
        })
        
})

for (const element of document.querySelectorAll('.hex')) {
    element.addEventListener('click', () => {
        console.log(element.textContent)
    })
}


