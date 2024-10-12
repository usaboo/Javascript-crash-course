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
let password = "pissword1234"

if(password.length>=12){
    console.log('password is mightly long')
}
else if(password.length >= 8){
    console.log('password is long enough')
}
else{
    console.log('password is not long enough')
}