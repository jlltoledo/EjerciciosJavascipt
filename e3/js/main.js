const numbers = [1, 22, 5, 17, 10, 5, 40, 5]
console.log(numbers);

let repetidos = function (nums){

    for(let i = 0; i< nums.length; i++){
        let cont = 0;
        for (let j = 0; j < nums.length; j++){
            if (nums[i]==nums[j]){
                cont ++;
            }
    
        }
        if (cont!=1)
            console.log(`El número ${nums[i]} se repite ${cont} veces`);
    }


}

repetidos(numbers);





// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i+1] === numbers[i]){
//         console.log("El número que se repite es tres veces es " + numbers[i]);
    

