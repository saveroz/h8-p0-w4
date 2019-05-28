function checkAB(num) {
    // you can only write your code here!
    var checkpoint="";
    var distance=0;
    var listDist=[];
    for (letter of num){
        if ((letter==='a' || letter==='b' )&& !checkpoint){
            checkpoint=letter;
        }
        else if (checkpoint && checkpoint!==letter){
            distance+=1;
        }
        else if((letter==='a' || letter==='b') && checkpoint){
            listDist.push(distance);
        }
    }
    return distance
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  /*console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false */