// Write a function that accepts an array of strings and console.logs each element using a for loop.
let array =["bob","job","joy","box"];
function arrays(array){
    for(let i=0; i<array.length;i++){
        console.log(array[i]); 
}

}
arrays(array)


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let number =[45,67,85,8];
function numbers(number){
    number.forEach(x => {console.log(x*2)
        
    });

}
numbers(number);


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values
let num = [34,5,7,23,89,23,90,100];
function numerals(num){
    let empty = [];
    for(let i =0; i<num.length; i++){
        if(i<4){
           empty.push(num[i]*8)
        }
        else if(i>=num.length-2){
          empty.push(num[i]+5)
        }

    }
    console.log(empty)

}
numerals(num);

// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function arrays(arrNum){
    let i=0;
while(i< arrNum.length){
    if(i===4){
        break;

    }
    console.log(arrNum[i]);
    i++

    
}
}
arrays(arrNum)



// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
 let fruits= ['apple','plum','banana','strawberries','kiwi'];
 function Arrays(){
    for(let i=0; i<array.length;i++){
        if(i===2){
            continue;
        }
        console.log([i])
    }
}
Arrays();