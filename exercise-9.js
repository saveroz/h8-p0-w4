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
    else if (Math.max(...A_loc)>Math.max(...B_loc)){
        distance=Math.max(...A_loc)-Math.min(...B_loc);
    }
    else{
        distance=Math.max(...B_loc)-Math.min(...A_loc);
    }
    return distance>=3;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true*/
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false 