let number = parseInt(prompt("数字を入力してください"));

while(!number) {
    number = parseInt(prompt("エラーが起きました。有効な数字を入力してください")); 
}

let targetNum = Math.floor(Math.random() * number) + 1;
let count = 1;

let guess = prompt("一つ数字を決めました。数字を当ててみてください");
while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    count++;
    if(guess > targetNum){
        guess = prompt("その数字よりも小さいです。もう一度入力してください");
    } else {
        guess = prompt("その数字よりも大きいです。もう一度入力してください");
    }
}

if(guess === 'q') {
    console.log("ゲームを終了します");
} else {
    console.log(`正解です！${count}回目で当たりました！`);
}
