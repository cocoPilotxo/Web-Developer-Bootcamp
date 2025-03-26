function randomColors(){
    return Math.floor(Math.random() * 256)
}

function setColors(){
    const colorsArray = [0,0,0]
    for (let i = 0; i < colorsArray.length; i++){
        colorsArray[i] = randomColors()
    }
    document.body.style.backgroundColor = `rgb(${colorsArray[0]},${colorsArray[1]},${colorsArray[2]})`
    h1Tag.innerText = `rgb(${colorsArray[0]},${colorsArray[1]},${colorsArray[2]})`
}

const h1Tag = document.querySelector("#rgb")
const btn = document.querySelector("#btn")
btn.addEventListener('click', setColors)