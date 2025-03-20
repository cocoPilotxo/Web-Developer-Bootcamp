let todoList = ['水やりをする', 'ご飯を食べる'];
let command = '';

while (command !== 'quit'){
    if (command === 'new'){
        let todo = prompt('新しいタスクを入力してください。');
        todoList.push(todo);
        console.log(`「${todo}」を追加しました`);
    }

    else if (command === 'list'){
        console.log('****************************');
        for (let i = 0; i < todoList.length; i++){
            console.log(`${i+1}: ${todoList[i]}`);
        }
        console.log('****************************');
    }
    else if (command === 'delete'){
        let del = prompt('インデックスを入力してください。');
        console.log(`${todoList[del]}を削除しました。`);
        todoList.splice(del, 1);
    }
    command = prompt('コマンドを入力してください（new, list, delete, quit）');
}
console.log('アプリを終了しました。');