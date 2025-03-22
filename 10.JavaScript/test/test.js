const myMath = {
    PI: 3.14,
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}

const cat = {
    name: 'tama',
    color:'grey',
    breed:'アメリカンショートヘア',
    cry(){
        console.log(this.name);
    }
}

try{
    hello.toUpperCase();
} catch{
    console.log('エラーが起きました！！！');
}