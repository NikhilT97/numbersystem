

const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

function checkOddEven(numbers){


    
  
      for(let i=0; i<numbers.length; i++){

        if(numbers[i]%2==0 || numbers[i]%2==1){
            console.log(numbers[i])
        }
      }
      
}
console.log(checkOddEven(numbers))