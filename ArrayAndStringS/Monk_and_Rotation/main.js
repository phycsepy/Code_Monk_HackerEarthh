const readline = require("readline-sync")


function solve(arr,rotate){
    const len = arr.length
    const rotation = rotate%len
    //if it  multipeles of rotate 
    if(rotation === 0){
        // console.log(arr)
        return arr
    }
    else{
        for(let i=0;i<rotation;i++){ 
            // console.log(`number of operations required ${rotate} but performed ${i} basically ${rotation}`)  
            arr.unshift(arr.pop())
        }
        //  console.log(arr)
        return arr
    }

}

//reading arr elements f()
function rotate_arrf(ele){
    let arr = []
    console.log(`enter any number and note after each element please press enter key total require ${ele} elements: `)
    for(let i =0;i<ele;i++){
        arr.push(Number(readline.question()))
    }
    return arr
}

//main running code
function main(){
const testCaseNo = Number( readline.question('How many test cases required: '))


for(let i = 0; i<testCaseNo;i++){
    const  numOfele = Number(readline.question(`number of elements for test case -${i+1}:`))
    const  rotateval = Number(readline.question('rotate value : '))
    const rotate_arr = rotate_arrf(numOfele)
    console.log(solve(rotate_arr,rotateval))
    
}

}

main()  