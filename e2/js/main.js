let numbers = [-1, 3, 4, 2, 6];

console.log(menor(numbers));

function menor(nums) {
    let min = nums[0];
    for (let i=0; i < nums.lenght; i++){
        if (nums[i]< min){
            min = nums[i];
        }
    }
    return min;
}





//console.log(Math.min.apply(null, numbers));


