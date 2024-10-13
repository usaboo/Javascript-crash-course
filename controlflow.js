//for loop

for(let i = 0; i<5; i++){
    console.log('in loop', i)
}

const names = ['mario', 'luigi', 'wario']

for(let j = 0; j<names.length; j++){
    console.log(names[j])
}

//while loop

i = 0

while(i<5){
    console.log('in while loop:',i);
    i++;
}

//if statement
let password = "1234"

if(password.length>=12 && password.includes("@")){
    console.log('password is mightly strong')
}
else if(password.length >= 8 || password.includes("@")){
    console.log('password is strong enough')
}
else{
    console.log('password is not strong enough')
}

//logical not(!)
console.log(!true)
console.log(!false)

//break and continue
const scores = [10,0,20,100,30,40,50]

for(let i = 0; i<5 ; i++){

    if(scores[i] == 0){
        continue;
    }

    console.log("your score is, ", scores[i] )
    if(scores[i] == 100){
        console.log(i)
        console.log("congrats you got a 100!")
        break;
    }
}

//switch statements
const grade = "D";

switch(grade){
    case 'A':
        console.log('you got an A')
        break;

    case 'B':
        console.log('you got a B')
        break;

    case 'C':
        console.log('you got a C')
        break;

    case 'D':
        console.log('you got a D')
        break;

    default:
        console.log('Not a valid grade')
        break;
}
