function rollDie(numSides=6){
    return Math.floor(Math.random() * numSides) + 1;
}

// function sum(){
//     return arguments.reduce((total, arg) => total + arg);
// }

function sum(...nums){
    return nums.reduce((total, num) => total + num);
}

const runner = {
    email : 'fdjflkdajfla@gmail.com',
    password: 'ggg129',
    state: 'Takatsuki'
}

function fullName(user){
    return `${user.firstName} ${user.lastName}`;
}