function checkAB(num) {
    // you can only write your code here!
    var A_loc=[];
    var B_loc=[];
    var distance=0;

    for (var i=0;i<num.length;i++){
        if (num[i]==='b'){
            B_loc.push(i);
        }
        else if(num[i]==='a'){
            A_loc.push(i);
        }
    }
    if (A_loc.length===0 || B_loc.length===0){
        return false;
    }
    for (let loc of B_loc){
        for(let loc2 of A_loc){
            distance=Math.abs(loc-loc2)-1
            if (distance===3){
                return true
            }
        }
    }

    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false 