function getColorsArray(seed, data) {
    const colorSchemeArray = []
    for (let i = 0; i < 5; i++) {
        colorSchemeArray.push(data.colors[i].hex.value)
    }
    
    return colorSchemeArray
}

function getColorSchemeOutputHtml(colorsArray) {
    return colorsArray.map(color => {
        const colorDiv = document.createElement('div')
        colorDiv.className = 'color'
        colorDiv.style.background = `${color}`
        
        return `
            ${colorDiv.outerHTML}
            <div class="hex">${color}</div>`
            
    }).join('')
}

export {getColorsArray, getColorSchemeOutputHtml}