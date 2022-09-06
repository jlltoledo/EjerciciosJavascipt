let numbers = [1, 2, 5, 14, 24, 31, 50, 105];
console.log(desordernar(numbers));

function desordernar(nums) {
    let numsd = new Array();
    for (let i = 0; i < nums.length; i++) {
        numsd[nums.length-i] = nums[i];

    }
    return numsd;
}







//De esta manera se mostraban distintas cada vez que refrescaba la página

// console.log(numbers);
// console.log(numbers.sort(()=>Math.random()-0.5));