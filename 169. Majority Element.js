var majorityElement = function(nums) {
    let value =null;
    let count=0;
    for(let num of nums){
        if(count===0){
            value=num;
        }
        if(num === value){
            count++;
        }
        else count--
    }
    return value;
};
let nums=[2,1,2];
console.log(majorityElement(nums));