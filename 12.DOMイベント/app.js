const btn = document.querySelector('#v2')

// btn.onclick = function(){
//     console.log('クリックした')
//     console.log('ほげほげ')
// }

function scream(){
    console.log('あああああああああああああ')
    console.log('いやあああああああああああああああ')
}

btn.onmouseenter = scream

document.querySelector('h1').onclick = () => {
    alert('h1をクリック')
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', scream)

function hoge(){
    console.log("hoge")
}
function moge(){
    console.log("moge")
}

const hogemogeButton = document.querySelector('#hogemoge')
hogemogeButton.addEventListener('click', hoge, {once: true})
hogemogeButton.addEventListener('click', moge, {once: true})
