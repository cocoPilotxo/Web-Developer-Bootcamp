const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //この行は編集しないでください

//この下にコードを書いてください:
const span = document.querySelector('h1')
for (let i = 0; i < span.length(); i++){
    span[i].style.textColor = colors[i]
}

