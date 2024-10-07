

//for all prime numbers from given arr
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  

  const primeArray = []
function primeArr(numbers){
    
        let count =0;
    for(let i=0; i<numbers.length; i++){

        for(let j=0; j<numbers.length; j++){
            if(numbers[i]%j==0){
                count++;
            }
        }
    }
    if(count==2){
        primeArray += numbers[i]
    }else{
        console.log("Is not prime")
    }
}
    let max = -Infinity;
    let min = Infinity;
    function maxMin(primeArray){

        for(let i=0; i<primeArray.length; i++){
            
            if(primeArray[i]<min){
                primeArray = min;
            }
            if(primeArray[i]>max){
                primeArray = max;
            }
        }
        console.log(max,min)
    }
    console.log(maxMin(primeArray));
