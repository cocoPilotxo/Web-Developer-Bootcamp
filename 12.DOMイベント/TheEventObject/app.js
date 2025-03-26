document.querySelector('button').addEventListener('click' ,function(){
    alert('クリック')
})

const input = document.querySelector('input')
input.addEventListener('keydown', function(e){
    console.log(e)
})
// input.addEventListener('keyup', function(){
//     console.log('keyup')
// })

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'Arrowup':
            console.log('↑')
            break
        case 'ArrowDown':
            console.log('↓')
            break
        case 'ArrowLeft':
            console.log('←')
            break
        case 'ArrowRight':
            console.log('→')
            break
    }
})