const readline = require('readline');

const interFace = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function primeNumber(){
    interFace.question('Enter a Number',(num)=>{
        const inputNum = Number(num);
        let count = 0;
        for(let i=0;i<=inputNum;i++){
            if(inputNum%i===0){
                count++;
            }
        }
        if(count===2){
            console.log('Number is Prime')
        }else{
            console.log('Number is Not Prime')
        }
    })
}

primeNumber();